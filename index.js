const express = require('express');
const QRCode = require('qrcode-svg');
const cors = require('cors')

const app = express();

app.use(cors());


app.get('/api/qrcode/:value', (req, res) => {
    const { value } = req.params;
    const qr = new QRCode({
        content: value,
        // padding: 0,
        // width: 256,
        // height: 256,
        // color: '#000000',
        // background: '#000000',
        // ecl: 'M',
        join: true,
        // pretty: false
    });
    res.setHeader('Content-Type', 'image/svg+xml');
    res.send(qr.svg())
});

app.listen(4000, () => {
    console.log('Server listening on port 4000');
});
