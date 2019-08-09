const fs = require('fs');
const archivo = fs.createWriteStream('archivo.txt');

for(let i=0; i<= 1e6; i++) {
  archivo.write('Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.\n');
}

archivo.end();