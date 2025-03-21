const crypto = require('crypto');
const User = require('../models/User');
const sendEmail = require('../utils/sendEmail');
const { validationResult } = require('express-validator');

// @desc    Registrar usuário
// @route   POST /api/auth/register
// @access  Público
exports.register = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password, role } = req.body;

    // Verificar se o usuário já existe
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({
        success: false,
        error: 'Email já cadastrado'
      });
    }

    // Criar usuário
    user = await User.create({
      name,
      email,
      password,
      role: role || 'paciente'
    });

    sendTokenResponse(user, 201, res);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erro no servidor');
  }
};

// @desc    Login de usuário
// @route   POST /api/auth/login
// @access  Público
exports.login = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    // Verificar se o email e senha foram fornecidos
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        error: 'Por favor, forneça email e senha'
      });
    }

    // Verificar se o usuário existe
    const user = await User.findOne({ email }).select('+password');

    if (!user) {
      return res.status(401).json({
        success: false,
        error: 'Credenciais inválidas'
      });
    }

    // Verificar se a senha está correta
    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        error: 'Credenciais inválidas'
      });
    }

    // Atualizar último login
    user.lastLogin = Date.now();
    await user.save();

    sendTokenResponse(user, 200, res);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erro no servidor');
  }
};

// @desc    Obter usuário atual
// @route   GET /api/auth/me
// @access  Privado
exports.getMe = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);

    res.status(200).json({
      success: true,
      data: user
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erro no servidor');
  }
};

// @desc    Esqueci minha senha
// @route   POST /api/auth/forgotpassword
// @access  Público
exports.forgotPassword = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'Não existe usuário com esse email'
      });
    }

    // Obter token de redefinição
    const resetToken = user.getResetPasswordToken();

    await user.save({ validateBeforeSave: false });

    // Criar URL de redefinição
    const resetUrl = `${req.protocol}://${req.get(
      'host'
    )}/api/auth/resetpassword/${resetToken}`;

    const message = `Você solicitou a redefinição de senha. Acesse: ${resetUrl}`;

    try {
      await sendEmail({
        email: user.email,
        subject: 'Token de redefinição de senha',
        message
      });

      res.status(200).json({
        success: true,
        data: 'Email enviado'
      });
    } catch (err) {
      console.log(err);
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;

      await user.save({ validateBeforeSave: false });

      return res.status(500).json({
        success: false,
        error: 'Email não pôde ser enviado'
      });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erro no servidor');
  }
};

// @desc    Redefinir senha
// @route   PUT /api/auth/resetpassword/:resettoken
// @access  Público
exports.resetPassword = async (req, res, next) => {
  try {
    // Obter token hasheado
    const resetPasswordToken = crypto
      .createHash('sha256')
      .update(req.params.resettoken)
      .digest('hex');

    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() }
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        error: 'Token inválido ou expirado'
      });
    }

    // Definir nova senha
    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();

    sendTokenResponse(user, 200, res);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erro no servidor');
  }
};

// Função auxiliar para enviar resposta com token
const sendTokenResponse = (user, statusCode, res) => {
  // Criar token
  const token = user.getSignedJwtToken();

  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true
  };

  if (process.env.NODE_ENV === 'production') {
    options.secure = true;
  }

  res
    .status(statusCode)
    .cookie('token', token, options)
    .json({
      success: true,
      token
    });
};
