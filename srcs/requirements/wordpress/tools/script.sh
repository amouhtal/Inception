#!/bin/bash

# Modify PHP FPM configuration
sed -i "s#listen = /run/php/php7.3-fpm.sock#listen = 0.0.0.0:9000#" /etc/php/7.3/fpm/pool.d/www.conf

# Wait for MariaDB to be available
while ! mariadb -h$DB_HOST -u$DB_USER -p$DB_PASSWORD &> /dev/null; do
    echo "Waiting for MariaDB to be available..."
    sleep 1
done

# Create index.html

# Configure WordPress database
wp config create --dbname=$DB_NAME --dbuser=$WP_ADMIN_USER --dbpass=$DB_PASSWORD --dbhost=$DB_HOST --allow-root

# Install WordPress
wp core install --url=$WP_DOMAIN_NAME --title=$WP_TITLE --admin_user=$WP_ADMIN_USER --admin_password=$WP_ADMIN_PASSWORD --admin_email=$WP_ADMIN_EMAIL --skip-email= --path='/var/www/html' --allow-root 
wp user create $WP_USER $WP_USER_EMAIL --role=author --user_pass=$WP_USER_PASSWORD --allow-root

# Start PHP-FPM
/usr/sbin/php-fpm7.3 -F -R