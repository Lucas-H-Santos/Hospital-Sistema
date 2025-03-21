# Code Citations

## License: desconhecido
https://github.com/kukori/dev_camp_api/blob/edbdc320649313fbd533844320a6cc29fe88f0cf/models/User.js

```
js
```


## License: desconhecido
https://github.com/DonghaoWu/MERN-Template-V2/blob/508e836d88a891df91fe38248557fba80be65b10/README-FOLDER/5.Forget%26Reset.md

```
js
```


## License: desconhecido
https://github.com/kukori/dev_camp_api/blob/edbdc320649313fbd533844320a6cc29fe88f0cf/models/User.js

```
js
const mongoose = require('mongoose');
const bcrypt
```


## License: desconhecido
https://github.com/DonghaoWu/MERN-Template-V2/blob/508e836d88a891df91fe38248557fba80be65b10/README-FOLDER/5.Forget%26Reset.md

```
js
const mongoose = require('mongoose');
const bcrypt
```


## License: desconhecido
https://github.com/kukori/dev_camp_api/blob/edbdc320649313fbd533844320a6cc29fe88f0cf/models/User.js

```
js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require
```


## License: desconhecido
https://github.com/DonghaoWu/MERN-Template-V2/blob/508e836d88a891df91fe38248557fba80be65b10/README-FOLDER/5.Forget%26Reset.md

```
js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require
```


## License: desconhecido
https://github.com/kukori/dev_camp_api/blob/edbdc320649313fbd533844320a6cc29fe88f0cf/models/User.js

```
js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto
```


## License: desconhecido
https://github.com/DonghaoWu/MERN-Template-V2/blob/508e836d88a891df91fe38248557fba80be65b10/README-FOLDER/5.Forget%26Reset.md

```
js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto
```


## License: desconhecido
https://github.com/kukori/dev_camp_api/blob/edbdc320649313fbd533844320a6cc29fe88f0cf/models/User.js

```
js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const UserSchema = new mongoose.Schema({
```


## License: desconhecido
https://github.com/DonghaoWu/MERN-Template-V2/blob/508e836d88a891df91fe38248557fba80be65b10/README-FOLDER/5.Forget%26Reset.md

```
js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const UserSchema = new mongoose.Schema({
```


## License: desconhecido
https://github.com/kukori/dev_camp_api/blob/edbdc320649313fbd533844320a6cc29fe88f0cf/models/User.js

```
js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    
```


## License: desconhecido
https://github.com/DonghaoWu/MERN-Template-V2/blob/508e836d88a891df91fe38248557fba80be65b10/README-FOLDER/5.Forget%26Reset.md

```
js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    
```


## License: desconhecido
https://github.com/kukori/dev_camp_api/blob/edbdc320649313fbd533844320a6cc29fe88f0cf/models/User.js

```
js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [
```


## License: desconhecido
https://github.com/DonghaoWu/MERN-Template-V2/blob/508e836d88a891df91fe38248557fba80be65b10/README-FOLDER/5.Forget%26Reset.md

```
js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [
```


## License: desconhecido
https://github.com/OliverMensahDev/software-engineering/blob/4b58822cce3163339e7429acdb3202e99333fae5/programming-languages/Nodejs/Express/Authentication-Users-Permissions/08-User-CRUD/models/User.js

```
UserSchema.pre('save', async
```


## License: desconhecido
https://github.com/OliverMensahDev/software-engineering/blob/4b58822cce3163339e7429acdb3202e99333fae5/programming-languages/Nodejs/Express/Authentication-Users-Permissions/08-User-CRUD/models/User.js

```
UserSchema.pre('save', async function (next) {
  if (!this
```


## License: desconhecido
https://github.com/OliverMensahDev/software-engineering/blob/4b58822cce3163339e7429acdb3202e99333fae5/programming-languages/Nodejs/Express/Authentication-Users-Permissions/08-User-CRUD/models/User.js

```
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    
```


## License: desconhecido
https://github.com/OliverMensahDev/software-engineering/blob/4b58822cce3163339e7429acdb3202e99333fae5/programming-languages/Nodejs/Express/Authentication-Users-Permissions/08-User-CRUD/models/User.js

```
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  
```


## License: desconhecido
https://github.com/OliverMensahDev/software-engineering/blob/4b58822cce3163339e7429acdb3202e99333fae5/programming-languages/Nodejs/Express/Authentication-Users-Permissions/08-User-CRUD/models/User.js

```
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  
  const salt = await bcrypt.genS
```


## License: desconhecido
https://github.com/OliverMensahDev/software-engineering/blob/4b58822cce3163339e7429acdb3202e99333fae5/programming-languages/Nodejs/Express/Authentication-Users-Permissions/08-User-CRUD/models/User.js

```
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  
  const salt = await bcrypt.genSalt(10);
  this.password = await bc
```


## License: desconhecido
https://github.com/OliverMensahDev/software-engineering/blob/4b58822cce3163339e7429acdb3202e99333fae5/programming-languages/Nodejs/Express/Authentication-Users-Permissions/08-User-CRUD/models/User.js

```
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password
```


## License: desconhecido
https://github.com/chaselancaster/nosmallstreamer-backend/blob/117b229f981bd2f2cb5a5244ce93586f812a8f4f/routes/users.js

```
exports.register = async (req
```


## License: desconhecido
https://github.com/kenni-satofona/project-akhir-tim-BE-22/blob/8ef52dd553765a7262013c89fe30ef9aa5a9bfab/controllers/UserController.js

```
exports.register = async (req
```


## License: desconhecido
https://github.com/Samireddebbarhi/ARK-Challenges/blob/c31f91dcca5cc621149331ce3864a006e75ba6d7/Blog-App-cookie-session/Controllers/register.js

```
exports.register = async (req
```


## License: desconhecido
https://github.com/AnshumohanAcharya/CampusEventEase/blob/db185646090e14b922b84d75c2ee1e03a023e7a2/server/controllers/adminController.js

```
exports.register = async (req
```


## License: desconhecido
https://github.com/ddh4r4m/Dev/blob/55ab38ce69dfd7a04b00fca296cb0ee538bbbb8f/routes/api/users.js

```
exports.register = async (req, res, next) => {
  try {
    const
```


## License: desconhecido
https://github.com/chaselancaster/nosmallstreamer-backend/blob/117b229f981bd2f2cb5a5244ce93586f812a8f4f/routes/users.js

```
exports.register = async (req, res, next) => {
  try {
    const
```


## License: desconhecido
https://github.com/kenni-satofona/project-akhir-tim-BE-22/blob/8ef52dd553765a7262013c89fe30ef9aa5a9bfab/controllers/UserController.js

```
exports.register = async (req, res, next) => {
  try {
    const
```


## License: desconhecido
https://github.com/Samireddebbarhi/ARK-Challenges/blob/c31f91dcca5cc621149331ce3864a006e75ba6d7/Blog-App-cookie-session/Controllers/register.js

```
exports.register = async (req, res, next) => {
  try {
    const
```


## License: desconhecido
https://github.com/AnshumohanAcharya/CampusEventEase/blob/db185646090e14b922b84d75c2ee1e03a023e7a2/server/controllers/adminController.js

```
exports.register = async (req, res, next) => {
  try {
    const
```


## License: desconhecido
https://github.com/ddh4r4m/Dev/blob/55ab38ce69dfd7a04b00fca296cb0ee538bbbb8f/routes/api/users.js

```
exports.register = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!
```


## License: desconhecido
https://github.com/chaselancaster/nosmallstreamer-backend/blob/117b229f981bd2f2cb5a5244ce93586f812a8f4f/routes/users.js

```
exports.register = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!
```


## License: desconhecido
https://github.com/kenni-satofona/project-akhir-tim-BE-22/blob/8ef52dd553765a7262013c89fe30ef9aa5a9bfab/controllers/UserController.js

```
exports.register = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!
```


## License: desconhecido
https://github.com/Samireddebbarhi/ARK-Challenges/blob/c31f91dcca5cc621149331ce3864a006e75ba6d7/Blog-App-cookie-session/Controllers/register.js

```
exports.register = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!
```


## License: desconhecido
https://github.com/AnshumohanAcharya/CampusEventEase/blob/db185646090e14b922b84d75c2ee1e03a023e7a2/server/controllers/adminController.js

```
exports.register = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!
```


## License: desconhecido
https://github.com/ddh4r4m/Dev/blob/55ab38ce69dfd7a04b00fca296cb0ee538bbbb8f/routes/api/users.js

```
exports.register = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(
```


## License: desconhecido
https://github.com/chaselancaster/nosmallstreamer-backend/blob/117b229f981bd2f2cb5a5244ce93586f812a8f4f/routes/users.js

```
exports.register = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(
```


## License: desconhecido
https://github.com/kenni-satofona/project-akhir-tim-BE-22/blob/8ef52dd553765a7262013c89fe30ef9aa5a9bfab/controllers/UserController.js

```
exports.register = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(
```


## License: desconhecido
https://github.com/Samireddebbarhi/ARK-Challenges/blob/c31f91dcca5cc621149331ce3864a006e75ba6d7/Blog-App-cookie-session/Controllers/register.js

```
exports.register = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(
```


## License: desconhecido
https://github.com/AnshumohanAcharya/CampusEventEase/blob/db185646090e14b922b84d75c2ee1e03a023e7a2/server/controllers/adminController.js

```
exports.register = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(
```


## License: desconhecido
https://github.com/ddh4r4m/Dev/blob/55ab38ce69dfd7a04b00fca296cb0ee538bbbb8f/routes/api/users.js

```
exports.register = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
```


## License: desconhecido
https://github.com/chaselancaster/nosmallstreamer-backend/blob/117b229f981bd2f2cb5a5244ce93586f812a8f4f/routes/users.js

```
exports.register = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
```


## License: desconhecido
https://github.com/kenni-satofona/project-akhir-tim-BE-22/blob/8ef52dd553765a7262013c89fe30ef9aa5a9bfab/controllers/UserController.js

```
exports.register = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
```


## License: desconhecido
https://github.com/Samireddebbarhi/ARK-Challenges/blob/c31f91dcca5cc621149331ce3864a006e75ba6d7/Blog-App-cookie-session/Controllers/register.js

```
exports.register = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
```


## License: desconhecido
https://github.com/AnshumohanAcharya/CampusEventEase/blob/db185646090e14b922b84d75c2ee1e03a023e7a2/server/controllers/adminController.js

```
exports.register = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
```


## License: desconhecido
https://github.com/ddh4r4m/Dev/blob/55ab38ce69dfd7a04b00fca296cb0ee538bbbb8f/routes/api/users.js

```
exports.register = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password,
```


## License: desconhecido
https://github.com/chaselancaster/nosmallstreamer-backend/blob/117b229f981bd2f2cb5a5244ce93586f812a8f4f/routes/users.js

```
exports.register = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password,
```


## License: desconhecido
https://github.com/kenni-satofona/project-akhir-tim-BE-22/blob/8ef52dd553765a7262013c89fe30ef9aa5a9bfab/controllers/UserController.js

```
exports.register = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password,
```


## License: desconhecido
https://github.com/Samireddebbarhi/ARK-Challenges/blob/c31f91dcca5cc621149331ce3864a006e75ba6d7/Blog-App-cookie-session/Controllers/register.js

```
exports.register = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password,
```


## License: desconhecido
https://github.com/AnshumohanAcharya/CampusEventEase/blob/db185646090e14b922b84d75c2ee1e03a023e7a2/server/controllers/adminController.js

```
exports.register = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password,
```


## License: desconhecido
https://github.com/ddh4r4m/Dev/blob/55ab38ce69dfd7a04b00fca296cb0ee538bbbb8f/routes/api/users.js

```
exports.register = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password, role } = req.body;
```


## License: desconhecido
https://github.com/chaselancaster/nosmallstreamer-backend/blob/117b229f981bd2f2cb5a5244ce93586f812a8f4f/routes/users.js

```
exports.register = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password, role } = req.body;
```


## License: desconhecido
https://github.com/kenni-satofona/project-akhir-tim-BE-22/blob/8ef52dd553765a7262013c89fe30ef9aa5a9bfab/controllers/UserController.js

```
exports.register = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password, role } = req.body;
```


## License: desconhecido
https://github.com/Samireddebbarhi/ARK-Challenges/blob/c31f91dcca5cc621149331ce3864a006e75ba6d7/Blog-App-cookie-session/Controllers/register.js

```
exports.register = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password, role } = req.body;
```


## License: desconhecido
https://github.com/AnshumohanAcharya/CampusEventEase/blob/db185646090e14b922b84d75c2ee1e03a023e7a2/server/controllers/adminController.js

```
exports.register = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password, role } = req.body;
```


## License: desconhecido
https://github.com/Corporate-Drone/chirp-app/blob/aae27baed8d43c0fe5f92cea08ad63a45253c07d/controllers/users-controllers.js

```
.login = async (
```


## License: desconhecido
https://github.com/gh0sty02/natours-remastered/blob/6deef9e4babbcf3efaecb6ec2b0d298cd8a36cda/controller/userController.js

```
.login = async (
```


## License: desconhecido
https://github.com/singhsunpreet98s/ailloy_server/blob/61f4115306b56d3baeae83fe72876202e79142b2/controller/api/userController.js

```
.login = async (
```


## License: desconhecido
https://github.com/Corporate-Drone/chirp-app/blob/aae27baed8d43c0fe5f92cea08ad63a45253c07d/controllers/users-controllers.js

```
.login = async (req, res, next) => {
  try {
```


## License: desconhecido
https://github.com/gh0sty02/natours-remastered/blob/6deef9e4babbcf3efaecb6ec2b0d298cd8a36cda/controller/userController.js

```
.login = async (req, res, next) => {
  try {
```


## License: desconhecido
https://github.com/singhsunpreet98s/ailloy_server/blob/61f4115306b56d3baeae83fe72876202e79142b2/controller/api/userController.js

```
.login = async (req, res, next) => {
  try {
```


## License: desconhecido
https://github.com/Corporate-Drone/chirp-app/blob/aae27baed8d43c0fe5f92cea08ad63a45253c07d/controllers/users-controllers.js

```
.login = async (req, res, next) => {
  try {
    const errors = validationResult(req);
```


