FROM debian:buster

# Install MariaDB

RUN apt-get update && apt upgrade -y  && apt-get install -y \
    mariadb-server \
    mariadb-client

RUN sed -i 's/bind-address/#bind-address/' /etc/mysql/mariadb.conf.d/50-server.cnf

# Copy the configuration file
COPY ./tools/script.sql .
RUN chmod +x script.sql

RUN service mysql start && mysql -u root < script.sql
EXPOSE 3306
CMD ["mysqld_safe"]
