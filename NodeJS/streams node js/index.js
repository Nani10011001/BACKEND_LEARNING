import fs from 'fs';

const streamdata = fs.createReadStream("./Nani.txt", { encoding: 'utf-8' });
streamdata.on('data', chunk => {
    console.log(chunk);
});