## License: desconhecido
https://github.com/gh0sty02/natours-remastered/blob/6deef9e4babbcf3efaecb6ec2b0d298cd8a36cda/controller/userController.js

```
.login = async (req, res, next) => {
  try {
    const errors = validationResult(req);
```


## License: desconhecido
https://github.com/singhsunpreet98s/ailloy_server/blob/61f4115306b56d3baeae83fe72876202e79142b2/controller/api/userController.js

```
.login = async (req, res, next) => {
  try {
    const errors = validationResult(req);
```


## License: desconhecido
https://github.com/Corporate-Drone/chirp-app/blob/aae27baed8d43c0fe5f92cea08ad63a45253c07d/controllers/users-controllers.js

```
.login = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
```


## License: desconhecido
https://github.com/gh0sty02/natours-remastered/blob/6deef9e4babbcf3efaecb6ec2b0d298cd8a36cda/controller/userController.js

```
.login = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
```


## License: desconhecido
https://github.com/singhsunpreet98s/ailloy_server/blob/61f4115306b56d3baeae83fe72876202e79142b2/controller/api/userController.js

```
.login = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
```


## License: desconhecido
https://github.com/Corporate-Drone/chirp-app/blob/aae27baed8d43c0fe5f92cea08ad63a45253c07d/controllers/users-controllers.js

```
.login = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors
```


## License: desconhecido
https://github.com/gh0sty02/natours-remastered/blob/6deef9e4babbcf3efaecb6ec2b0d298cd8a36cda/controller/userController.js

```
.login = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors
```


## License: desconhecido
https://github.com/singhsunpreet98s/ailloy_server/blob/61f4115306b56d3baeae83fe72876202e79142b2/controller/api/userController.js

```
.login = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors
```


## License: desconhecido
https://github.com/Corporate-Drone/chirp-app/blob/aae27baed8d43c0fe5f92cea08ad63a45253c07d/controllers/users-controllers.js

```
.login = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const
```


## License: desconhecido
https://github.com/gh0sty02/natours-remastered/blob/6deef9e4babbcf3efaecb6ec2b0d298cd8a36cda/controller/userController.js

```
.login = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const
```


## License: desconhecido
https://github.com/singhsunpreet98s/ailloy_server/blob/61f4115306b56d3baeae83fe72876202e79142b2/controller/api/userController.js

```
.login = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const
```


## License: desconhecido
https://github.com/Corporate-Drone/chirp-app/blob/aae27baed8d43c0fe5f92cea08ad63a45253c07d/controllers/users-controllers.js

```
.login = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password
```


## License: desconhecido
https://github.com/gh0sty02/natours-remastered/blob/6deef9e4babbcf3efaecb6ec2b0d298cd8a36cda/controller/userController.js

```
.login = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password
```


## License: desconhecido
https://github.com/singhsunpreet98s/ailloy_server/blob/61f4115306b56d3baeae83fe72876202e79142b2/controller/api/userController.js

```
.login = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password
```


## License: Apache-2.0
https://github.com/vermastra/Ecommerce-website/blob/a5f123ff45c7c78e7f664db34dd42271b4e1de8c/backend/controllers/userController.js

```
exports.forg
```


## License: Apache-2.0
https://github.com/vermastra/Ecommerce-website/blob/a5f123ff45c7c78e7f664db34dd42271b4e1de8c/backend/controllers/userController.js

```
exports.forgotPassword = async (req, res, next) =>
```


## License: Apache-2.0
https://github.com/vermastra/Ecommerce-website/blob/a5f123ff45c7c78e7f664db34dd42271b4e1de8c/backend/controllers/userController.js

```
exports.forgotPassword = async (req, res, next) => {
  try {
    const user = await User
```


## License: Apache-2.0
https://github.com/vermastra/Ecommerce-website/blob/a5f123ff45c7c78e7f664db34dd42271b4e1de8c/backend/controllers/userController.js

```
exports.forgotPassword = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!
```


## License: Apache-2.0
https://github.com/vermastra/Ecommerce-website/blob/a5f123ff45c7c78e7f664db34dd42271b4e1de8c/backend/controllers/userController.js

```
exports.forgotPassword = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(404).
```


## License: Apache-2.0
https://github.com/vermastra/Ecommerce-website/blob/a5f123ff45c7c78e7f664db34dd42271b4e1de8c/backend/controllers/userController.js

```
exports.forgotPassword = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(404).json({
        success:
```


## License: desconhecido
https://github.com/choton654/devcamper_nextjs/blob/d7b2cbc6aa9ef11f0e55fdbfb5da0744ff6675ec/controllers/auth.js

```
});
    } catch (err) {
```


## License: desconhecido
https://github.com/choton654/devcamper_nextjs/blob/d7b2cbc6aa9ef11f0e55fdbfb5da0744ff6675ec/controllers/auth.js

```
});
    } catch (err) {
      console.log(err);
      user
```


## License: desconhecido
https://github.com/choton654/devcamper_nextjs/blob/d7b2cbc6aa9ef11f0e55fdbfb5da0744ff6675ec/controllers/auth.js

```
});
    } catch (err) {
      console.log(err);
      user.resetPasswordToken = undefined;
      user
```


## License: desconhecido
https://github.com/choton654/devcamper_nextjs/blob/d7b2cbc6aa9ef11f0e55fdbfb5da0744ff6675ec/controllers/auth.js

```
});
    } catch (err) {
      console.log(err);
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;

      await user.
```


## License: desconhecido
https://github.com/choton654/devcamper_nextjs/blob/d7b2cbc6aa9ef11f0e55fdbfb5da0744ff6675ec/controllers/auth.js

```
});
    } catch (err) {
      console.log(err);
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;

      await user.save({ validateBeforeSave: false });

      return res
```


## License: desconhecido
https://github.com/choton654/devcamper_nextjs/blob/d7b2cbc6aa9ef11f0e55fdbfb5da0744ff6675ec/controllers/auth.js

```
});
    } catch (err) {
      console.log(err);
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;

      await user.save({ validateBeforeSave: false });

      return res.status(500).json({
```


## License: desconhecido
https://github.com/choton654/devcamper_nextjs/blob/d7b2cbc6aa9ef11f0e55fdbfb5da0744ff6675ec/controllers/auth.js

```
});
    } catch (err) {
      console.log(err);
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;

      await user.save({ validateBeforeSave: false });

      return res.status(500).json({
        success: false,
```


## License: desconhecido
https://github.com/OliverMensahDev/software-engineering/blob/4b58822cce3163339e7429acdb3202e99333fae5/programming-languages/Nodejs/Express/devcamper-api/api/controllers/auth.js

```
resetPasswordToken = crypto
      .createHash
```


## License: desconhecido
https://github.com/fredrik-hjelmaeus/BudgetApp/blob/c9ec945d355efbcfb6795bee524c36d2d59c9db9/routes/auth.js

```
resetPasswordToken = crypto
      .createHash
```


## License: desconhecido
https://github.com/OliverMensahDev/software-engineering/blob/4b58822cce3163339e7429acdb3202e99333fae5/programming-languages/Nodejs/Express/devcamper-api/api/controllers/auth.js

```
resetPasswordToken = crypto
      .createHash('sha256')
      .update
```


## License: desconhecido
https://github.com/fredrik-hjelmaeus/BudgetApp/blob/c9ec945d355efbcfb6795bee524c36d2d59c9db9/routes/auth.js

```
resetPasswordToken = crypto
      .createHash('sha256')
      .update
```


## License: desconhecido
https://github.com/ahmad245/Bootcamps-API-nodejs-mongoDB/blob/5f3e691439021558d3ad02cde0a5f3d824e84b7e/controller/authController.js

```
resetPasswordToken = crypto
      .createHash('sha256')
      .update
```


## License: desconhecido
https://github.com/OliverMensahDev/software-engineering/blob/4b58822cce3163339e7429acdb3202e99333fae5/programming-languages/Nodejs/Express/devcamper-api/api/controllers/auth.js

```
resetPasswordToken = crypto
      .createHash('sha256')
      .update(req.params.resettoken)
```


## License: desconhecido
https://github.com/fredrik-hjelmaeus/BudgetApp/blob/c9ec945d355efbcfb6795bee524c36d2d59c9db9/routes/auth.js

```
resetPasswordToken = crypto
      .createHash('sha256')
      .update(req.params.resettoken)
```


## License: desconhecido
https://github.com/ahmad245/Bootcamps-API-nodejs-mongoDB/blob/5f3e691439021558d3ad02cde0a5f3d824e84b7e/controller/authController.js

```
resetPasswordToken = crypto
      .createHash('sha256')
      .update(req.params.resettoken)
```


## License: desconhecido
https://github.com/OliverMensahDev/software-engineering/blob/4b58822cce3163339e7429acdb3202e99333fae5/programming-languages/Nodejs/Express/devcamper-api/api/controllers/auth.js

```
resetPasswordToken = crypto
      .createHash('sha256')
      .update(req.params.resettoken)
      .digest('hex');
```


## License: desconhecido
https://github.com/fredrik-hjelmaeus/BudgetApp/blob/c9ec945d355efbcfb6795bee524c36d2d59c9db9/routes/auth.js

```
resetPasswordToken = crypto
      .createHash('sha256')
      .update(req.params.resettoken)
      .digest('hex');
```


## License: desconhecido
https://github.com/ahmad245/Bootcamps-API-nodejs-mongoDB/blob/5f3e691439021558d3ad02cde0a5f3d824e84b7e/controller/authController.js

```
resetPasswordToken = crypto
      .createHash('sha256')
      .update(req.params.resettoken)
      .digest('hex');
```


## License: desconhecido
https://github.com/OliverMensahDev/software-engineering/blob/4b58822cce3163339e7429acdb3202e99333fae5/programming-languages/Nodejs/Express/devcamper-api/api/controllers/auth.js

```
resetPasswordToken = crypto
      .createHash('sha256')
      .update(req.params.resettoken)
      .digest('hex');

    const user = await User.fin
```


## License: desconhecido
https://github.com/fredrik-hjelmaeus/BudgetApp/blob/c9ec945d355efbcfb6795bee524c36d2d59c9db9/routes/auth.js

```
resetPasswordToken = crypto
      .createHash('sha256')
      .update(req.params.resettoken)
      .digest('hex');

    const user = await User.fin
```


## License: desconhecido
https://github.com/ahmad245/Bootcamps-API-nodejs-mongoDB/blob/5f3e691439021558d3ad02cde0a5f3d824e84b7e/controller/authController.js

```
resetPasswordToken = crypto
      .createHash('sha256')
      .update(req.params.resettoken)
      .digest('hex');

    const user = await User.fin
```


## License: desconhecido
https://github.com/OliverMensahDev/software-engineering/blob/4b58822cce3163339e7429acdb3202e99333fae5/programming-languages/Nodejs/Express/devcamper-api/api/controllers/auth.js

```
resetPasswordToken = crypto
      .createHash('sha256')
      .update(req.params.resettoken)
      .digest('hex');

    const user = await User.findOne({
      resetPasswordToken,
      resetPasswor
```


## License: desconhecido
https://github.com/fredrik-hjelmaeus/BudgetApp/blob/c9ec945d355efbcfb6795bee524c36d2d59c9db9/routes/auth.js

```
resetPasswordToken = crypto
      .createHash('sha256')
      .update(req.params.resettoken)
      .digest('hex');

    const user = await User.findOne({
      resetPasswordToken,
      resetPasswor
```


## License: desconhecido
https://github.com/ahmad245/Bootcamps-API-nodejs-mongoDB/blob/5f3e691439021558d3ad02cde0a5f3d824e84b7e/controller/authController.js

```
resetPasswordToken = crypto
      .createHash('sha256')
      .update(req.params.resettoken)
      .digest('hex');

    const user = await User.findOne({
      resetPasswordToken,
      resetPasswor
```


## License: desconhecido
https://github.com/OliverMensahDev/software-engineering/blob/4b58822cce3163339e7429acdb3202e99333fae5/programming-languages/Nodejs/Express/devcamper-api/api/controllers/auth.js

```
resetPasswordToken = crypto
      .createHash('sha256')
      .update(req.params.resettoken)
      .digest('hex');

    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() }
```


## License: desconhecido
https://github.com/fredrik-hjelmaeus/BudgetApp/blob/c9ec945d355efbcfb6795bee524c36d2d59c9db9/routes/auth.js

```
resetPasswordToken = crypto
      .createHash('sha256')
      .update(req.params.resettoken)
      .digest('hex');

    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() }
```


## License: desconhecido
https://github.com/ahmad245/Bootcamps-API-nodejs-mongoDB/blob/5f3e691439021558d3ad02cde0a5f3d824e84b7e/controller/authController.js

```
resetPasswordToken = crypto
      .createHash('sha256')
      .update(req.params.resettoken)
      .digest('hex');

    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() }
```


## License: desconhecido
https://github.com/OliverMensahDev/software-engineering/blob/4b58822cce3163339e7429acdb3202e99333fae5/programming-languages/Nodejs/Express/devcamper-api/api/controllers/auth.js

```
resetPasswordToken = crypto
      .createHash('sha256')
      .update(req.params.resettoken)
      .digest('hex');

    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() }
    });

    if (!user) {
      
```


## License: desconhecido
https://github.com/fredrik-hjelmaeus/BudgetApp/blob/c9ec945d355efbcfb6795bee524c36d2d59c9db9/routes/auth.js

```
resetPasswordToken = crypto
      .createHash('sha256')
      .update(req.params.resettoken)
      .digest('hex');

    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() }
    });

    if (!user) {
      
```


## License: desconhecido
https://github.com/ahmad245/Bootcamps-API-nodejs-mongoDB/blob/5f3e691439021558d3ad02cde0a5f3d824e84b7e/controller/authController.js

```
resetPasswordToken = crypto
      .createHash('sha256')
      .update(req.params.resettoken)
      .digest('hex');

    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() }
    });

    if (!user) {
      
```


## License: desconhecido
https://github.com/OliverMensahDev/software-engineering/blob/4b58822cce3163339e7429acdb3202e99333fae5/programming-languages/Nodejs/Express/devcamper-api/api/controllers/auth.js

```
resetPasswordToken = crypto
      .createHash('sha256')
      .update(req.params.resettoken)
      .digest('hex');

    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() }
    });

    if (!user) {
      return res.status(400).json({
```


