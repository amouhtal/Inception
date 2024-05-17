FROM debian:buster

# Install tini, PHP, wget, and other dependencies
RUN apt-get update && apt-get upgrade -y && \
    apt-get install -y php wget php-mysql tini

# Create and set the working directory
RUN mkdir /adminer
WORKDIR /adminer

# Download Adminer
RUN wget "http://www.adminer.org/latest.php" -O index.php

# Set appropriate permissions
RUN chown -R www-data:www-data index.php && \
    chmod 755 index.php

# Use tini as the init system
ENTRYPOINT ["/usr/bin/tini", "--"]

# Command to run the PHP built-in server
CMD ["php", "-S", "0.0.0.0:8000"]