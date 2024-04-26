#!/bin/bash

# Modify PHP FPM configuration
sed -i "s#listen = /run/php/php7.3-fpm.sock#listen = 0.0.0.0:9000#" /etc/php/7.3/fpm/pool.d/www.conf

# Wait for MariaDB to be available
while ! mariadb -hmariadb -uamouhtal -ppassword &> /dev/null; do
    echo "Waiting for MariaDB to be available..."
    sleep 1
done

# Create index.html

# Configure WordPress database
wp config create --dbname=wordpress --dbuser=amouhtal --dbpass=password --dbhost=mariadb --allow-root

# Install WordPress
wp core install --url=localhost --title=inception --admin_user=amouhtal --admin_password=password --admin_email=amouhtal@email.com --skip-email= --path='/var/www/html' --allow-root 
RUN wp user create amouhtal_user amouhtal_user@email.com --role=author --user_pass=amouhtal_user_password --allow-root

# Start PHP-FPM
/usr/sbin/php-fpm7.3 -F -R