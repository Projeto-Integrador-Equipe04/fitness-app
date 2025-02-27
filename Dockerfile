# Usa a imagem oficial do Node.js 22 como base
FROM node:22-alpine

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Configura o Yarn para usar um registry alternativo (opcional)
RUN yarn config set registry https://registry.npmmirror.com

# Copia os arquivos de configuração do projeto
COPY package.json yarn.lock ./

# Limpa o cache do Yarn (opcional, mas recomendado)
RUN yarn cache clean

# Instala as dependências usando o Yarn
RUN yarn install --frozen-lockfile --network-timeout 1000000

# Copia o restante do código-fonte
COPY . .

# Compila a aplicação para produção
RUN yarn build

# Expõe a porta que a aplicação vai rodar
EXPOSE 3000
EXPOSE 4173

# Comando para rodar a aplicação
CMD ["yarn", "preview"]