FROM mhart/alpine-node:latest

WORKDIR /src/app

COPY ./myweb/package.json /src/app/

RUN yarn \
&& mkdir /src/logs

COPY ./myweb/ /src/app/

EXPOSE 3000

ENTRYPOINT ["./entry.sh"]
