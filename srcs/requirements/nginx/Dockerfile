FROM debian:buster
RUN apt-get update && apt-get upgrade -y

RUN apt install -y openssl \
    nginx

RUN mkdir -p /etc/nginx/ssl
RUN chmod 700 /etc/nginx/ssl
RUN openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/nginx/ssl/nginx.key -out /etc/nginx/ssl/nginx.crt -subj "/C=FR/ST=Paris/L=Paris/O=42/OU=42/CN=localhost"
COPY ./conf/nginx.conf /etc/nginx/conf.d/default.conf
RUN echo "<html><body><marquee><h1>Hello World</h1></marquee></body></html>" > /var/www/html/index.html
# RUN mkdir -p /run/nginx
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]