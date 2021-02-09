FROM nginx

RUN mkdir -pv /etc/nginx/ssl
RUN touch /etc/nginx/ssl/certif.com_ssl_certificate.cer
RUN touch /etc/nginx/ssl/_.certif.com_private_key.key

COPY /etc/nginx/ssl/_.certif.com_private_key.key /etc/nginx/ssl/_.certif.com_private_key.key
COPY /etc/nginx/ssl/certif.com_ssl_certificate.cer /etc/nginx/ssl/certif.com_ssl_certificate.cer

COPY ./default.conf /etc/nginx/conf.d/default.conf