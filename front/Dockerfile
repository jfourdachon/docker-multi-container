# Dockerfile
FROM node:14.15.1-alpine

# create destination directory
ENV APP_ROOT /app

WORKDIR ${APP_ROOT}

RUN groupadd -r j-unix && useradd -r -s /bin/false -g j-unix j-unix

# update and install dependency

COPY ./package.json ./

RUN npm install

COPY . .

RUN chown -R j-unix:j-unix /app
USER j-unix
RUN npm run build

ENV HOST 0.0.0.0
