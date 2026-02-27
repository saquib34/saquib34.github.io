/**
 * Pre-render script for CRA.
 * 
 * 1. Serves the built files on a local port
 * 2. Opens a headless browser
 * 3. Captures the fully-rendered HTML
 * 4. Writes it back to build/index.html
 * 
 * This gives search engines fully pre-rendered content.
 */
const puppeteer = require('puppeteer');
const http = require('http');
const fs = require('fs');
const path = require('path');

const BUILD_DIR = path.join(__dirname, '..', 'build');
const PORT = 45678;

const MIME_TYPES = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.ico': 'image/x-icon',
    '.svg': 'image/svg+xml',
    '.pdf': 'application/pdf',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
};

async function prerender() {
    // 1. Start a simple static file server
    const server = http.createServer((req, res) => {
        let filePath = path.join(BUILD_DIR, req.url === '/' ? 'index.html' : req.url);
        const ext = path.extname(filePath);
        const contentType = MIME_TYPES[ext] || 'application/octet-stream';

        fs.readFile(filePath, (err, content) => {
            if (err) {
                // Try index.html for SPA routes
                fs.readFile(path.join(BUILD_DIR, 'index.html'), (err2, fallback) => {
                    if (err2) {
                        res.writeHead(404);
                        res.end('Not found');
                    } else {
                        res.writeHead(200, { 'Content-Type': 'text/html' });
                        res.end(fallback);
                    }
                });
            } else {
                res.writeHead(200, { 'Content-Type': contentType });
                res.end(content);
            }
        });
    });

    server.listen(PORT);
    console.log(`[prerender] Serving build on http://localhost:${PORT}`);

    // 2. Launch headless browser
    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const page = await browser.newPage();
    await page.goto(`http://localhost:${PORT}`, { waitUntil: 'networkidle0', timeout: 30000 });

    // 3. Wait for React to finish rendering
    await new Promise(r => setTimeout(r, 2000));

    // 4. Capture rendered HTML
    const html = await page.content();

    // 5. Write back to build/index.html
    fs.writeFileSync(path.join(BUILD_DIR, 'index.html'), html);
    console.log(`[prerender] ✅ Pre-rendered HTML written to build/index.html (${html.length} bytes)`);

    await browser.close();
    server.close();
}

prerender().catch((err) => {
    console.error('[prerender] ❌ Failed:', err.message);
    process.exit(1);
});
