# Dockerfile
FROM node:14.15.1-alpine

# create destination directory
ENV APP_ROOT /app

WORKDIR ${APP_ROOT}

# update and install dependency

COPY ./package.json ./

RUN npm install

COPY . .

RUN npm run build

ENV HOST 0.0.0.0
