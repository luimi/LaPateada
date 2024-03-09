const { Client, MessageMedia, LocalAuth } = require('whatsapp-web.js');
const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: { headless: true },
});
client.on('qr', (qr) => {
  console.log(`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qr)}&size=800x800&margin=10&ecc=H`);
});
client.on('ready', () => {
  console.log('Client is ready!');
});
client.on('message', msg => {
    if (!msg.fromMe) {
        console.log("message", msg.body)
    }
    if (msg.body == '!ping') {
        msg.reply('pong');
    }
});

client.initialize();