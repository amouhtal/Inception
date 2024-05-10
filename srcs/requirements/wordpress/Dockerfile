FROM debian:buster

RUN apt update && apt upgrade -y && apt install -y \
    mariadb-client \
    curl \
    unzip \
    php7.3 \
    php7.3-fpm \
    php7.3-mysql \
    php7.3-mbstring \
    php7.3-xml \
    php7.3-curl \
    php7.3-gd \
    php7.3-zip \
    php-mysql \
    php-curl \
    curl

RUN curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
RUN chmod +x wp-cli.phar
RUN mv wp-cli.phar /usr/local/bin/wp


RUN mkdir -p /run/php/


WORKDIR /var/www/html/
RUN chmod 755 /var/www/html && chown -R www-data:www-data /var/www/html
# wp core Downloads, installs, updates, and manages a WordPress installation.
RUN wp core download --allow-root
# RUN service mysql start
# RUN sleep 5
COPY ./tools/script.sh /tmp

RUN chmod +x /tmp/script.sh
CMD ["/tmp/script.sh"]

#service php7.3-fpm start && service mysql start && nginx -g 'daemon off;'
# CMD [ "service", "php7.3-fpm", "start", "&&", "service", "mysql", "start"]