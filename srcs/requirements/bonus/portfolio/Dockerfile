FROM debian:buster

WORKDIR /portfolio
# # update package list
# RUN apt-get update && apt-get upgrade -y
# RUN apt-get install nodejs -y
# RUN apt-get install npm -y
# COPY ./tools/portfolio/package.json .
# RUN npm install
# COPY ./tools/portfolio .
# EXPOSE 4200
# CMD [ "node" , "index.js" ]



RUN apt-get update && apt-get upgrade -y 
RUN apt-get install curl -y
RUN touch ~/.bashrc && chmod +x ~/.bashrc
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && apt-get install -y nodejs
# RUN . ~/.nvm/nvm.sh && source ~/.bashrc && nvm install 18 
COPY ./portfolio .
# RUN . ~/.nvm/nvm.sh && nvm use 18 &&  npm install -g @angular/cli && npm install 
# RUN apt-get install npm -y
# RUN npm install -g @angular/cli@16.0.0
# RUN npm install
RUN npm install angular-http-server -g
# RUN npm install
EXPOSE 4200
# CMD ["ng", "serve", "--host", "0.0.0.0"]
CMD [ "angular-http-server", "--path", "dist/portfolio", "-p", "4200"]