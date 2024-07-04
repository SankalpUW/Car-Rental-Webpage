FROM node:20 AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/api

COPY package.json .
COPY package-lock.json .

RUN npm install -g @nestjs/cli
RUN npm install --only=production

RUN apt-get -q update && apt-get -qy install netcat

COPY . .

RUN npm run build

CMD ["sh", "-c", "npm run typeorm migration:run && npm run start:prod"]
