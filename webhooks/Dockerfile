FROM node:14.15.1-alpine
WORKDIR /app
RUN groupadd -r j-unix && useradd -r -s /bin/false -g j-unix j-unix
COPY ./package.json ./
RUN npm install
COPY . .
RUN chown -R j-unix:j-unix /app
USER j-unix

CMD ["npm", "run", "start"]