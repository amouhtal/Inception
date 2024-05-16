FROM debian:buster

RUN apt-get update && apt-get upgrade -y
RUN apt-get install -y php  wget php-mysql
RUN mkdir adminer
WORKDIR /adminer
RUN wget "http://www.adminer.org/latest.php" -O index.php

RUN chown -R www-data:www-data index.php
RUN chmod 755 index.php

CMD ["php", "-S", "0.0.0.0:8000"]