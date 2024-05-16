FROM debian:buster

RUN apt update && apt upgrade -y
RUN sleep 200
RUN apt install redis-server wget -y
RUN echo "maxmemory 256mb" >> /etc/redis/redis.conf
RUN echo "maxmemory-policy allkeys-lru" >> /etc/redis/redis.conf
RUN sed -i 's/bind 127.0.0.1 ::1/# bind 127.0.0.1 ::1/' /etc/redis/redis.conf
RUN wget https://assets.digitalocean.com/articles/wordpress_redis/object-cache.php
EXPOSE 6379
CMD ["redis-server", "--protected-mode no"]