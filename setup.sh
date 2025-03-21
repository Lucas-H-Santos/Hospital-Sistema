#!/bin/bash

echo "Iniciando setup do projeto Hospital..."

# Instalar dependências do backend
cd backend
echo "Instalando dependências do backend..."
npm install
echo "Dependências do backend instaladas com sucesso!"

# Instalar dependências do frontend
cd ../frontend
echo "Instalando dependências do frontend..."
npm install
echo "Dependências do frontend instaladas com sucesso!"

# Voltar à raiz do projeto
cd ..

echo "Setup concluído com sucesso!"
echo "Para iniciar o backend: cd backend && npm start"
echo "Para iniciar o frontend: cd frontend && npm start"