## License: desconhecido
https://github.com/fredrik-hjelmaeus/BudgetApp/blob/c9ec945d355efbcfb6795bee524c36d2d59c9db9/routes/auth.js

```
resetPasswordToken = crypto
      .createHash('sha256')
      .update(req.params.resettoken)
      .digest('hex');

    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() }
    });

    if (!user) {
      return res.status(400).json({
```


## License: desconhecido
https://github.com/ahmad245/Bootcamps-API-nodejs-mongoDB/blob/5f3e691439021558d3ad02cde0a5f3d824e84b7e/controller/authController.js

```
resetPasswordToken = crypto
      .createHash('sha256')
      .update(req.params.resettoken)
      .digest('hex');

    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() }
    });

    if (!user) {
      return res.status(400).json({
```


## License: desconhecido
https://github.com/OliverMensahDev/software-engineering/blob/4b58822cce3163339e7429acdb3202e99333fae5/programming-languages/Nodejs/Express/devcamper-api/api/controllers/auth.js

```
resetPasswordToken = crypto
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
```


## License: desconhecido
https://github.com/fredrik-hjelmaeus/BudgetApp/blob/c9ec945d355efbcfb6795bee524c36d2d59c9db9/routes/auth.js

```
resetPasswordToken = crypto
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
```


## License: desconhecido
https://github.com/ahmad245/Bootcamps-API-nodejs-mongoDB/blob/5f3e691439021558d3ad02cde0a5f3d824e84b7e/controller/authController.js

```
resetPasswordToken = crypto
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
```


## License: desconhecido
https://github.com/OliverMensahDev/software-engineering/blob/4b58822cce3163339e7429acdb3202e99333fae5/programming-languages/Nodejs/Express/devcamper-api/api/controllers/auth.js

```
.getSignedJwtToken();

  const
```


## License: desconhecido
https://github.com/OliverMensahDev/software-engineering/blob/4b58822cce3163339e7429acdb3202e99333fae5/programming-languages/Nodejs/Express/devcamper-api/api/controllers/auth.js

```
.getSignedJwtToken();

  const options = {
    expires: new Date(
```


## License: desconhecido
https://github.com/OliverMensahDev/software-engineering/blob/4b58822cce3163339e7429acdb3202e99333fae5/programming-languages/Nodejs/Express/devcamper-api/api/controllers/auth.js

```
.getSignedJwtToken();

  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_
```


## License: desconhecido
https://github.com/OliverMensahDev/software-engineering/blob/4b58822cce3163339e7429acdb3202e99333fae5/programming-languages/Nodejs/Express/devcamper-api/api/controllers/auth.js

```
.getSignedJwtToken();

  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 
```


## License: desconhecido
https://github.com/OliverMensahDev/software-engineering/blob/4b58822cce3163339e7429acdb3202e99333fae5/programming-languages/Nodejs/Express/Authentication-Users-Permissions/04-access--to-specific-roles/controllers/auth.js

```
.getSignedJwtToken();

  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 
```


## License: desconhecido
https://github.com/OliverMensahDev/software-engineering/blob/4b58822cce3163339e7429acdb3202e99333fae5/programming-languages/Nodejs/Express/devcamper-api/api/controllers/auth.js

```
.getSignedJwtToken();

  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
```


## License: desconhecido
https://github.com/OliverMensahDev/software-engineering/blob/4b58822cce3163339e7429acdb3202e99333fae5/programming-languages/Nodejs/Express/Authentication-Users-Permissions/04-access--to-specific-roles/controllers/auth.js

```
.getSignedJwtToken();

  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
```


## License: desconhecido
https://github.com/OliverMensahDev/software-engineering/blob/4b58822cce3163339e7429acdb3202e99333fae5/programming-languages/Nodejs/Express/devcamper-api/api/controllers/auth.js

```
.getSignedJwtToken();

  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true
  };

  if (
```


## License: desconhecido
https://github.com/OliverMensahDev/software-engineering/blob/4b58822cce3163339e7429acdb3202e99333fae5/programming-languages/Nodejs/Express/Authentication-Users-Permissions/04-access--to-specific-roles/controllers/auth.js

```
.getSignedJwtToken();

  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true
  };

  if (
```


## License: desconhecido
https://github.com/OliverMensahDev/software-engineering/blob/4b58822cce3163339e7429acdb3202e99333fae5/programming-languages/Nodejs/Express/devcamper-api/api/controllers/auth.js

```
.getSignedJwtToken();

  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true
  };

  if (process.env.NODE_ENV === 'production')
```


## License: desconhecido
https://github.com/OliverMensahDev/software-engineering/blob/4b58822cce3163339e7429acdb3202e99333fae5/programming-languages/Nodejs/Express/Authentication-Users-Permissions/04-access--to-specific-roles/controllers/auth.js

```
.getSignedJwtToken();

  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true
  };

  if (process.env.NODE_ENV === 'production')
```


## License: desconhecido
https://github.com/OliverMensahDev/software-engineering/blob/4b58822cce3163339e7429acdb3202e99333fae5/programming-languages/Nodejs/Express/devcamper-api/api/controllers/auth.js

```
.getSignedJwtToken();

  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true
  };

  if (process.env.NODE_ENV === 'production') {
    options.secure = true;
  }
```


## License: desconhecido
https://github.com/OliverMensahDev/software-engineering/blob/4b58822cce3163339e7429acdb3202e99333fae5/programming-languages/Nodejs/Express/Authentication-Users-Permissions/04-access--to-specific-roles/controllers/auth.js

```
.getSignedJwtToken();

  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true
  };

  if (process.env.NODE_ENV === 'production') {
    options.secure = true;
  }
```


## License: desconhecido
https://github.com/OliverMensahDev/software-engineering/blob/4b58822cce3163339e7429acdb3202e99333fae5/programming-languages/Nodejs/Express/devcamper-api/api/controllers/auth.js

```
.getSignedJwtToken();

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
    .status(
```


## License: desconhecido
https://github.com/OliverMensahDev/software-engineering/blob/4b58822cce3163339e7429acdb3202e99333fae5/programming-languages/Nodejs/Express/Authentication-Users-Permissions/04-access--to-specific-roles/controllers/auth.js

```
.getSignedJwtToken();

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
    .status(
```


## License: desconhecido
https://github.com/OliverMensahDev/software-engineering/blob/4b58822cce3163339e7429acdb3202e99333fae5/programming-languages/Nodejs/Express/devcamper-api/api/controllers/auth.js

```
.getSignedJwtToken();

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
    .cookie('token', token,
```


## License: desconhecido
https://github.com/OliverMensahDev/software-engineering/blob/4b58822cce3163339e7429acdb3202e99333fae5/programming-languages/Nodejs/Express/Authentication-Users-Permissions/04-access--to-specific-roles/controllers/auth.js

```
.getSignedJwtToken();

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
    .cookie('token', token,
```


## License: desconhecido
https://github.com/OliverMensahDev/software-engineering/blob/4b58822cce3163339e7429acdb3202e99333fae5/programming-languages/Nodejs/Express/devcamper-api/api/controllers/auth.js

```
.getSignedJwtToken();

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
      success:
```


## License: desconhecido
https://github.com/OliverMensahDev/software-engineering/blob/4b58822cce3163339e7429acdb3202e99333fae5/programming-languages/Nodejs/Express/Authentication-Users-Permissions/04-access--to-specific-roles/controllers/auth.js

```
.getSignedJwtToken();

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
      success:
```


## License: desconhecido
https://github.com/OliverMensahDev/software-engineering/blob/4b58822cce3163339e7429acdb3202e99333fae5/programming-languages/Nodejs/Express/devcamper-api/api/controllers/auth.js

```
.getSignedJwtToken();

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
```


## License: desconhecido
https://github.com/OliverMensahDev/software-engineering/blob/4b58822cce3163339e7429acdb3202e99333fae5/programming-languages/Nodejs/Express/Authentication-Users-Permissions/04-access--to-specific-roles/controllers/auth.js

```
.getSignedJwtToken();

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
```


## License: desconhecido
https://github.com/ahmad245/Bootcamps-API-nodejs-mongoDB/blob/5f3e691439021558d3ad02cde0a5f3d824e84b7e/middelware/auth.js

```
.
```


## License: desconhecido
https://github.com/ahmad245/Bootcamps-API-nodejs-mongoDB/blob/5f3e691439021558d3ad02cde0a5f3d824e84b7e/middelware/auth.js

```
.authorize = (...roles) => {
  return (
```


## License: desconhecido
https://github.com/ahmad245/Bootcamps-API-nodejs-mongoDB/blob/5f3e691439021558d3ad02cde0a5f3d824e84b7e/middelware/auth.js

```
.authorize = (...roles) => {
  return (req, res, next) => {
    if (!
```


## License: desconhecido
https://github.com/ahmad245/Bootcamps-API-nodejs-mongoDB/blob/5f3e691439021558d3ad02cde0a5f3d824e84b7e/middelware/auth.js

```
.authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
```


## License: desconhecido
https://github.com/ahmad245/Bootcamps-API-nodejs-mongoDB/blob/5f3e691439021558d3ad02cde0a5f3d824e84b7e/middelware/auth.js

```
.authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        
```


## License: desconhecido
https://github.com/ahmad245/Bootcamps-API-nodejs-mongoDB/blob/5f3e691439021558d3ad02cde0a5f3d824e84b7e/middelware/auth.js

```
.authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        error:
```


## License: desconhecido
https://github.com/Arlisha2019/DevCamper/blob/1824d7da32ad531a2aef3ccedc8093894ec5b6cf/routes/auth.js

```
const {
```


## License: desconhecido
https://github.com/Arlisha2019/DevCamper/blob/1824d7da32ad531a2aef3ccedc8093894ec5b6cf/routes/auth.js

```
const {
  register,
  login,
  getMe
```


## License: desconhecido
https://github.com/Arlisha2019/DevCamper/blob/1824d7da32ad531a2aef3ccedc8093894ec5b6cf/routes/auth.js

```
const {
  register,
  login,
  getMe,
  forgotPassword,
```


## License: desconhecido
https://github.com/Arlisha2019/DevCamper/blob/1824d7da32ad531a2aef3ccedc8093894ec5b6cf/routes/auth.js

```
const {
  register,
  login,
  getMe,
  forgotPassword,
  resetPassword
} = require('../controllers/auth');
```


## License: desconhecido
https://github.com/Arlisha2019/DevCamper/blob/1824d7da32ad531a2aef3ccedc8093894ec5b6cf/routes/auth.js

```
const {
  register,
  login,
  getMe,
  forgotPassword,
  resetPassword
} = require('../controllers/auth');
const { protect } = require('../middleware
```


## License: desconhecido
https://github.com/Arlisha2019/DevCamper/blob/1824d7da32ad531a2aef3ccedc8093894ec5b6cf/routes/auth.js

```
const {
  register,
  login,
  getMe,
  forgotPassword,
  resetPassword
} = require('../controllers/auth');
const { protect } = require('../middleware/auth');

const router = express
```


## License: desconhecido
https://github.com/Arlisha2019/DevCamper/blob/1824d7da32ad531a2aef3ccedc8093894ec5b6cf/routes/auth.js

```
const {
  register,
  login,
  getMe,
  forgotPassword,
  resetPassword
} = require('../controllers/auth');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.post(
  '/register
```


## License: desconhecido
https://github.com/dominickjay/dominickjay.com/blob/ed99d80e76b0374d3bf8266527aa59e3117f2263/src/writing/lets-react-create-react-app.md

```
"version": "0.1.0",
  
```


## License: MIT
https://github.com/lit26/Full_Stack_Boilerplate/blob/564dfc0690940938b07b08ea25f712f120f8a2dd/Django_Typescript_React_Workflow/README.md

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
```


## License: desconhecido
https://github.com/leye195/blog/blob/b98075ebcf447d95cfa3b05bd46cfe1b2b62a241/src/posts/cra-custom-template/index.mdx

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
```


## License: desconhecido
https://github.com/dominickjay/dominickjay.com/blob/ed99d80e76b0374d3bf8266527aa59e3117f2263/src/writing/lets-react-create-react-app.md

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
```


## License: MIT
https://github.com/lit26/Full_Stack_Boilerplate/blob/564dfc0690940938b07b08ea25f712f120f8a2dd/Django_Typescript_React_Workflow/README.md

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-
```


## License: desconhecido
https://github.com/leye195/blog/blob/b98075ebcf447d95cfa3b05bd46cfe1b2b62a241/src/posts/cra-custom-template/index.mdx

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-
```


## License: desconhecido
https://github.com/dominickjay/dominickjay.com/blob/ed99d80e76b0374d3bf8266527aa59e3117f2263/src/writing/lets-react-create-react-app.md

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-
```


## License: MIT
https://github.com/lit26/Full_Stack_Boilerplate/blob/564dfc0690940938b07b08ea25f712f120f8a2dd/Django_Typescript_React_Workflow/README.md

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
```


## License: desconhecido
https://github.com/leye195/blog/blob/b98075ebcf447d95cfa3b05bd46cfe1b2b62a241/src/posts/cra-custom-template/index.mdx

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
```


## License: desconhecido
https://github.com/dominickjay/dominickjay.com/blob/ed99d80e76b0374d3bf8266527aa59e3117f2263/src/writing/lets-react-create-react-app.md

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
```


## License: MIT
https://github.com/lit26/Full_Stack_Boilerplate/blob/564dfc0690940938b07b08ea25f712f120f8a2dd/Django_Typescript_React_Workflow/README.md

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12
```


## License: desconhecido
https://github.com/leye195/blog/blob/b98075ebcf447d95cfa3b05bd46cfe1b2b62a241/src/posts/cra-custom-template/index.mdx

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12
```


## License: desconhecido
https://github.com/dominickjay/dominickjay.com/blob/ed99d80e76b0374d3bf8266527aa59e3117f2263/src/writing/lets-react-create-react-app.md

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12
```


## License: MIT
https://github.com/lit26/Full_Stack_Boilerplate/blob/564dfc0690940938b07b08ea25f712f120f8a2dd/Django_Typescript_React_Workflow/README.md

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/
```


## License: desconhecido
https://github.com/leye195/blog/blob/b98075ebcf447d95cfa3b05bd46cfe1b2b62a241/src/posts/cra-custom-template/index.mdx

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/
```


