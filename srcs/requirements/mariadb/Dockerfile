FROM debian:buster

# Install MariaDB

RUN apt-get update && apt upgrade -y  && apt-get install -y \
    mariadb-server \
    mariadb-client

RUN sed -i 's/bind-address/#bind-address/' /etc/mysql/mariadb.conf.d/50-server.cnf
RUN service mysql start  && \
    mysql -u root -e "CREATE DATABASE wordpress;" && \
    mysql -u root -e "CREATE USER 'amouhtal'@'%' IDENTIFIED BY 'password';" && \
    mysql -u root -e "GRANT ALL PRIVILEGES ON wordpress.* TO 'amouhtal'@'%';" \
    mysql -u root -e "FLUSH PRIVILEGES;"

EXPOSE 3306

CMD ["mysqld_safe"]