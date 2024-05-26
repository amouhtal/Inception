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

# This directory is commonly used by PHP-FPM to store its socket file
RUN mkdir -p /run/php/

WORKDIR /var/www/html/
#  755 means that the owner of the directory has read, write, and execute permissions, while others have only read and execute permissions.
#  This allows the owner (typically the www-data user) to have full control over the directory, while other users can read and execute files within it.
# chown -R www-data:www-data /var/www/html: This command changes the ownership of the /var/www/html/ directory and all its contents recursively (-R) to the www-data user and group.
# By executing the command "RUN chmod 755 /var/www/html && chown -R www-data:www-data /var/www/html", we indeed assign ownership to the www-data user and group for /var/www/html, and we also set the permissions to allow the www-data user to read, write, and execute files within the directory, while any other users belonging to the www-data group have permissions to read and execute files within the directory.
RUN chmod 755 /var/www/html && chown -R www-data:www-data /var/www/html
RUN wp core download --allow-root
COPY ./tools/script.sh /tmp/
RUN chmod +x /tmp/script.sh
CMD ["bash", "/tmp/script.sh"]


