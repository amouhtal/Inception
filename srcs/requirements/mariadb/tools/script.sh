#!bin/bash


# mysqld_safe is a script that is used to start the MySQL or MariaDB server in a safe mode.
#  It provides additional security and stability features to ensure that the server runs smoothly and can recover from crashes. 
#  mysqld_safe can automatically restart the MySQL or MariaDB server if it crashes or terminates unexpectedly
# This starts the MariaDB server in the background. 
# The & symbol is crucial for running mysqld_safe in the background, allowing the script to proceed with database setup tasks without waiting for the server to terminate. This means the script does not wait for mysqld_safe to complete (which it won't, as it's a server meant to run indefinitely) and immediately proceeds to the next command.
# This ensures that the MariaDB server is running and ready to accept configuration commands.
mysqld_safe & 

# Ensures MariaDB has enough time to start up properly
sleep 5

echo "==> Setting up MariaDB database <=="

# 
mariadb << EOF

CREATE DATABASE $DB_NAME; 
CREATE USER '$DB_USER'@'%' IDENTIFIED BY '$DB_PASSWORD'; 
GRANT ALL PRIVILEGES ON $DB_NAME.* TO '$DB_USER'@'%'; 
FLUSH PRIVILEGES;

EOF

mysql -e "ALTER USER 'root'@'localhost' IDENTIFIED BY '$DB_ROOT_PASSWORD';"
# mariadb -u root -p"$DB_ROOT_PASSWORD" -e "ALTER USER '$DB_ROOT'@'localhost' IDENTIFIED BY '$DB_ROOT_PASSWORD';"

#  Shutdown: Ensures all changes are saved and the server is in a clean state before the final startup.
mysqladmin -u $DB_ROOT -p$DB_ROOT_PASSWORD shutdown

echo "==> MariaDB database setup complete <=="

mysqld_safe

# Purpose: Restarts MariaDB in safe mode, running it in the foreground.
# Why Foreground: Running in the foreground keeps the main process active, which is necessary for the Docker container to remain running. If the main process (i.e., mysqld_safe) terminates, the container will exit.