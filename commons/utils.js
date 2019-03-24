const fs = require('fs');


const writeAppendFileAnsyncPromise = (file, ...data) => {
    return new Promise((resolve, reject) => {
        data.reduce((data_write) => {
            fs.appendFile(file, data_write, (err) => {
                if (err) reject(err);
                resolve('The data appended file:'+file);
            });
        });
        fs.appendFile(file, '\r\n');
    });
};
const writeAppendFileRestNormal = (file, ...data) => {
    let count = data.length;
    for(let i = 0; i < count; i++) {
        let data_write = data[i] + ' ';
        fs.appendFileSync(file, data_write, (err) => {
            if (err) throw err;
            console.log('The data appended file:'+file);
        });
    }
    fs.appendFileSync(file, '\r\n');
    console.log("Data appened...");
};


module.exports.writeAppendFileAnsyncPromise = writeAppendFileAnsyncPromise;
module.exports.writeAppendFileRestNormal = writeAppendFileRestNormal;