## License: desconhecido
https://github.com/dominickjay/dominickjay.com/blob/ed99d80e76b0374d3bf8266527aa59e3117f2263/src/writing/lets-react-create-react-app.md

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/
```


## License: MIT
https://github.com/lit26/Full_Stack_Boilerplate/blob/564dfc0690940938b07b08ea25f712f120f8a2dd/Django_Typescript_React_Workflow/README.md

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
```


## License: desconhecido
https://github.com/leye195/blog/blob/b98075ebcf447d95cfa3b05bd46cfe1b2b62a241/src/posts/cra-custom-template/index.mdx

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
```


## License: desconhecido
https://github.com/MDaniel112/mdaniel-website/blob/fa674630a0c3b911f94e390b53ed2fb6614731f3/package%20backup

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
```


## License: desconhecido
https://github.com/dominickjay/dominickjay.com/blob/ed99d80e76b0374d3bf8266527aa59e3117f2263/src/writing/lets-react-create-react-app.md

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
```


## License: desconhecido
https://github.com/codeskyworld/WebsiteForMusicSchool/blob/517c6d29e5e347d9fa9080efdf1119e6897802a4/my-app/client/package-lock.json.orig

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
```


## License: MIT
https://github.com/lit26/Full_Stack_Boilerplate/blob/564dfc0690940938b07b08ea25f712f120f8a2dd/Django_Typescript_React_Workflow/README.md

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0
```


## License: desconhecido
https://github.com/leye195/blog/blob/b98075ebcf447d95cfa3b05bd46cfe1b2b62a241/src/posts/cra-custom-template/index.mdx

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0
```


## License: desconhecido
https://github.com/MDaniel112/mdaniel-website/blob/fa674630a0c3b911f94e390b53ed2fb6614731f3/package%20backup

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0
```


## License: desconhecido
https://github.com/dominickjay/dominickjay.com/blob/ed99d80e76b0374d3bf8266527aa59e3117f2263/src/writing/lets-react-create-react-app.md

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0
```


## License: desconhecido
https://github.com/codeskyworld/WebsiteForMusicSchool/blob/517c6d29e5e347d9fa9080efdf1119e6897802a4/my-app/client/package-lock.json.orig

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0
```


## License: MIT
https://github.com/lit26/Full_Stack_Boilerplate/blob/564dfc0690940938b07b08ea25f712f120f8a2dd/Django_Typescript_React_Workflow/README.md

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap
```


## License: desconhecido
https://github.com/leye195/blog/blob/b98075ebcf447d95cfa3b05bd46cfe1b2b62a241/src/posts/cra-custom-template/index.mdx

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap
```


## License: desconhecido
https://github.com/MDaniel112/mdaniel-website/blob/fa674630a0c3b911f94e390b53ed2fb6614731f3/package%20backup

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap
```


## License: desconhecido
https://github.com/dominickjay/dominickjay.com/blob/ed99d80e76b0374d3bf8266527aa59e3117f2263/src/writing/lets-react-create-react-app.md

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap
```


## License: desconhecido
https://github.com/codeskyworld/WebsiteForMusicSchool/blob/517c6d29e5e347d9fa9080efdf1119e6897802a4/my-app/client/package-lock.json.orig

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap
```


## License: MIT
https://github.com/lit26/Full_Stack_Boilerplate/blob/564dfc0690940938b07b08ea25f712f120f8a2dd/Django_Typescript_React_Workflow/README.md

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0
```


## License: desconhecido
https://github.com/leye195/blog/blob/b98075ebcf447d95cfa3b05bd46cfe1b2b62a241/src/posts/cra-custom-template/index.mdx

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0
```


## License: desconhecido
https://github.com/agnieve0513/gpa-dsm/blob/9c7f6077a06b7bd43d393e83f86f1ffca6095d66/package.json.save

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0
```


## License: desconhecido
https://github.com/MDaniel112/mdaniel-website/blob/fa674630a0c3b911f94e390b53ed2fb6614731f3/package%20backup

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0
```


## License: desconhecido
https://github.com/dominickjay/dominickjay.com/blob/ed99d80e76b0374d3bf8266527aa59e3117f2263/src/writing/lets-react-create-react-app.md

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0
```


## License: desconhecido
https://github.com/codeskyworld/WebsiteForMusicSchool/blob/517c6d29e5e347d9fa9080efdf1119e6897802a4/my-app/client/package-lock.json.orig

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0
```


## License: MIT
https://github.com/lit26/Full_Stack_Boilerplate/blob/564dfc0690940938b07b08ea25f712f120f8a2dd/Django_Typescript_React_Workflow/README.md

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.
```


## License: desconhecido
https://github.com/leye195/blog/blob/b98075ebcf447d95cfa3b05bd46cfe1b2b62a241/src/posts/cra-custom-template/index.mdx

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.
```


## License: desconhecido
https://github.com/agnieve0513/gpa-dsm/blob/9c7f6077a06b7bd43d393e83f86f1ffca6095d66/package.json.save

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.
```


## License: desconhecido
https://github.com/MDaniel112/mdaniel-website/blob/fa674630a0c3b911f94e390b53ed2fb6614731f3/package%20backup

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.
```


## License: desconhecido
https://github.com/dominickjay/dominickjay.com/blob/ed99d80e76b0374d3bf8266527aa59e3117f2263/src/writing/lets-react-create-react-app.md

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.
```


## License: desconhecido
https://github.com/codeskyworld/WebsiteForMusicSchool/blob/517c6d29e5e347d9fa9080efdf1119e6897802a4/my-app/client/package-lock.json.orig

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.
```


## License: MIT
https://github.com/lit26/Full_Stack_Boilerplate/blob/564dfc0690940938b07b08ea25f712f120f8a2dd/Django_Typescript_React_Workflow/README.md

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap
```


## License: desconhecido
https://github.com/leye195/blog/blob/b98075ebcf447d95cfa3b05bd46cfe1b2b62a241/src/posts/cra-custom-template/index.mdx

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap
```


## License: desconhecido
https://github.com/agnieve0513/gpa-dsm/blob/9c7f6077a06b7bd43d393e83f86f1ffca6095d66/package.json.save

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap
```


## License: desconhecido
https://github.com/MDaniel112/mdaniel-website/blob/fa674630a0c3b911f94e390b53ed2fb6614731f3/package%20backup

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap
```


## License: desconhecido
https://github.com/dominickjay/dominickjay.com/blob/ed99d80e76b0374d3bf8266527aa59e3117f2263/src/writing/lets-react-create-react-app.md

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap
```


## License: desconhecido
https://github.com/codeskyworld/WebsiteForMusicSchool/blob/517c6d29e5e347d9fa9080efdf1119e6897802a4/my-app/client/package-lock.json.orig

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap
```


## License: MIT
https://github.com/lit26/Full_Stack_Boilerplate/blob/564dfc0690940938b07b08ea25f712f120f8a2dd/Django_Typescript_React_Workflow/README.md

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0
```


## License: desconhecido
https://github.com/leye195/blog/blob/b98075ebcf447d95cfa3b05bd46cfe1b2b62a241/src/posts/cra-custom-template/index.mdx

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0
```


## License: desconhecido
https://github.com/agnieve0513/gpa-dsm/blob/9c7f6077a06b7bd43d393e83f86f1ffca6095d66/package.json.save

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0
```


## License: desconhecido
https://github.com/MDaniel112/mdaniel-website/blob/fa674630a0c3b911f94e390b53ed2fb6614731f3/package%20backup

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0
```


## License: desconhecido
https://github.com/dominickjay/dominickjay.com/blob/ed99d80e76b0374d3bf8266527aa59e3117f2263/src/writing/lets-react-create-react-app.md

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0
```


## License: desconhecido
https://github.com/codeskyworld/WebsiteForMusicSchool/blob/517c6d29e5e347d9fa9080efdf1119e6897802a4/my-app/client/package-lock.json.orig

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0
```


## License: MIT
https://github.com/lit26/Full_Stack_Boilerplate/blob/564dfc0690940938b07b08ea25f712f120f8a2dd/Django_Typescript_React_Workflow/README.md

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "
```


## License: desconhecido
https://github.com/linz04/PlantZo/blob/ac3c6c3c48753d12acb778b550f7e91e4f82d63c/client/package.json.bak

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "
```


## License: desconhecido
https://github.com/leye195/blog/blob/b98075ebcf447d95cfa3b05bd46cfe1b2b62a241/src/posts/cra-custom-template/index.mdx

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "
```


## License: desconhecido
https://github.com/agnieve0513/gpa-dsm/blob/9c7f6077a06b7bd43d393e83f86f1ffca6095d66/package.json.save

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "
```


## License: desconhecido
https://github.com/MDaniel112/mdaniel-website/blob/fa674630a0c3b911f94e390b53ed2fb6614731f3/package%20backup

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "
```


## License: desconhecido
https://github.com/dominickjay/dominickjay.com/blob/ed99d80e76b0374d3bf8266527aa59e3117f2263/src/writing/lets-react-create-react-app.md

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "
```


## License: desconhecido
https://github.com/codeskyworld/WebsiteForMusicSchool/blob/517c6d29e5e347d9fa9080efdf1119e6897802a4/my-app/client/package-lock.json.orig

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "
```


## License: MIT
https://github.com/lit26/Full_Stack_Boilerplate/blob/564dfc0690940938b07b08ea25f712f120f8a2dd/Django_Typescript_React_Workflow/README.md

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
```


## License: desconhecido
https://github.com/linz04/PlantZo/blob/ac3c6c3c48753d12acb778b550f7e91e4f82d63c/client/package.json.bak

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
```


## License: desconhecido
https://github.com/leye195/blog/blob/b98075ebcf447d95cfa3b05bd46cfe1b2b62a241/src/posts/cra-custom-template/index.mdx

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
```


## License: desconhecido
https://github.com/agnieve0513/gpa-dsm/blob/9c7f6077a06b7bd43d393e83f86f1ffca6095d66/package.json.save

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
```


## License: desconhecido
https://github.com/MDaniel112/mdaniel-website/blob/fa674630a0c3b911f94e390b53ed2fb6614731f3/package%20backup

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
```


## License: desconhecido
https://github.com/dominickjay/dominickjay.com/blob/ed99d80e76b0374d3bf8266527aa59e3117f2263/src/writing/lets-react-create-react-app.md

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
```


## License: desconhecido
https://github.com/codeskyworld/WebsiteForMusicSchool/blob/517c6d29e5e347d9fa9080efdf1119e6897802a4/my-app/client/package-lock.json.orig

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
```


## License: MIT
https://github.com/lit26/Full_Stack_Boilerplate/blob/564dfc0690940938b07b08ea25f712f120f8a2dd/Django_Typescript_React_Workflow/README.md

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4
```


## License: desconhecido
https://github.com/linz04/PlantZo/blob/ac3c6c3c48753d12acb778b550f7e91e4f82d63c/client/package.json.bak

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4
```


## License: MIT
https://github.com/cparisi1290/master-key-client/blob/295e6b1cdc3b29337e75da0c6c4ccf2167863ec8/README.md

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4
```


## License: desconhecido
https://github.com/leye195/blog/blob/b98075ebcf447d95cfa3b05bd46cfe1b2b62a241/src/posts/cra-custom-template/index.mdx

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4
```


## License: desconhecido
https://github.com/agnieve0513/gpa-dsm/blob/9c7f6077a06b7bd43d393e83f86f1ffca6095d66/package.json.save

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4
```


## License: desconhecido
https://github.com/MDaniel112/mdaniel-website/blob/fa674630a0c3b911f94e390b53ed2fb6614731f3/package%20backup

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4
```


## License: desconhecido
https://github.com/dominickjay/dominickjay.com/blob/ed99d80e76b0374d3bf8266527aa59e3117f2263/src/writing/lets-react-create-react-app.md

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4
```


## License: desconhecido
https://github.com/codeskyworld/WebsiteForMusicSchool/blob/517c6d29e5e347d9fa9080efdf1119e6897802a4/my-app/client/package-lock.json.orig

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4
```


## License: MIT
https://github.com/lit26/Full_Stack_Boilerplate/blob/564dfc0690940938b07b08ea25f712f120f8a2dd/Django_Typescript_React_Workflow/README.md

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-
```


## License: desconhecido
https://github.com/linz04/PlantZo/blob/ac3c6c3c48753d12acb778b550f7e91e4f82d63c/client/package.json.bak

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-
```


## License: MIT
https://github.com/cparisi1290/master-key-client/blob/295e6b1cdc3b29337e75da0c6c4ccf2167863ec8/README.md

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-
```


## License: desconhecido
https://github.com/leye195/blog/blob/b98075ebcf447d95cfa3b05bd46cfe1b2b62a241/src/posts/cra-custom-template/index.mdx

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-
```


## License: desconhecido
https://github.com/agnieve0513/gpa-dsm/blob/9c7f6077a06b7bd43d393e83f86f1ffca6095d66/package.json.save

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-
```


## License: desconhecido
https://github.com/Rufus-Sam/Snacktown/blob/9b6f4d98b71b26a5650f20086121d359d84921e2/README.md

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-
```


## License: desconhecido
https://github.com/MDaniel112/mdaniel-website/blob/fa674630a0c3b911f94e390b53ed2fb6614731f3/package%20backup

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-
```


## License: desconhecido
https://github.com/dominickjay/dominickjay.com/blob/ed99d80e76b0374d3bf8266527aa59e3117f2263/src/writing/lets-react-create-react-app.md

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-
```


## License: desconhecido
https://github.com/codeskyworld/WebsiteForMusicSchool/blob/517c6d29e5e347d9fa9080efdf1119e6897802a4/my-app/client/package-lock.json.orig

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-
```


## License: MIT
https://github.com/lit26/Full_Stack_Boilerplate/blob/564dfc0690940938b07b08ea25f712f120f8a2dd/Django_Typescript_React_Workflow/README.md

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4
```


## License: desconhecido
https://github.com/linz04/PlantZo/blob/ac3c6c3c48753d12acb778b550f7e91e4f82d63c/client/package.json.bak

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4
```


## License: MIT
https://github.com/cparisi1290/master-key-client/blob/295e6b1cdc3b29337e75da0c6c4ccf2167863ec8/README.md

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4
```


