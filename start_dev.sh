#!/bin/bash

echo "Iniciando ambiente de desenvolvimento..."

# Instalar e/ou iniciar o MongoDB
echo "Verificando instalação do MongoDB..."
if ! command -v mongod &> /dev/null; then
  echo "MongoDB não encontrado. Instalando MongoDB 8.0 para Ubuntu 24.04..."
  curl -fsSL https://www.mongodb.org/static/pgp/server-8.0.asc | sudo gpg -o /usr/share/keyrings/mongodb-server-8.0.gpg --dearmor
  echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-8.0.gpg ] https://repo.mongodb.org/apt/ubuntu noble/mongodb-org/8.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-8.0.list
  sudo apt-get update
  sudo apt-get install -y mongodb-org
  echo "MongoDB instalado com sucesso."
fi

echo "Verificando status do MongoDB..."
if systemctl is-active --quiet mongod; then
  echo "MongoDB já está rodando."
else
  echo "Iniciando serviço MongoDB..."
  sudo systemctl start mongod
  sudo systemctl enable mongod
  echo "MongoDB iniciado."
fi

# Liberar porta 5000 se já estiver em uso
PORT5000_PID=$(lsof -ti tcp:5000 2>/dev/null)
if [ -n "$PORT5000_PID" ]; then
  echo "Porta 5000 já em uso (PID: $PORT5000_PID). Encerrando processo anterior..."
  kill -SIGTERM $PORT5000_PID 2>/dev/null
  sleep 1
  kill -SIGKILL $PORT5000_PID 2>/dev/null
fi

# Iniciar backend em segundo plano
echo "Iniciando servidor backend..."
(cd backend && npm start) &
BACKEND_PID=$!
echo "Servidor backend iniciado (PID: $BACKEND_PID)"

# Esperar 5 segundos para o backend inicializar
sleep 5

# Iniciar frontend com variável de ambiente OpenSSL
echo "Iniciando servidor frontend..."
cd frontend && NODE_OPTIONS=--openssl-legacy-provider npm start

# Se o frontend for encerrado, também encerrar o backend
kill $BACKEND_PID
