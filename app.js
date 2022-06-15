const express = require('express');
const {main, client} = require('./client.wa')
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');
const cron = require('node-cron');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const indexRouter = require('./routes/index');
const waRouter = require('./routes/wa.route');

const salamSapa = require('./automation/salamSapa')
const eventMulai = require('./automation/eventMulai');

app.use('/', indexRouter);
app.use('/wa', waRouter);

// const browser = async () => {await puppeteer.launch({ignoreDefaultArgs: ['--disable-extensions']})}
// browser();

app.listen(5000, () => {
  console.log(`Example app listening on port 5500`);
});

cron.schedule("* * * * *", function async () {
  salamSapa(client);
  eventMulai(client);
  console.log("running a task every 10 second");
});

main();
