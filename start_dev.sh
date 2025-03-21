#!/bin/bash

echo "Iniciando ambiente de desenvolvimento..."

# Verificar o MongoDB
echo "Verificando status do MongoDB..."
if systemctl is-active --quiet mongod; then
  echo "MongoDB já está rodando."
else
  echo "Iniciando serviço MongoDB..."
  sudo systemctl start mongod
  echo "MongoDB iniciado."
fi

# Iniciar backend em segundo plano
echo "Iniciando servidor backend..."
cd backend && npm start &
BACKEND_PID=$!
echo "Servidor backend iniciado (PID: $BACKEND_PID)"

# Esperar 5 segundos para o backend inicializar
sleep 5

# Iniciar frontend com variável de ambiente OpenSSL
echo "Iniciando servidor frontend..."
cd ../frontend && NODE_OPTIONS=--openssl-legacy-provider npm start

# Se o frontend for encerrado, também encerrar o backend
kill $BACKEND_PID
