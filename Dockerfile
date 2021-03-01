FROM mhart/alpine-node:8
LABEL description="https://www.qekang.com/：by366/by366-web-manage"
MAINTAINER https://blog.csdn.net/qierkang
WORKDIR /
RUN npm install -g serve
ADD dist /dist
ENTRYPOINT exec serve -l 8081 dist
EXPOSE 8081
