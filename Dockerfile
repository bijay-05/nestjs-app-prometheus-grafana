FROM node:22.11-alpine

WORKDIR /app

COPY tsconfig.*json ./
COPY package.json ./

RUN npm i -g pnpm && pnpm install

COPY src ./src

EXPOSE 3001

CMD [ "pnpm", "start:dev" ]