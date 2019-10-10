FROM ubuntu:latest
LABEL maintainer="nomi.cs786@gmail.com"
RUN apt-get update && apt-get upgrade -y
RUN apt-get install nginx -y
RUN apt-get install curl -y
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN apt-get install nodejs -y
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
COPY ./index.html /var/www/html