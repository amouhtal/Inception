#!bin/bash

mysqld_safe &

sleep 5

echo "==> Setting up MariaDB database <=="

mariadb << EOF

CREATE DATABASE wordpress; 
CREATE USER 'amouhtal'@'%' IDENTIFIED BY 'password'; 
GRANT ALL PRIVILEGES ON wordpress.* TO 'amouhtal'@'%'; 
FLUSH PRIVILEGES;

EOF

# mariadb -e "ALTER USER 'root'@'localhost' IDENTIFIED BY 'password';"

mysqladmin -u root -p shutdown

echo "==> MariaDB database setup complete <=="

mysqld_safe