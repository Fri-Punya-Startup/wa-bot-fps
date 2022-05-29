const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');

const client = new Client({
//          session: session,
          //qrTimeoutMs: 120000,
          //authTimeoutMs: 120000,
          //restartOnAuthFail: true,
          //takeoverOnConflict: true
          //takeoverTimeoutMs: 5000
  puppeteer: {headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-extensions']}
});


const asu = async () => {
        await client.on('qr', qr => {
                qrcode.generate(qr, {small: true});
        });

        client.on('ready', () => {
                console.log('Client is ready!');
        });

        client.initialize();
}

asu();

module.exports = {client, qrcode};


