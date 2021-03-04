FROM node:14.15.1-alpine
WORKDIR /app

COPY ./package.json ./
RUN npm install
COPY . .

USER j-unix
CMD ["npm", "run", "start"]