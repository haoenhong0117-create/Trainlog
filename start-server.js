const http = require("http");
const fs = require("fs");
const os = require("os");
const path = require("path");
const { exec } = require("child_process");

const root = __dirname;
const port = Number(process.env.PORT || 4173);

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".txt": "text/plain; charset=utf-8"
};

function localUrls() {
  const addresses = [];
  for (const interfaces of Object.values(os.networkInterfaces())) {
    for (const entry of interfaces || []) {
      if (entry.family === "IPv4" && !entry.internal) {
        addresses.push(`http://${entry.address}:${port}/`);
      }
    }
  }
  return addresses;
}

function send(response, status, body, type = "text/plain; charset=utf-8") {
  response.writeHead(status, { "Content-Type": type, "Cache-Control": "no-store" });
  response.end(body);
}

const server = http.createServer((request, response) => {
  const url = new URL(request.url, `http://localhost:${port}`);
  let filePath = path.normalize(path.join(root, decodeURIComponent(url.pathname)));

  if (!filePath.startsWith(root)) {
    send(response, 403, "Forbidden");
    return;
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, "index.html");
  }

  if (!fs.existsSync(filePath)) {
    send(response, 404, "Not found");
    return;
  }

  const ext = path.extname(filePath);
  response.writeHead(200, {
    "Content-Type": types[ext] || "application/octet-stream",
    "Cache-Control": "no-store"
  });
  fs.createReadStream(filePath).pipe(response);
});

server.on("error", (error) => {
  if (error.code === "EADDRINUSE") {
    console.error(`Port ${port} is already in use. Try closing the old TrainLog window or set another PORT.`);
  } else {
    console.error(error);
  }
  process.exit(1);
});

server.listen(port, "0.0.0.0", () => {
  const urls = localUrls();
  const local = `http://localhost:${port}/`;
  console.log("");
  console.log("TrainLog is running.");
  console.log("");
  console.log(`PC: ${local}`);
  if (urls.length) {
    console.log("");
    console.log("Phone on the same Wi-Fi:");
    urls.forEach((url) => console.log(`- ${url}`));
  }
  console.log("");
  console.log("Keep this window open while using TrainLog. Press Ctrl+C to stop.");
  console.log("");
  if (!process.env.NO_OPEN) {
    exec(`start "" "${local}"`);
  }
});
