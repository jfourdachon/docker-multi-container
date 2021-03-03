FROM nginx:1.19.6-alpine
RUN groupadd -r j-unix && useradd -r -s /bin/false -g j-unix j-unix

RUN chown -R j-unix:j-unix /app
USER j-unix

COPY ./default.conf /etc/nginx/conf.d/default.conf