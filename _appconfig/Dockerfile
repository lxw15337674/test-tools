FROM registry.qunhequnhe.com/infra/base-builder-v16:latest as builder
RUN mkdir /approot
COPY . /approot
RUN cd /approot && \
yarn && \
yarn build

FROM registry.qunhequnhe.com/infra/node16:latest
RUN mkdir /approot
WORKDIR /approot
COPY --from=builder /approot /approot
RUN ls /approot

CMD ["yarn", "start"]
