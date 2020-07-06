FROM mhart/alpine-node:12

ADD package*.json /
RUN npm ci --production
ADD SlackPrListNotification.js /
RUN chmod +x /SlackPrListNotification.js

ENTRYPOINT ["node", "/SlackPrListNotification.js"]
