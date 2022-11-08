FROM registry.qunhequnhe.com/infra/node16:latest
COPY . /approot
RUN cd /approot && \
yarn && \
yarn build
EXPOSE 3000

CMD ["yarn", "start"]