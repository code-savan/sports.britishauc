const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const fs = require('fs');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const { pathname } = parse(req.url, true);

    if (pathname === '/index.html' || pathname.startsWith('/_next')) {
      handle(req, res, parse(req.url, true));
      return;
    }

    const filePath = path.join(__dirname, 'public', 'index.html');
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    fs.createReadStream(filePath).pipe(res);
  }).listen(3000, () => {
    console.log('> Ready on http://localhost:3000');
  });
});
