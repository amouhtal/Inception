all:
	if [ ! -d $${HOME}/data/wordpress ]; then mkdir -p $${HOME}/data/wordpress; fi
	if [ ! -d $${HOME}/data/mariadb ]; then mkdir -p $${HOME}/data/mariadb; fi	
	docker-compose -f ./srcs/docker-compose.yml build --no-cache
	docker-compose -f ./srcs/docker-compose.yml up -d

clean:
	docker-compose -f ./srcs/docker-compose.yml down --rmi all

fclean:
	rm -rf $${HOME}/data
	docker-compose -f ./srcs/docker-compose.yml down --rmi all
	docker volume rm $$(docker volume ls -q)

re : clean all