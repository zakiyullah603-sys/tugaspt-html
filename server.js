const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;

/* MIME TYPES */
const mimeTypes = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "application/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon"
};

/* CREATE SERVER */
const server = http.createServer((req, res) => {

  let filePath = "." + req.url;

  // Default ke index.html
  if (filePath === "./") {
    filePath = "./index.html";
  }

  const extname = path.extname(filePath);
  const contentType = mimeTypes[extname] || "text/plain";

  fs.readFile(filePath, (err, content) => {

    if (err) {

      // Jika file tidak ditemukan
      if (err.code === "ENOENT") {

        res.writeHead(404, {
          "Content-Type": "text/html"
        });

        res.end(`
          <h1>404 - File Tidak Ditemukan</h1>
        `);

      } else {

        // Error server
        res.writeHead(500);

        res.end(`
          Server Error: ${err.code}
        `);

      }

    } else {

      // Success
      res.writeHead(200, {
        "Content-Type": contentType
      });

      res.end(content, "utf-8");

    }

  });

});

/* START SERVER */
server.listen(PORT, () => {

  console.log(`
======================================
      RASA KOPI SERVER BERJALAN
======================================

http://localhost:${PORT}

======================================
  `);

});