## License: desconhecido
https://github.com/leye195/blog/blob/b98075ebcf447d95cfa3b05bd46cfe1b2b62a241/src/posts/cra-custom-template/index.mdx

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4
```


## License: desconhecido
https://github.com/agnieve0513/gpa-dsm/blob/9c7f6077a06b7bd43d393e83f86f1ffca6095d66/package.json.save

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4
```


## License: desconhecido
https://github.com/Rufus-Sam/Snacktown/blob/9b6f4d98b71b26a5650f20086121d359d84921e2/README.md

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4
```


## License: desconhecido
https://github.com/MDaniel112/mdaniel-website/blob/fa674630a0c3b911f94e390b53ed2fb6614731f3/package%20backup

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4
```


## License: desconhecido
https://github.com/dominickjay/dominickjay.com/blob/ed99d80e76b0374d3bf8266527aa59e3117f2263/src/writing/lets-react-create-react-app.md

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4
```


## License: desconhecido
https://github.com/codeskyworld/WebsiteForMusicSchool/blob/517c6d29e5e347d9fa9080efdf1119e6897802a4/my-app/client/package-lock.json.orig

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4
```


## License: MIT
https://github.com/lit26/Full_Stack_Boilerplate/blob/564dfc0690940938b07b08ea25f712f120f8a2dd/Django_Typescript_React_Workflow/README.md

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4",
    "react-router-dom": "^
```


## License: desconhecido
https://github.com/linz04/PlantZo/blob/ac3c6c3c48753d12acb778b550f7e91e4f82d63c/client/package.json.bak

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4",
    "react-router-dom": "^
```


## License: MIT
https://github.com/cparisi1290/master-key-client/blob/295e6b1cdc3b29337e75da0c6c4ccf2167863ec8/README.md

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4",
    "react-router-dom": "^
```


## License: desconhecido
https://github.com/leye195/blog/blob/b98075ebcf447d95cfa3b05bd46cfe1b2b62a241/src/posts/cra-custom-template/index.mdx

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4",
    "react-router-dom": "^
```


## License: desconhecido
https://github.com/agnieve0513/gpa-dsm/blob/9c7f6077a06b7bd43d393e83f86f1ffca6095d66/package.json.save

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4",
    "react-router-dom": "^
```


## License: desconhecido
https://github.com/Rufus-Sam/Snacktown/blob/9b6f4d98b71b26a5650f20086121d359d84921e2/README.md

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4",
    "react-router-dom": "^
```


## License: desconhecido
https://github.com/MDaniel112/mdaniel-website/blob/fa674630a0c3b911f94e390b53ed2fb6614731f3/package%20backup

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4",
    "react-router-dom": "^
```


## License: desconhecido
https://github.com/dominickjay/dominickjay.com/blob/ed99d80e76b0374d3bf8266527aa59e3117f2263/src/writing/lets-react-create-react-app.md

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4",
    "react-router-dom": "^
```


## License: desconhecido
https://github.com/codeskyworld/WebsiteForMusicSchool/blob/517c6d29e5e347d9fa9080efdf1119e6897802a4/my-app/client/package-lock.json.orig

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4",
    "react-router-dom": "^
```


## License: MIT
https://github.com/lit26/Full_Stack_Boilerplate/blob/564dfc0690940938b07b08ea25f712f120f8a2dd/Django_Typescript_React_Workflow/README.md

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4",
    "react-router-dom": "^5.2.0",
    "
```


## License: desconhecido
https://github.com/linz04/PlantZo/blob/ac3c6c3c48753d12acb778b550f7e91e4f82d63c/client/package.json.bak

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4",
    "react-router-dom": "^5.2.0",
    "
```


## License: MIT
https://github.com/cparisi1290/master-key-client/blob/295e6b1cdc3b29337e75da0c6c4ccf2167863ec8/README.md

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4",
    "react-router-dom": "^5.2.0",
    "
```


## License: desconhecido
https://github.com/leye195/blog/blob/b98075ebcf447d95cfa3b05bd46cfe1b2b62a241/src/posts/cra-custom-template/index.mdx

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4",
    "react-router-dom": "^5.2.0",
    "
```


## License: desconhecido
https://github.com/agnieve0513/gpa-dsm/blob/9c7f6077a06b7bd43d393e83f86f1ffca6095d66/package.json.save

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4",
    "react-router-dom": "^5.2.0",
    "
```


## License: desconhecido
https://github.com/Rufus-Sam/Snacktown/blob/9b6f4d98b71b26a5650f20086121d359d84921e2/README.md

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4",
    "react-router-dom": "^5.2.0",
    "
```


## License: desconhecido
https://github.com/MDaniel112/mdaniel-website/blob/fa674630a0c3b911f94e390b53ed2fb6614731f3/package%20backup

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4",
    "react-router-dom": "^5.2.0",
    "
```


## License: desconhecido
https://github.com/dominickjay/dominickjay.com/blob/ed99d80e76b0374d3bf8266527aa59e3117f2263/src/writing/lets-react-create-react-app.md

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4",
    "react-router-dom": "^5.2.0",
    "
```


## License: desconhecido
https://github.com/codeskyworld/WebsiteForMusicSchool/blob/517c6d29e5e347d9fa9080efdf1119e6897802a4/my-app/client/package-lock.json.orig

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4",
    "react-router-dom": "^5.2.0",
    "
```


## License: MIT
https://github.com/lit26/Full_Stack_Boilerplate/blob/564dfc0690940938b07b08ea25f712f120f8a2dd/Django_Typescript_React_Workflow/README.md

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "
```


## License: desconhecido
https://github.com/linz04/PlantZo/blob/ac3c6c3c48753d12acb778b550f7e91e4f82d63c/client/package.json.bak

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "
```


## License: MIT
https://github.com/cparisi1290/master-key-client/blob/295e6b1cdc3b29337e75da0c6c4ccf2167863ec8/README.md

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "
```


## License: desconhecido
https://github.com/leye195/blog/blob/b98075ebcf447d95cfa3b05bd46cfe1b2b62a241/src/posts/cra-custom-template/index.mdx

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "
```


## License: desconhecido
https://github.com/agnieve0513/gpa-dsm/blob/9c7f6077a06b7bd43d393e83f86f1ffca6095d66/package.json.save

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "
```


## License: desconhecido
https://github.com/Rufus-Sam/Snacktown/blob/9b6f4d98b71b26a5650f20086121d359d84921e2/README.md

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "
```


## License: desconhecido
https://github.com/MDaniel112/mdaniel-website/blob/fa674630a0c3b911f94e390b53ed2fb6614731f3/package%20backup

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "
```


## License: desconhecido
https://github.com/dominickjay/dominickjay.com/blob/ed99d80e76b0374d3bf8266527aa59e3117f2263/src/writing/lets-react-create-react-app.md

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "
```


## License: desconhecido
https://github.com/codeskyworld/WebsiteForMusicSchool/blob/517c6d29e5e347d9fa9080efdf1119e6897802a4/my-app/client/package-lock.json.orig

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "
```


## License: MIT
https://github.com/lit26/Full_Stack_Boilerplate/blob/564dfc0690940938b07b08ea25f712f120f8a2dd/Django_Typescript_React_Workflow/README.md

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "redux": "^4.1.1
```


## License: desconhecido
https://github.com/linz04/PlantZo/blob/ac3c6c3c48753d12acb778b550f7e91e4f82d63c/client/package.json.bak

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "redux": "^4.1.1
```


## License: MIT
https://github.com/cparisi1290/master-key-client/blob/295e6b1cdc3b29337e75da0c6c4ccf2167863ec8/README.md

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "redux": "^4.1.1
```


## License: desconhecido
https://github.com/leye195/blog/blob/b98075ebcf447d95cfa3b05bd46cfe1b2b62a241/src/posts/cra-custom-template/index.mdx

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "redux": "^4.1.1
```


## License: desconhecido
https://github.com/agnieve0513/gpa-dsm/blob/9c7f6077a06b7bd43d393e83f86f1ffca6095d66/package.json.save

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "redux": "^4.1.1
```


## License: desconhecido
https://github.com/Rufus-Sam/Snacktown/blob/9b6f4d98b71b26a5650f20086121d359d84921e2/README.md

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "redux": "^4.1.1
```


## License: desconhecido
https://github.com/MDaniel112/mdaniel-website/blob/fa674630a0c3b911f94e390b53ed2fb6614731f3/package%20backup

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "redux": "^4.1.1
```


## License: desconhecido
https://github.com/dominickjay/dominickjay.com/blob/ed99d80e76b0374d3bf8266527aa59e3117f2263/src/writing/lets-react-create-react-app.md

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "redux": "^4.1.1
```


## License: desconhecido
https://github.com/codeskyworld/WebsiteForMusicSchool/blob/517c6d29e5e347d9fa9080efdf1119e6897802a4/my-app/client/package-lock.json.orig

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "redux": "^4.1.1
```


## License: MIT
https://github.com/lit26/Full_Stack_Boilerplate/blob/564dfc0690940938b07b08ea25f712f120f8a2dd/Django_Typescript_React_Workflow/README.md

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "redux": "^4.1.1",
    "redux-devtools-extension":
```


## License: desconhecido
https://github.com/linz04/PlantZo/blob/ac3c6c3c48753d12acb778b550f7e91e4f82d63c/client/package.json.bak

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "redux": "^4.1.1",
    "redux-devtools-extension":
```


## License: MIT
https://github.com/cparisi1290/master-key-client/blob/295e6b1cdc3b29337e75da0c6c4ccf2167863ec8/README.md

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "redux": "^4.1.1",
    "redux-devtools-extension":
```


## License: desconhecido
https://github.com/leye195/blog/blob/b98075ebcf447d95cfa3b05bd46cfe1b2b62a241/src/posts/cra-custom-template/index.mdx

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "redux": "^4.1.1",
    "redux-devtools-extension":
```


## License: desconhecido
https://github.com/agnieve0513/gpa-dsm/blob/9c7f6077a06b7bd43d393e83f86f1ffca6095d66/package.json.save

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "redux": "^4.1.1",
    "redux-devtools-extension":
```


## License: desconhecido
https://github.com/Rufus-Sam/Snacktown/blob/9b6f4d98b71b26a5650f20086121d359d84921e2/README.md

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "redux": "^4.1.1",
    "redux-devtools-extension":
```


## License: desconhecido
https://github.com/MDaniel112/mdaniel-website/blob/fa674630a0c3b911f94e390b53ed2fb6614731f3/package%20backup

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "redux": "^4.1.1",
    "redux-devtools-extension":
```


## License: desconhecido
https://github.com/dominickjay/dominickjay.com/blob/ed99d80e76b0374d3bf8266527aa59e3117f2263/src/writing/lets-react-create-react-app.md

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "redux": "^4.1.1",
    "redux-devtools-extension":
```


## License: desconhecido
https://github.com/codeskyworld/WebsiteForMusicSchool/blob/517c6d29e5e347d9fa9080efdf1119e6897802a4/my-app/client/package-lock.json.orig

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "redux": "^4.1.1",
    "redux-devtools-extension":
```


## License: MIT
https://github.com/lit26/Full_Stack_Boilerplate/blob/564dfc0690940938b07b08ea25f712f120f8a2dd/Django_Typescript_React_Workflow/README.md

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "redux": "^4.1.1",
    "redux-devtools-extension": "^2.13.9",
    "redux
```


## License: desconhecido
https://github.com/linz04/PlantZo/blob/ac3c6c3c48753d12acb778b550f7e91e4f82d63c/client/package.json.bak

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "redux": "^4.1.1",
    "redux-devtools-extension": "^2.13.9",
    "redux
```


## License: MIT
https://github.com/cparisi1290/master-key-client/blob/295e6b1cdc3b29337e75da0c6c4ccf2167863ec8/README.md

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "redux": "^4.1.1",
    "redux-devtools-extension": "^2.13.9",
    "redux
```


## License: desconhecido
https://github.com/leye195/blog/blob/b98075ebcf447d95cfa3b05bd46cfe1b2b62a241/src/posts/cra-custom-template/index.mdx

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "redux": "^4.1.1",
    "redux-devtools-extension": "^2.13.9",
    "redux
```


## License: desconhecido
https://github.com/agnieve0513/gpa-dsm/blob/9c7f6077a06b7bd43d393e83f86f1ffca6095d66/package.json.save

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "redux": "^4.1.1",
    "redux-devtools-extension": "^2.13.9",
    "redux
```


## License: desconhecido
https://github.com/Rufus-Sam/Snacktown/blob/9b6f4d98b71b26a5650f20086121d359d84921e2/README.md

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "redux": "^4.1.1",
    "redux-devtools-extension": "^2.13.9",
    "redux
```


## License: desconhecido
https://github.com/MDaniel112/mdaniel-website/blob/fa674630a0c3b911f94e390b53ed2fb6614731f3/package%20backup

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "redux": "^4.1.1",
    "redux-devtools-extension": "^2.13.9",
    "redux
```


## License: desconhecido
https://github.com/dominickjay/dominickjay.com/blob/ed99d80e76b0374d3bf8266527aa59e3117f2263/src/writing/lets-react-create-react-app.md

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "redux": "^4.1.1",
    "redux-devtools-extension": "^2.13.9",
    "redux
```


## License: desconhecido
https://github.com/codeskyworld/WebsiteForMusicSchool/blob/517c6d29e5e347d9fa9080efdf1119e6897802a4/my-app/client/package-lock.json.orig

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "redux": "^4.1.1",
    "redux-devtools-extension": "^2.13.9",
    "redux
```


## License: MIT
https://github.com/lit26/Full_Stack_Boilerplate/blob/564dfc0690940938b07b08ea25f712f120f8a2dd/Django_Typescript_React_Workflow/README.md

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "redux": "^4.1.1",
    "redux-devtools-extension": "^2.13.9",
    "redux-thunk": "^2.
```


## License: desconhecido
https://github.com/linz04/PlantZo/blob/ac3c6c3c48753d12acb778b550f7e91e4f82d63c/client/package.json.bak

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "redux": "^4.1.1",
    "redux-devtools-extension": "^2.13.9",
    "redux-thunk": "^2.
```


## License: MIT
https://github.com/cparisi1290/master-key-client/blob/295e6b1cdc3b29337e75da0c6c4ccf2167863ec8/README.md

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "redux": "^4.1.1",
    "redux-devtools-extension": "^2.13.9",
    "redux-thunk": "^2.
