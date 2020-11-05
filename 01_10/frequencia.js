const fs = require('fs');

try {
    const data = fs.readFileSync('iv_semana_si.txt', 'UTF-8');
    const lines = data.split(/\r?\n/);
    lines.forEach((line) => {
        //console.log(line);
    });
} catch (err) {
    console.error(err);
}

process.stdout.write("João")
process.stdout.write(" Paulo")