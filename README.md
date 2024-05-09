# INCEPTION 
<pre> This project consists in having you set up an infrastructure composed of different
services under specific rules. The whole project has to be done in a virtual machine. You
have to use docker compose.<br/><br/></pre>
<pre> Each Docker image must have the same name as its corresponding service.
Each service has to run in a dedicated container.<br />
For performance matters, the containers must be built either from the penultimate stable
version of Alpine or Debian. The choice is yours.<br />
You also have to write your own Dockerfiles, one per service. The Dockerfiles must
be called in your docker-compose.yml by your Makefile.<br />
It means you have to build yourself the Docker images of your project. It is then for-
bidden to pull ready-made Docker images, as well as using services such as DockerHub
(Alpine/Debian being excluded from this rule).<br /><br /></pre>
<pre>You then have to set up:<br />
• A Docker container that contains NGINX with TLSv1.2 or TLSv1.3 only.<br />
• A Docker container that contains WordPress + php-fpm (it must be installed and
configured) only without nginx.<br />
• A Docker container that contains MariaDB only without nginx.<br />
• A volume that contains your WordPress database.<br />
• A second volume that contains your WordPress website files.<br />
• A docker-network that establishes the connection between your containers.<br />
Your containers have to restart in case of a crash.<br /></pre>
![alt text](https://github.com/amouhtal/Inception/blob/main/iception_diagram.png?raw=true)
