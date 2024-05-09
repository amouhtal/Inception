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
> Of course, using network: host or --link or links: is forbidden.
The network line must be present in your docker-compose.yml file.
Your containers musn’t be started with a command running an infinite
loop. Thus, this also applies to any command used as entrypoint, or
used in entrypoint scripts. The following are a few prohibited hacky
patches: tail -f, bash, sleep infinity, while true.</br>
>
```diff
> A Docker container is not a virtual machine. Thus, it is not recommended to use any hacky patch based on ’tail -f’ and so forth when trying to run it. Read about how daemons work and whether it’s a good idea to use them or not.</br>
```
> In your WordPress database, there must be two users, one of them being the ad-
ministrator. The administrator’s username can’t contain admin/Admin or admin-
istrator/Administrator (e.g., admin, administrator, Administrator, admin-123, and
so forth).
> Your volumes will be available in the /home/login/data folder of the
host machine using Docker. Of course, you have to replace the login
with yours.
> To make things simpler, you have to configure your domain name so it points to your
local IP address.
This domain name must be login.42.fr. Again, you have to use your own login.
For example, if your login is wil, wil.42.fr will redirect to the IP address pointing to
wil’s website.<br>

```diff
- No password must be present in your Dockerfiles.
- It is mandatory to use environment variables.
- Also, it is strongly recommended to use a .env file to store
- environment variables. The .env file should be located at the root
- of the srcs directory.
- Your NGINX container must be the only entrypoint into your
- infrastructure via the port 443 only, using the TLSv1.2 or TLSv1.3
- protocol.
```

![alt text](https://github.com/amouhtal/Inception/blob/main/iception_diagram.png?raw=true)
