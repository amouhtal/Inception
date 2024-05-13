FROM debian:buster 

RUN apt update && apt install -y \
    mariadb-server \
    mariadb-client 

RUN sed -i 's/bind-address/#bind-address/' /etc/mysql/mariadb.conf.d/50-server.cnf



COPY ./conf/script.sh /tmp/

RUN chmod +x /tmp/script.sh

EXPOSE 3306

CMD ["/tmp/script.sh"]