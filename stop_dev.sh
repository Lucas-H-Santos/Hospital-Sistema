#!/bin/bash

echo "Parando ambiente de desenvolvimento..."

# Parar frontend (porta 3000)
echo "Parando servidor frontend (porta 3000)..."
FRONTEND_PID=$(lsof -ti tcp:3000 2>/dev/null)
if [ -n "$FRONTEND_PID" ]; then
  kill -SIGTERM $FRONTEND_PID 2>/dev/null
  sleep 1
  kill -SIGKILL $FRONTEND_PID 2>/dev/null
  echo "Frontend parado (PID: $FRONTEND_PID)."
else
  echo "Frontend não estava rodando."
fi

# Parar backend (porta 5000)
echo "Parando servidor backend (porta 5000)..."
BACKEND_PID=$(lsof -ti tcp:5000 2>/dev/null)
if [ -n "$BACKEND_PID" ]; then
  kill -SIGTERM $BACKEND_PID 2>/dev/null
  sleep 1
  kill -SIGKILL $BACKEND_PID 2>/dev/null
  echo "Backend parado (PID: $BACKEND_PID)."
else
  echo "Backend não estava rodando."
fi

# Parar MongoDB
echo "Parando serviço MongoDB..."
if systemctl is-active --quiet mongod; then
  sudo systemctl stop mongod
  echo "MongoDB parado."
else
  echo "MongoDB não estava rodando."
fi

echo "Ambiente de desenvolvimento encerrado com sucesso."