```


## License: desconhecido
https://github.com/leye195/blog/blob/b98075ebcf447d95cfa3b05bd46cfe1b2b62a241/src/posts/cra-custom-template/index.mdx

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "redux": "^4.1.1",
    "redux-devtools-extension": "^2.13.9",
    "redux-thunk": "^2.
```


## License: desconhecido
https://github.com/agnieve0513/gpa-dsm/blob/9c7f6077a06b7bd43d393e83f86f1ffca6095d66/package.json.save

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "redux": "^4.1.1",
    "redux-devtools-extension": "^2.13.9",
    "redux-thunk": "^2.
```


## License: desconhecido
https://github.com/Rufus-Sam/Snacktown/blob/9b6f4d98b71b26a5650f20086121d359d84921e2/README.md

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "redux": "^4.1.1",
    "redux-devtools-extension": "^2.13.9",
    "redux-thunk": "^2.
```


## License: desconhecido
https://github.com/MDaniel112/mdaniel-website/blob/fa674630a0c3b911f94e390b53ed2fb6614731f3/package%20backup

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "redux": "^4.1.1",
    "redux-devtools-extension": "^2.13.9",
    "redux-thunk": "^2.
```


## License: desconhecido
https://github.com/dominickjay/dominickjay.com/blob/ed99d80e76b0374d3bf8266527aa59e3117f2263/src/writing/lets-react-create-react-app.md

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "redux": "^4.1.1",
    "redux-devtools-extension": "^2.13.9",
    "redux-thunk": "^2.
```


## License: desconhecido
https://github.com/codeskyworld/WebsiteForMusicSchool/blob/517c6d29e5e347d9fa9080efdf1119e6897802a4/my-app/client/package-lock.json.orig

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "redux": "^4.1.1",
    "redux-devtools-extension": "^2.13.9",
    "redux-thunk": "^2.
```


## License: MIT
https://github.com/lit26/Full_Stack_Boilerplate/blob/564dfc0690940938b07b08ea25f712f120f8a2dd/Django_Typescript_React_Workflow/README.md

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "redux": "^4.1.1",
    "redux-devtools-extension": "^2.13.9",
    "redux-thunk": "^2.3.0",
```


## License: desconhecido
https://github.com/linz04/PlantZo/blob/ac3c6c3c48753d12acb778b550f7e91e4f82d63c/client/package.json.bak

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "redux": "^4.1.1",
    "redux-devtools-extension": "^2.13.9",
    "redux-thunk": "^2.3.0",
```


## License: MIT
https://github.com/cparisi1290/master-key-client/blob/295e6b1cdc3b29337e75da0c6c4ccf2167863ec8/README.md

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "redux": "^4.1.1",
    "redux-devtools-extension": "^2.13.9",
    "redux-thunk": "^2.3.0",
```


## License: desconhecido
https://github.com/leye195/blog/blob/b98075ebcf447d95cfa3b05bd46cfe1b2b62a241/src/posts/cra-custom-template/index.mdx

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "redux": "^4.1.1",
    "redux-devtools-extension": "^2.13.9",
    "redux-thunk": "^2.3.0",
```


## License: desconhecido
https://github.com/agnieve0513/gpa-dsm/blob/9c7f6077a06b7bd43d393e83f86f1ffca6095d66/package.json.save

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "redux": "^4.1.1",
    "redux-devtools-extension": "^2.13.9",
    "redux-thunk": "^2.3.0",
```


## License: desconhecido
https://github.com/Rufus-Sam/Snacktown/blob/9b6f4d98b71b26a5650f20086121d359d84921e2/README.md

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "redux": "^4.1.1",
    "redux-devtools-extension": "^2.13.9",
    "redux-thunk": "^2.3.0",
```


## License: desconhecido
https://github.com/MDaniel112/mdaniel-website/blob/fa674630a0c3b911f94e390b53ed2fb6614731f3/package%20backup

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "redux": "^4.1.1",
    "redux-devtools-extension": "^2.13.9",
    "redux-thunk": "^2.3.0",
```


## License: desconhecido
https://github.com/dominickjay/dominickjay.com/blob/ed99d80e76b0374d3bf8266527aa59e3117f2263/src/writing/lets-react-create-react-app.md

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "redux": "^4.1.1",
    "redux-devtools-extension": "^2.13.9",
    "redux-thunk": "^2.3.0",
```


## License: desconhecido
https://github.com/codeskyworld/WebsiteForMusicSchool/blob/517c6d29e5e347d9fa9080efdf1119e6897802a4/my-app/client/package-lock.json.orig

```
"version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.21.1",
    "bootstrap": "^5.1.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.0-beta.6",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-redux": "^7.2.4",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "redux": "^4.1.1",
    "redux-devtools-extension": "^2.13.9",
    "redux-thunk": "^2.3.0",
```


## License: desconhecido
https://github.com/temple-deng/learning-repo/blob/dd4eea6069d1de692c4f5af6847d6c258382c3e7/React/16.12/cra/getting-started.md

```
0",
    "web-
```


## License: desconhecido
https://github.com/dominickjay/dominickjay.com/blob/ed99d80e76b0374d3bf8266527aa59e3117f2263/src/writing/lets-react-create-react-app.md

```
0",
    "web-
```


## License: MIT
https://github.com/zhuangyan/zhuangyan.github.com/blob/bded295c65a6c57406687b2692906c73a2e0bb7f/_posts/2019-02-24-learn-react-day1.md

```
0",
    "web-vitals": "^2.1.0
```


## License: BSD-3-Clause
https://github.com/code-chimp/code-chimp.github.io/blob/0290a79c35cbbc2517d6edd186594b41c4db91ee/content/posts/psa-clean-up-package-json/index.md

```
0",
    "web-vitals": "^2.1.0
```


## License: desconhecido
https://github.com/temple-deng/learning-repo/blob/dd4eea6069d1de692c4f5af6847d6c258382c3e7/React/16.12/cra/getting-started.md

```
0",
    "web-vitals": "^2.1.0
```


## License: desconhecido
https://github.com/dominickjay/dominickjay.com/blob/ed99d80e76b0374d3bf8266527aa59e3117f2263/src/writing/lets-react-create-react-app.md

```
0",
    "web-vitals": "^2.1.0
```


## License: MIT
https://github.com/zhuangyan/zhuangyan.github.com/blob/bded295c65a6c57406687b2692906c73a2e0bb7f/_posts/2019-02-24-learn-react-day1.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    
```


## License: BSD-3-Clause
https://github.com/code-chimp/code-chimp.github.io/blob/0290a79c35cbbc2517d6edd186594b41c4db91ee/content/posts/psa-clean-up-package-json/index.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    
```


## License: desconhecido
https://github.com/temple-deng/learning-repo/blob/dd4eea6069d1de692c4f5af6847d6c258382c3e7/React/16.12/cra/getting-started.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    
```


## License: desconhecido
https://github.com/dominickjay/dominickjay.com/blob/ed99d80e76b0374d3bf8266527aa59e3117f2263/src/writing/lets-react-create-react-app.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    
```


## License: MIT
https://github.com/zhuangyan/zhuangyan.github.com/blob/bded295c65a6c57406687b2692906c73a2e0bb7f/_posts/2019-02-24-learn-react-day1.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "
```


## License: BSD-3-Clause
https://github.com/code-chimp/code-chimp.github.io/blob/0290a79c35cbbc2517d6edd186594b41c4db91ee/content/posts/psa-clean-up-package-json/index.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "
```


## License: desconhecido
https://github.com/temple-deng/learning-repo/blob/dd4eea6069d1de692c4f5af6847d6c258382c3e7/React/16.12/cra/getting-started.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "
```


## License: desconhecido
https://github.com/dominickjay/dominickjay.com/blob/ed99d80e76b0374d3bf8266527aa59e3117f2263/src/writing/lets-react-create-react-app.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "
```


## License: MIT
https://github.com/zhuangyan/zhuangyan.github.com/blob/bded295c65a6c57406687b2692906c73a2e0bb7f/_posts/2019-02-24-learn-react-day1.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
```


## License: BSD-3-Clause
https://github.com/code-chimp/code-chimp.github.io/blob/0290a79c35cbbc2517d6edd186594b41c4db91ee/content/posts/psa-clean-up-package-json/index.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
```


## License: desconhecido
https://github.com/temple-deng/learning-repo/blob/dd4eea6069d1de692c4f5af6847d6c258382c3e7/React/16.12/cra/getting-started.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
```


## License: desconhecido
https://github.com/dominickjay/dominickjay.com/blob/ed99d80e76b0374d3bf8266527aa59e3117f2263/src/writing/lets-react-create-react-app.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
```


## License: MIT
https://github.com/TechNickAI/package.json-validator/blob/666791a46c53301cbb22933e9d094e139f64aecb/README.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
```


## License: MIT
https://github.com/zhuangyan/zhuangyan.github.com/blob/bded295c65a6c57406687b2692906c73a2e0bb7f/_posts/2019-02-24-learn-react-day1.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
```


## License: BSD-3-Clause
https://github.com/code-chimp/code-chimp.github.io/blob/0290a79c35cbbc2517d6edd186594b41c4db91ee/content/posts/psa-clean-up-package-json/index.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
```


## License: desconhecido
https://github.com/temple-deng/learning-repo/blob/dd4eea6069d1de692c4f5af6847d6c258382c3e7/React/16.12/cra/getting-started.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
```


## License: desconhecido
https://github.com/dominickjay/dominickjay.com/blob/ed99d80e76b0374d3bf8266527aa59e3117f2263/src/writing/lets-react-create-react-app.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
```


## License: MIT
https://github.com/TechNickAI/package.json-validator/blob/666791a46c53301cbb22933e9d094e139f64aecb/README.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
```


## License: MIT
https://github.com/zhuangyan/zhuangyan.github.com/blob/bded295c65a6c57406687b2692906c73a2e0bb7f/_posts/2019-02-24-learn-react-day1.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
```


## License: BSD-3-Clause
https://github.com/code-chimp/code-chimp.github.io/blob/0290a79c35cbbc2517d6edd186594b41c4db91ee/content/posts/psa-clean-up-package-json/index.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
```


## License: desconhecido
https://github.com/temple-deng/learning-repo/blob/dd4eea6069d1de692c4f5af6847d6c258382c3e7/React/16.12/cra/getting-started.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
```


## License: desconhecido
https://github.com/dominickjay/dominickjay.com/blob/ed99d80e76b0374d3bf8266527aa59e3117f2263/src/writing/lets-react-create-react-app.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
```


## License: MIT
https://github.com/TechNickAI/package.json-validator/blob/666791a46c53301cbb22933e9d094e139f64aecb/README.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
```


## License: MIT
https://github.com/zhuangyan/zhuangyan.github.com/blob/bded295c65a6c57406687b2692906c73a2e0bb7f/_posts/2019-02-24-learn-react-day1.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
```


## License: BSD-3-Clause
https://github.com/code-chimp/code-chimp.github.io/blob/0290a79c35cbbc2517d6edd186594b41c4db91ee/content/posts/psa-clean-up-package-json/index.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
```


## License: desconhecido
https://github.com/temple-deng/learning-repo/blob/dd4eea6069d1de692c4f5af6847d6c258382c3e7/React/16.12/cra/getting-started.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
```


## License: desconhecido
https://github.com/dominickjay/dominickjay.com/blob/ed99d80e76b0374d3bf8266527aa59e3117f2263/src/writing/lets-react-create-react-app.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
```


## License: MIT
https://github.com/TechNickAI/package.json-validator/blob/666791a46c53301cbb22933e9d094e139f64aecb/README.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      
```


## License: MIT
https://github.com/zhuangyan/zhuangyan.github.com/blob/bded295c65a6c57406687b2692906c73a2e0bb7f/_posts/2019-02-24-learn-react-day1.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      
```


## License: BSD-3-Clause
https://github.com/code-chimp/code-chimp.github.io/blob/0290a79c35cbbc2517d6edd186594b41c4db91ee/content/posts/psa-clean-up-package-json/index.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      
```


## License: desconhecido
https://github.com/temple-deng/learning-repo/blob/dd4eea6069d1de692c4f5af6847d6c258382c3e7/React/16.12/cra/getting-started.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      
```


## License: desconhecido
https://github.com/dominickjay/dominickjay.com/blob/ed99d80e76b0374d3bf8266527aa59e3117f2263/src/writing/lets-react-create-react-app.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      
```


## License: MIT
https://github.com/TechNickAI/package.json-validator/blob/666791a46c53301cbb22933e9d094e139f64aecb/README.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "
```


## License: BSD-2-Clause
https://github.com/tethysplatform/tethys/blob/cf6ebe6099663db3de683d94a04fefa6508e286d/tethys_cli/scaffold_templates/app_templates/react/package.json_tmpl

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "
```


## License: MIT
https://github.com/zhuangyan/zhuangyan.github.com/blob/bded295c65a6c57406687b2692906c73a2e0bb7f/_posts/2019-02-24-learn-react-day1.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "
```


## License: BSD-3-Clause
https://github.com/code-chimp/code-chimp.github.io/blob/0290a79c35cbbc2517d6edd186594b41c4db91ee/content/posts/psa-clean-up-package-json/index.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "
```


## License: desconhecido
https://github.com/temple-deng/learning-repo/blob/dd4eea6069d1de692c4f5af6847d6c258382c3e7/React/16.12/cra/getting-started.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "
```


## License: desconhecido
https://github.com/dominickjay/dominickjay.com/blob/ed99d80e76b0374d3bf8266527aa59e3117f2263/src/writing/lets-react-create-react-app.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "
```


## License: MIT
https://github.com/TechNickAI/package.json-validator/blob/666791a46c53301cbb22933e9d094e139f64aecb/README.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
```


## License: BSD-2-Clause
https://github.com/tethysplatform/tethys/blob/cf6ebe6099663db3de683d94a04fefa6508e286d/tethys_cli/scaffold_templates/app_templates/react/package.json_tmpl

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
```


## License: MIT
https://github.com/zhuangyan/zhuangyan.github.com/blob/bded295c65a6c57406687b2692906c73a2e0bb7f/_posts/2019-02-24-learn-react-day1.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
```


