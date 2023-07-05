const fs = require('fs');
const newData = "Compatibility: UTF-8 is compatible with ASCII, which means that any ASCII text is also valid UTF-8 text. This allows UTF-8 to be seamlessly integrated into systems and applications that rely on ASCII."
fs.appendFileSync("assignment01/04/nodejs_architecture.txt",newData);