import fs from "fs";
for(let i=0;i<1000;i++){
fs.writeFileSync('./Nani.txt',`NO:${i}\n`, {flag:'a'})
}