## License: BSD-3-Clause
https://github.com/code-chimp/code-chimp.github.io/blob/0290a79c35cbbc2517d6edd186594b41c4db91ee/content/posts/psa-clean-up-package-json/index.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
```


## License: desconhecido
https://github.com/temple-deng/learning-repo/blob/dd4eea6069d1de692c4f5af6847d6c258382c3e7/React/16.12/cra/getting-started.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
```


## License: desconhecido
https://github.com/dominickjay/dominickjay.com/blob/ed99d80e76b0374d3bf8266527aa59e3117f2263/src/writing/lets-react-create-react-app.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
```


## License: MIT
https://github.com/TechNickAI/package.json-validator/blob/666791a46c53301cbb22933e9d094e139f64aecb/README.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production
```


## License: BSD-2-Clause
https://github.com/tethysplatform/tethys/blob/cf6ebe6099663db3de683d94a04fefa6508e286d/tethys_cli/scaffold_templates/app_templates/react/package.json_tmpl

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production
```


## License: MIT
https://github.com/zhuangyan/zhuangyan.github.com/blob/bded295c65a6c57406687b2692906c73a2e0bb7f/_posts/2019-02-24-learn-react-day1.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production
```


## License: BSD-3-Clause
https://github.com/code-chimp/code-chimp.github.io/blob/0290a79c35cbbc2517d6edd186594b41c4db91ee/content/posts/psa-clean-up-package-json/index.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production
```


## License: desconhecido
https://github.com/temple-deng/learning-repo/blob/dd4eea6069d1de692c4f5af6847d6c258382c3e7/React/16.12/cra/getting-started.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production
```


## License: desconhecido
https://github.com/aknay/aknay.github.io/blob/fce20933f87d8aea2d50fa4eb63e7114328974a8/_posts/2021-01-06-build-a-react-flask-app-with-react-vis-chart-for-data-visualization.markdown

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production
```


## License: desconhecido
https://github.com/dominickjay/dominickjay.com/blob/ed99d80e76b0374d3bf8266527aa59e3117f2263/src/writing/lets-react-create-react-app.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production
```


## License: MIT
https://github.com/TechNickAI/package.json-validator/blob/666791a46c53301cbb22933e9d094e139f64aecb/README.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.
```


## License: BSD-2-Clause
https://github.com/tethysplatform/tethys/blob/cf6ebe6099663db3de683d94a04fefa6508e286d/tethys_cli/scaffold_templates/app_templates/react/package.json_tmpl

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.
```


## License: MIT
https://github.com/zhuangyan/zhuangyan.github.com/blob/bded295c65a6c57406687b2692906c73a2e0bb7f/_posts/2019-02-24-learn-react-day1.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.
```


## License: BSD-3-Clause
https://github.com/code-chimp/code-chimp.github.io/blob/0290a79c35cbbc2517d6edd186594b41c4db91ee/content/posts/psa-clean-up-package-json/index.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.
```


## License: desconhecido
https://github.com/temple-deng/learning-repo/blob/dd4eea6069d1de692c4f5af6847d6c258382c3e7/React/16.12/cra/getting-started.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.
```


## License: desconhecido
https://github.com/aknay/aknay.github.io/blob/fce20933f87d8aea2d50fa4eb63e7114328974a8/_posts/2021-01-06-build-a-react-flask-app-with-react-vis-chart-for-data-visualization.markdown

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.
```


## License: desconhecido
https://github.com/dominickjay/dominickjay.com/blob/ed99d80e76b0374d3bf8266527aa59e3117f2263/src/writing/lets-react-create-react-app.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.
```


## License: MIT
https://github.com/TechNickAI/package.json-validator/blob/666791a46c53301cbb22933e9d094e139f64aecb/README.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dea
```


## License: BSD-2-Clause
https://github.com/tethysplatform/tethys/blob/cf6ebe6099663db3de683d94a04fefa6508e286d/tethys_cli/scaffold_templates/app_templates/react/package.json_tmpl

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dea
```


## License: MIT
https://github.com/zhuangyan/zhuangyan.github.com/blob/bded295c65a6c57406687b2692906c73a2e0bb7f/_posts/2019-02-24-learn-react-day1.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dea
```


## License: BSD-3-Clause
https://github.com/code-chimp/code-chimp.github.io/blob/0290a79c35cbbc2517d6edd186594b41c4db91ee/content/posts/psa-clean-up-package-json/index.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dea
```


## License: desconhecido
https://github.com/temple-deng/learning-repo/blob/dd4eea6069d1de692c4f5af6847d6c258382c3e7/React/16.12/cra/getting-started.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dea
```


## License: desconhecido
https://github.com/aknay/aknay.github.io/blob/fce20933f87d8aea2d50fa4eb63e7114328974a8/_posts/2021-01-06-build-a-react-flask-app-with-react-vis-chart-for-data-visualization.markdown

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dea
```


## License: desconhecido
https://github.com/dominickjay/dominickjay.com/blob/ed99d80e76b0374d3bf8266527aa59e3117f2263/src/writing/lets-react-create-react-app.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dea
```


## License: MIT
https://github.com/TechNickAI/package.json-validator/blob/666791a46c53301cbb22933e9d094e139f64aecb/README.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini
```


## License: BSD-2-Clause
https://github.com/tethysplatform/tethys/blob/cf6ebe6099663db3de683d94a04fefa6508e286d/tethys_cli/scaffold_templates/app_templates/react/package.json_tmpl

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini
```


## License: MIT
https://github.com/zhuangyan/zhuangyan.github.com/blob/bded295c65a6c57406687b2692906c73a2e0bb7f/_posts/2019-02-24-learn-react-day1.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini
```


## License: BSD-3-Clause
https://github.com/code-chimp/code-chimp.github.io/blob/0290a79c35cbbc2517d6edd186594b41c4db91ee/content/posts/psa-clean-up-package-json/index.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini
```


## License: desconhecido
https://github.com/temple-deng/learning-repo/blob/dd4eea6069d1de692c4f5af6847d6c258382c3e7/React/16.12/cra/getting-started.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini
```


## License: desconhecido
https://github.com/aknay/aknay.github.io/blob/fce20933f87d8aea2d50fa4eb63e7114328974a8/_posts/2021-01-06-build-a-react-flask-app-with-react-vis-chart-for-data-visualization.markdown

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini
```


## License: desconhecido
https://github.com/dominickjay/dominickjay.com/blob/ed99d80e76b0374d3bf8266527aa59e3117f2263/src/writing/lets-react-create-react-app.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini
```


## License: MIT
https://github.com/TechNickAI/package.json-validator/blob/666791a46c53301cbb22933e9d094e139f64aecb/README.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
```


## License: BSD-2-Clause
https://github.com/tethysplatform/tethys/blob/cf6ebe6099663db3de683d94a04fefa6508e286d/tethys_cli/scaffold_templates/app_templates/react/package.json_tmpl

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
```


## License: MIT
https://github.com/zhuangyan/zhuangyan.github.com/blob/bded295c65a6c57406687b2692906c73a2e0bb7f/_posts/2019-02-24-learn-react-day1.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
```


## License: BSD-3-Clause
https://github.com/code-chimp/code-chimp.github.io/blob/0290a79c35cbbc2517d6edd186594b41c4db91ee/content/posts/psa-clean-up-package-json/index.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
```


## License: desconhecido
https://github.com/temple-deng/learning-repo/blob/dd4eea6069d1de692c4f5af6847d6c258382c3e7/React/16.12/cra/getting-started.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
```


## License: desconhecido
https://github.com/aknay/aknay.github.io/blob/fce20933f87d8aea2d50fa4eb63e7114328974a8/_posts/2021-01-06-build-a-react-flask-app-with-react-vis-chart-for-data-visualization.markdown

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
```


## License: desconhecido
https://github.com/dominickjay/dominickjay.com/blob/ed99d80e76b0374d3bf8266527aa59e3117f2263/src/writing/lets-react-create-react-app.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
```


## License: MIT
https://github.com/TechNickAI/package.json-validator/blob/666791a46c53301cbb22933e9d094e139f64aecb/README.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "
```


## License: BSD-2-Clause
https://github.com/tethysplatform/tethys/blob/cf6ebe6099663db3de683d94a04fefa6508e286d/tethys_cli/scaffold_templates/app_templates/react/package.json_tmpl

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "
```


## License: MIT
https://github.com/zhuangyan/zhuangyan.github.com/blob/bded295c65a6c57406687b2692906c73a2e0bb7f/_posts/2019-02-24-learn-react-day1.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "
```


## License: BSD-3-Clause
https://github.com/code-chimp/code-chimp.github.io/blob/0290a79c35cbbc2517d6edd186594b41c4db91ee/content/posts/psa-clean-up-package-json/index.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "
```


## License: desconhecido
https://github.com/temple-deng/learning-repo/blob/dd4eea6069d1de692c4f5af6847d6c258382c3e7/React/16.12/cra/getting-started.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "
```


## License: desconhecido
https://github.com/aknay/aknay.github.io/blob/fce20933f87d8aea2d50fa4eb63e7114328974a8/_posts/2021-01-06-build-a-react-flask-app-with-react-vis-chart-for-data-visualization.markdown

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "
```


## License: desconhecido
https://github.com/dominickjay/dominickjay.com/blob/ed99d80e76b0374d3bf8266527aa59e3117f2263/src/writing/lets-react-create-react-app.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "
```


## License: MIT
https://github.com/TechNickAI/package.json-validator/blob/666791a46c53301cbb22933e9d094e139f64aecb/README.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 
```


## License: BSD-2-Clause
https://github.com/tethysplatform/tethys/blob/cf6ebe6099663db3de683d94a04fefa6508e286d/tethys_cli/scaffold_templates/app_templates/react/package.json_tmpl

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 
```


## License: MIT
https://github.com/zhuangyan/zhuangyan.github.com/blob/bded295c65a6c57406687b2692906c73a2e0bb7f/_posts/2019-02-24-learn-react-day1.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 
```


## License: BSD-3-Clause
https://github.com/code-chimp/code-chimp.github.io/blob/0290a79c35cbbc2517d6edd186594b41c4db91ee/content/posts/psa-clean-up-package-json/index.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 
```


## License: desconhecido
https://github.com/temple-deng/learning-repo/blob/dd4eea6069d1de692c4f5af6847d6c258382c3e7/React/16.12/cra/getting-started.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 
```


## License: desconhecido
https://github.com/aknay/aknay.github.io/blob/fce20933f87d8aea2d50fa4eb63e7114328974a8/_posts/2021-01-06-build-a-react-flask-app-with-react-vis-chart-for-data-visualization.markdown

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 
```


## License: desconhecido
https://github.com/dominickjay/dominickjay.com/blob/ed99d80e76b0374d3bf8266527aa59e3117f2263/src/writing/lets-react-create-react-app.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 
```


## License: MIT
https://github.com/TechNickAI/package.json-validator/blob/666791a46c53301cbb22933e9d094e139f64aecb/README.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
```


## License: BSD-2-Clause
https://github.com/tethysplatform/tethys/blob/cf6ebe6099663db3de683d94a04fefa6508e286d/tethys_cli/scaffold_templates/app_templates/react/package.json_tmpl

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
```


## License: MIT
https://github.com/zhuangyan/zhuangyan.github.com/blob/bded295c65a6c57406687b2692906c73a2e0bb7f/_posts/2019-02-24-learn-react-day1.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
```


## License: BSD-3-Clause
https://github.com/code-chimp/code-chimp.github.io/blob/0290a79c35cbbc2517d6edd186594b41c4db91ee/content/posts/psa-clean-up-package-json/index.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
```


## License: desconhecido
https://github.com/temple-deng/learning-repo/blob/dd4eea6069d1de692c4f5af6847d6c258382c3e7/React/16.12/cra/getting-started.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
```


## License: desconhecido
https://github.com/aknay/aknay.github.io/blob/fce20933f87d8aea2d50fa4eb63e7114328974a8/_posts/2021-01-06-build-a-react-flask-app-with-react-vis-chart-for-data-visualization.markdown

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
```


## License: desconhecido
https://github.com/dominickjay/dominickjay.com/blob/ed99d80e76b0374d3bf8266527aa59e3117f2263/src/writing/lets-react-create-react-app.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
```


## License: MIT
https://github.com/TechNickAI/package.json-validator/blob/666791a46c53301cbb22933e9d094e139f64aecb/README.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "proxy": "http://
```


## License: BSD-2-Clause
https://github.com/tethysplatform/tethys/blob/cf6ebe6099663db3de683d94a04fefa6508e286d/tethys_cli/scaffold_templates/app_templates/react/package.json_tmpl

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "proxy": "http://
```


## License: MIT
https://github.com/zhuangyan/zhuangyan.github.com/blob/bded295c65a6c57406687b2692906c73a2e0bb7f/_posts/2019-02-24-learn-react-day1.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "proxy": "http://
```


## License: BSD-3-Clause
https://github.com/code-chimp/code-chimp.github.io/blob/0290a79c35cbbc2517d6edd186594b41c4db91ee/content/posts/psa-clean-up-package-json/index.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "proxy": "http://
```


## License: desconhecido
https://github.com/temple-deng/learning-repo/blob/dd4eea6069d1de692c4f5af6847d6c258382c3e7/React/16.12/cra/getting-started.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "proxy": "http://
```


## License: desconhecido
https://github.com/aknay/aknay.github.io/blob/fce20933f87d8aea2d50fa4eb63e7114328974a8/_posts/2021-01-06-build-a-react-flask-app-with-react-vis-chart-for-data-visualization.markdown

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "proxy": "http://
```


## License: desconhecido
https://github.com/dominickjay/dominickjay.com/blob/ed99d80e76b0374d3bf8266527aa59e3117f2263/src/writing/lets-react-create-react-app.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "proxy": "http://
```


## License: MIT
https://github.com/TechNickAI/package.json-validator/blob/666791a46c53301cbb22933e9d094e139f64aecb/README.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "proxy": "http://localhost:5000"
```


## License: BSD-2-Clause
https://github.com/tethysplatform/tethys/blob/cf6ebe6099663db3de683d94a04fefa6508e286d/tethys_cli/scaffold_templates/app_templates/react/package.json_tmpl

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "proxy": "http://localhost:5000"
```


