const express = require('express');
const {client,qrcode} =  require('./client.wa')

const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const indexRouter = require('./routes/index');
const waRouter = require('./routes/wa.route');

app.use('/', indexRouter);
app.use('/wa', waRouter);


app.listen(5000, () => {
  console.log(`Example app listening on port 5000!`);
});