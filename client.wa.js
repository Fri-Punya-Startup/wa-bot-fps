
const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');

const client = new Client({
  puppeteer: {headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-extensions']}
});

const pass = '888'

const main = async () => {

await client.on('qr', qr => {
        qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
        console.log('Client is ready!');
});

client.on('message', msg => {
        const args = msg.body.split(' ');
        const command = args[0];

        switch(command) {
                case '/grupid':
                const updateGrupId = require('./function/updateGrupId');
                updateGrupId(args,msg,pass);

                case '/webinar':
                const webinar = require('./automation/webinar');
                webinar(client,msg);

                case '/tes':
                        console.log(msg.body);                
        }
});

client.initialize();

}

module.exports = {client, qrcode, main};


