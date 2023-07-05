const fs = require('fs')

const data = "Node.js is an open-source JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run JavaScript code on the server-side, enabling you to build scalable and high-performance web applications. The architecture of Node.js is designed to be efficient, non-blocking, and event-driven."
fs.writeFileSync("nodejs_architecture.txt",data);