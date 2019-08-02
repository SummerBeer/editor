const express = require('express');
const route = require('./server/router/index.js');
const logger = require('./server/utils/logger.js');
const config = require('./config.js');
const app = new express();

app.use('/', route);

app.use(express.static(config.staticPath));

app.set('view engine', 'ejs');
app.set('views', config.viewsPath)

app.listen(config.port, () => {
  logger.info(`server is running on port: ${config.port}`);
});

