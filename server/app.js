const express = require('express');
const PORT = process.env.PORT || 7777;

const router = require('./routes');

// middleware - before you even hit the routes it will run these first
express.json();
express.urlencoded({ extended: false });

const app = express();

// sets up routing
app.use('/', router);
//
// app.use()

app.listen(PORT, (req, res) => {
  console.log('fire on port🔥', PORT);
});



// depreciated - use express.json && iexpress.urlencoded() instead;
// const bodyParser = require('body-parser');
// app.use(bodyparser.json());
// app.use(bodyparser.urlencoded);