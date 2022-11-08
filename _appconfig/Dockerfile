FROM registry.qunhequnhe.com/infra/base-builder-v16:latest as builder
RUN mkdir /approot
COPY . /approot
RUN cd /approot && \
yarn && \
yarn build
EXPOSE 3000

CMD ["yarn", "start"]
