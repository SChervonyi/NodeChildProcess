var fs = require('fs');
fs.readFile('./chesLog3.txt', 'utf8', (err, data) => {
    if (err) throw err;
    // console.log(data);
    peek(data);
});

function peek(buffer) {
    let start = 0;
    const printLength = 10000;
    do {
        process.stdout.write(buffer.substr(start, printLength));
        start += printLength;
    }
    while (start <= buffer.length)
    process.stdout.write('\n');
}