## License: MIT
https://github.com/zhuangyan/zhuangyan.github.com/blob/bded295c65a6c57406687b2692906c73a2e0bb7f/_posts/2019-02-24-learn-react-day1.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "proxy": "http://localhost:5000"
```


## License: BSD-3-Clause
https://github.com/code-chimp/code-chimp.github.io/blob/0290a79c35cbbc2517d6edd186594b41c4db91ee/content/posts/psa-clean-up-package-json/index.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "proxy": "http://localhost:5000"
```


## License: desconhecido
https://github.com/temple-deng/learning-repo/blob/dd4eea6069d1de692c4f5af6847d6c258382c3e7/React/16.12/cra/getting-started.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "proxy": "http://localhost:5000"
```


## License: desconhecido
https://github.com/aknay/aknay.github.io/blob/fce20933f87d8aea2d50fa4eb63e7114328974a8/_posts/2021-01-06-build-a-react-flask-app-with-react-vis-chart-for-data-visualization.markdown

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "proxy": "http://localhost:5000"
```


## License: desconhecido
https://github.com/dominickjay/dominickjay.com/blob/ed99d80e76b0374d3bf8266527aa59e3117f2263/src/writing/lets-react-create-react-app.md

```
0",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "proxy": "http://localhost:5000"
```


## License: desconhecido
https://github.com/hari2120/redux-contact-book/blob/b0dcb7f46a01126275d09afd08cc917ba50e9995/src/index.js

```
ReactDOM
```


## License: MIT
https://github.com/smronju/React-Redux-Example/blob/926d769178ce6b2bc4327c24ed1a097378712f9c/src/index.js

```
ReactDOM from 'react-dom';
```


## License: desconhecido
https://github.com/lastoftype/redux-drinks/blob/2b2ec68b6cb340d90770fcca57e91e6a37018b0d/src/index.js

```
ReactDOM from 'react-dom';
```


## License: desconhecido
https://github.com/hari2120/redux-contact-book/blob/b0dcb7f46a01126275d09afd08cc917ba50e9995/src/index.js

```
ReactDOM from 'react-dom';
```


## License: MIT
https://github.com/smronju/React-Redux-Example/blob/926d769178ce6b2bc4327c24ed1a097378712f9c/src/index.js

```
ReactDOM from 'react-dom';
import './styles/index.scss';
import App from
```


## License: desconhecido
https://github.com/lastoftype/redux-drinks/blob/2b2ec68b6cb340d90770fcca57e91e6a37018b0d/src/index.js

```
ReactDOM from 'react-dom';
import './styles/index.scss';
import App from
```


## License: desconhecido
https://github.com/leodeslf/leaf/blob/28f5140c1cbca4467c7df6cca378f40dfd45dc0c/prebuild/front/coding/react_redux_toolkit.md

```
ReactDOM from 'react-dom';
import './styles/index.scss';
import App from
```


## License: desconhecido
https://github.com/hari2120/redux-contact-book/blob/b0dcb7f46a01126275d09afd08cc917ba50e9995/src/index.js

```
ReactDOM from 'react-dom';
import './styles/index.scss';
import App from
```


## License: MIT
https://github.com/smronju/React-Redux-Example/blob/926d769178ce6b2bc4327c24ed1a097378712f9c/src/index.js

```
ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import { Provider } from 'react-redux
```


## License: desconhecido
https://github.com/lastoftype/redux-drinks/blob/2b2ec68b6cb340d90770fcca57e91e6a37018b0d/src/index.js

```
ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import { Provider } from 'react-redux
```


## License: desconhecido
https://github.com/leodeslf/leaf/blob/28f5140c1cbca4467c7df6cca378f40dfd45dc0c/prebuild/front/coding/react_redux_toolkit.md

```
ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import { Provider } from 'react-redux
```


## License: desconhecido
https://github.com/hari2120/redux-contact-book/blob/b0dcb7f46a01126275d09afd08cc917ba50e9995/src/index.js

```
ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import { Provider } from 'react-redux
```


## License: MIT
https://github.com/smronju/React-Redux-Example/blob/926d769178ce6b2bc4327c24ed1a097378712f9c/src/index.js

```
ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render
```


## License: desconhecido
https://github.com/lastoftype/redux-drinks/blob/2b2ec68b6cb340d90770fcca57e91e6a37018b0d/src/index.js

```
ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render
```


## License: desconhecido
https://github.com/leodeslf/leaf/blob/28f5140c1cbca4467c7df6cca378f40dfd45dc0c/prebuild/front/coding/react_redux_toolkit.md

```
ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render
```


## License: desconhecido
https://github.com/hari2120/redux-contact-book/blob/b0dcb7f46a01126275d09afd08cc917ba50e9995/src/index.js

```
ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render
```


## License: MIT
https://github.com/smronju/React-Redux-Example/blob/926d769178ce6b2bc4327c24ed1a097378712f9c/src/index.js

```
ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
```


## License: desconhecido
https://github.com/lastoftype/redux-drinks/blob/2b2ec68b6cb340d90770fcca57e91e6a37018b0d/src/index.js

```
ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
```


## License: desconhecido
https://github.com/leodeslf/leaf/blob/28f5140c1cbca4467c7df6cca378f40dfd45dc0c/prebuild/front/coding/react_redux_toolkit.md

```
ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
```


## License: desconhecido
https://github.com/hari2120/redux-contact-book/blob/b0dcb7f46a01126275d09afd08cc917ba50e9995/src/index.js

```
ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
```


## License: MIT
https://github.com/smronju/React-Redux-Example/blob/926d769178ce6b2bc4327c24ed1a097378712f9c/src/index.js

```
ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  
```


## License: desconhecido
https://github.com/lastoftype/redux-drinks/blob/2b2ec68b6cb340d90770fcca57e91e6a37018b0d/src/index.js

```
ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  
```


## License: desconhecido
https://github.com/leodeslf/leaf/blob/28f5140c1cbca4467c7df6cca378f40dfd45dc0c/prebuild/front/coding/react_redux_toolkit.md

```
ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  
```


## License: desconhecido
https://github.com/hari2120/redux-contact-book/blob/b0dcb7f46a01126275d09afd08cc917ba50e9995/src/index.js

```
ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  
```


## License: MIT
https://github.com/smronju/React-Redux-Example/blob/926d769178ce6b2bc4327c24ed1a097378712f9c/src/index.js

```
ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
````
```


## License: desconhecido
https://github.com/lastoftype/redux-drinks/blob/2b2ec68b6cb340d90770fcca57e91e6a37018b0d/src/index.js

```
ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
````
```


## License: desconhecido
https://github.com/leodeslf/leaf/blob/28f5140c1cbca4467c7df6cca378f40dfd45dc0c/prebuild/front/coding/react_redux_toolkit.md

```
ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
````
```


## License: desconhecido
https://github.com/hari2120/redux-contact-book/blob/b0dcb7f46a01126275d09afd08cc917ba50e9995/src/index.js

```
ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
````
```


## License: desconhecido
https://github.com/abdullafahem/laravel-react-auth/blob/ee56e15be716e853b5f0f27038ff867de4791b55/react-breeze-auth/src/App.jsx

```
import
```


## License: desconhecido
https://github.com/abdullafahem/laravel-react-auth/blob/ee56e15be716e853b5f0f27038ff867de4791b55/react-breeze-auth/src/App.jsx

```
import Home from './pages/Home';
```


## License: desconhecido
https://github.com/abdullafahem/laravel-react-auth/blob/ee56e15be716e853b5f0f27038ff867de4791b55/react-breeze-auth/src/App.jsx

```
import Home from './pages/Home';
import Login from './pages/Login';
import
```


## License: desconhecido
https://github.com/abdullafahem/laravel-react-auth/blob/ee56e15be716e853b5f0f27038ff867de4791b55/react-breeze-auth/src/App.jsx

```
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import F
```


## License: desconhecido
https://github.com/abdullafahem/laravel-react-auth/blob/ee56e15be716e853b5f0f27038ff867de4791b55/react-breeze-auth/src/App.jsx

```
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
```


## License: desconhecido
https://github.com/abdullafahem/laravel-react-auth/blob/ee56e15be716e853b5f0f27038ff867de4791b55/react-breeze-auth/src/App.jsx

```
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPasswor
```


## License: desconhecido
https://github.com/abdullafahem/laravel-react-auth/blob/ee56e15be716e853b5f0f27038ff867de4791b55/react-breeze-auth/src/App.jsx

```
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
```


## License: MIT
https://github.com/ferenc-csaky/lms-app/blob/fca766af3b9a0191fe3b9455b603dd92a7f78e8b/imports/ui/App.jsx

```
>
```


## License: MIT
https://github.com/seanmcn/portally/blob/aa01cfbefe06c565a0d3f29ee05b1ebbe162c24f/frontend/src/app/Router.js

```
>
```


## License: MIT
https://github.com/ferenc-csaky/lms-app/blob/fca766af3b9a0191fe3b9455b603dd92a7f78e8b/imports/ui/App.jsx

```
>
            <Route exact path="/" component
```


## License: MIT
https://github.com/seanmcn/portally/blob/aa01cfbefe06c565a0d3f29ee05b1ebbe162c24f/frontend/src/app/Router.js

```
>
            <Route exact path="/" component
```


## License: MIT
https://github.com/ferenc-csaky/lms-app/blob/fca766af3b9a0191fe3b9455b603dd92a7f78e8b/imports/ui/App.jsx

```
>
            <Route exact path="/" component={Home} />
            <Route path="/login"
```


## License: MIT
https://github.com/seanmcn/portally/blob/aa01cfbefe06c565a0d3f29ee05b1ebbe162c24f/frontend/src/app/Router.js

```
>
            <Route exact path="/" component={Home} />
            <Route path="/login"
```


## License: MIT
https://github.com/ferenc-csaky/lms-app/blob/fca766af3b9a0191fe3b9455b603dd92a7f78e8b/imports/ui/App.jsx

```
>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register
```


## License: MIT
https://github.com/seanmcn/portally/blob/aa01cfbefe06c565a0d3f29ee05b1ebbe162c24f/frontend/src/app/Router.js

```
>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register
```


## License: MIT
https://github.com/ferenc-csaky/lms-app/blob/fca766af3b9a0191fe3b9455b603dd92a7f78e8b/imports/ui/App.jsx

```
>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/
```


## License: MIT
https://github.com/seanmcn/portally/blob/aa01cfbefe06c565a0d3f29ee05b1ebbe162c24f/frontend/src/app/Router.js

```
>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/
```


## License: MIT
https://github.com/ferenc-csaky/lms-app/blob/fca766af3b9a0191fe3b9455b603dd92a7f78e8b/imports/ui/App.jsx

```
>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/forgot-password" component={ForgotPassword} />
```


## License: MIT
https://github.com/seanmcn/portally/blob/aa01cfbefe06c565a0d3f29ee05b1ebbe162c24f/frontend/src/app/Router.js

```
>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/forgot-password" component={ForgotPassword} />
```


## License: MIT
https://github.com/ferenc-csaky/lms-app/blob/fca766af3b9a0191fe3b9455b603dd92a7f78e8b/imports/ui/App.jsx

```
>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/reset-password
```


## License: MIT
https://github.com/seanmcn/portally/blob/aa01cfbefe06c565a0d3f29ee05b1ebbe162c24f/frontend/src/app/Router.js

```
>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/reset-password
```


## License: desconhecido
https://github.com/kingluddite/web-dev-notes/blob/e66814ded23e6a4146a1e376b795816604a9a3f1/full-stack/udemy/traverse/357n-mern-front-back/frontend/section-07-redux-setup-alerts/37-creating-redux-store.md

```
ap
```


## License: desconhecido
https://github.com/kingluddite/web-dev-notes/blob/e66814ded23e6a4146a1e376b795816604a9a3f1/full-stack/udemy/traverse/357n-mern-front-back/frontend/section-07-redux-setup-alerts/37-creating-redux-store.md

```
applyMiddleware } from 'redux';
import {
```


## License: desconhecido
https://github.com/kingluddite/web-dev-notes/blob/e66814ded23e6a4146a1e376b795816604a9a3f1/full-stack/udemy/traverse/357n-mern-front-back/frontend/section-07-redux-setup-alerts/37-creating-redux-store.md

```
applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-dev
```


## License: desconhecido
https://github.com/kingluddite/web-dev-notes/blob/e66814ded23e6a4146a1e376b795816604a9a3f1/full-stack/udemy/traverse/357n-mern-front-back/frontend/section-07-redux-setup-alerts/37-creating-redux-store.md

```
applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux
```


## License: desconhecido
https://github.com/kingluddite/web-dev-notes/blob/e66814ded23e6a4146a1e376b795816604a9a3f1/full-stack/udemy/traverse/357n-mern-front-back/frontend/section-07-redux-setup-alerts/37-creating-redux-store.md

```
applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const
```


## License: desconhecido
https://github.com/kingluddite/web-dev-notes/blob/e66814ded23e6a4146a1e376b795816604a9a3f1/full-stack/udemy/traverse/357n-mern-front-back/frontend/section-07-redux-setup-alerts/37-creating-redux-store.md

```
applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk
```


## License: desconhecido
https://github.com/kingluddite/web-dev-notes/blob/e66814ded23e6a4146a1e376b795816604a9a3f1/full-stack/udemy/traverse/357n-mern-front-back/frontend/section-07-redux-setup-alerts/37-creating-redux-store.md

```
applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReduc
```


## License: desconhecido
https://github.com/kingluddite/web-dev-notes/blob/e66814ded23e6a4146a1e376b795816604a9a3f1/full-stack/udemy/traverse/357n-mern-front-back/frontend/section-07-redux-setup-alerts/37-creating-redux-store.md

```
applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWith
```


## License: desconhecido
https://github.com/kingluddite/web-dev-notes/blob/e66814ded23e6a4146a1e376b795816604a9a3f1/full-stack/udemy/traverse/357n-mern-front-back/frontend/section-07-redux-setup-alerts/37-creating-redux-store.md

```
applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
```


## License: desconhecido
https://github.com/kingluddite/web-dev-notes/blob/e66814ded23e6a4146a1e376b795816604a9a3f1/full-stack/udemy/traverse/357n-mern-front-back/frontend/section-07-redux-setup-alerts/37-creating-redux-store.md

```
applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
`
```

