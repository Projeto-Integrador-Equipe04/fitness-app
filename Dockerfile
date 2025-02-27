FROM node:22-alpine
WORKDIR /app
RUN yarn config set registry https://registry.npmmirror.com
COPY package.json yarn.lock ./
RUN yarn cache clean
RUN yarn install --frozen-lockfile --network-timeout 1000000
COPY . .
RUN yarn build
EXPOSE 3000
CMD ["yarn", "preview"]