# The command FROM debian:buster instructs Docker to use the Debian Buster image. This means that the resulting Docker image will inherit the filesystem, environment, and configuration from the Debian Buster base image.  
FROM debian:buster 
# update the package lists and upgrade them to get latest security updates, bug fixes, and performance improvements.
RUN apt-get update && apt-get upgrade -y
# install openssl and nginx
RUN apt install -y openssl \
    nginx

# create a directory /etc/nginx/ssl and set the permissions to 700
RUN mkdir -p /etc/nginx/ssl
RUN chmod 700 /etc/nginx/ssl
# generate a self-signed SSL certificate and key using the openssl command
RUN openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/nginx/ssl/nginx.key -out /etc/nginx/ssl/nginx.crt -subj "/C=FR/ST=Paris/L=Paris/O=42/OU=42/CN=localhost"
# copy the nginx configuration file to the /etc/nginx/conf.d/default.conf directory
COPY ./conf/nginx.conf /etc/nginx/conf.d/default.conf

RUN echo "<html><body><marquee><h1>Hello World</h1></marquee></body></html>" > /var/www/html/index.html
EXPOSE 443
# run the nginx service in the foreground 
CMD ["nginx", "-g", "daemon off;"]