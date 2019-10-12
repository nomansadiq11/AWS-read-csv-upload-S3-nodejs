FROM ubuntu:latest

RUN apt-get update && apt-get upgrade -y

RUN apt-get install nginx -y

RUN apt-get install curl -y

RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -

RUN apt-get install nodejs -y

RUN apt-get install -y vim-tiny

EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]

COPY ./Web/ /web/

COPY /default /etc/nginx/sites-enabled/
COPY /start.sh /start/start.sh

# WORKDIR /Start/

RUN chmod +x /start/start.sh

WORKDIR /web/

# ENTRYPOINT ["/Start/start.sh"]

CMD ["/bin/bash", "-c", "/etc/init.d/nginx start & npm run start" ]