#!bin/bash

mysqld_safe &

sleep 5

echo "==> Setting up MariaDB database <=="

mariadb << EOF

CREATE DATABASE $DB_NAME; 
CREATE USER '$DB_USER'@'%' IDENTIFIED BY '$DB_PASSWORD'; 
GRANT ALL PRIVILEGES ON $DB_NAME.* TO '$DB_USER'@'%'; 
FLUSH PRIVILEGES;

EOF

mariadb -e "ALTER USER '$DB_ROOT'@'localhost' IDENTIFIED BY '$DB_ROOT_PASSWORD';"

mysqladmin -u $DB_ROOT -p $DB_ROOT_PASSWORD shutdown

echo "==> MariaDB database setup complete <=="

mysqld_safe