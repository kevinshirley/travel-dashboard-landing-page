require('dotenv').config();
const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
  
    // Body parser middleware
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: true }));

    // Routes
    const health = require('./routes/health');

    server.use('/api', health);

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(PORT, err => {
      if (err) throw err;
      console.log(`> Ready on port: ${PORT}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
