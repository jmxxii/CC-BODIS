FROM node:14-alpine

RUN apk add bash make g++ git openssh-client chromium

WORKDIR /workspace

COPY etc/docker/node/init /init
RUN chmod -R +x /init

CMD ["/init/start.sh"]
