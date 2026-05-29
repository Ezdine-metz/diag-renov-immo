const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const ECO_DIR = path.join(__dirname, 'eco');
const ROOT_DIR = __dirname;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.jsx':  'application/javascript; charset=utf-8',
  '.js':   'application/javascript; charset=utf-8',
  '.css':  'text/css; charset=utf-8',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg':  'image/svg+xml',
  '.ico':  'image/x-icon',
  '.md':   'text/plain; charset=utf-8',
  '.json': 'application/json',
};

http.createServer((req, res) => {
  const urlPath = req.url.split('?')[0];

  // Try eco/ first, then root (handles ../data.jsx becoming /data.jsx)
  const candidates = [
    path.join(ECO_DIR, urlPath === '/' ? 'index.html' : urlPath),
    path.join(ROOT_DIR, urlPath === '/' ? 'index.html' : urlPath),
  ];

  function tryNext(i) {
    if (i >= candidates.length) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      return res.end('404 Not Found: ' + urlPath);
    }
    const filePath = path.normalize(candidates[i]);
    // Security: must stay within ROOT_DIR
    if (!filePath.startsWith(ROOT_DIR)) {
      res.writeHead(403); return res.end('Forbidden');
    }
    fs.readFile(filePath, (err, data) => {
      if (err) return tryNext(i + 1);
      const ext = path.extname(filePath);
      res.writeHead(200, { 'Content-Type': MIME[ext] || 'text/plain' });
      res.end(data);
    });
  }

  tryNext(0);
}).listen(PORT, () => {
  console.log(`Diag Renov Immo running at http://localhost:${PORT}`);
});
