var fs = require('fs');

// fs.appendFile('./chesLog.txt', ' \n This is my text. 2', function (err) {});


//taskLogger
function peek() {
    if (this.buffer) {
        // Flush buffer if nonempty
        logger.info(os.EOL + '------------------------------------' + os.EOL);

        for(let i = 1000; i < this.buffer.length; i += 1000){
            logger.info(this.buffer.substr(0, i))
        }
        // if (this.buffer.length > 50000) {
        //     if (this.buffer.length > 100000) {
        //         logger.info(this.buffer.substr(0, 50000));
        //         logger.info(this.buffer.substr(50000, 100000));
        //         logger.info(this.buffer.substr(100000, this.buffer.length));
        //     } else {
        //         logger.info(this.buffer.substr(0, 50000));
        //         logger.info(this.buffer.substr(50000, this.buffer.length));
        //     }
        // } else {
        //     logger.info(this.buffer);
        // }

        logger.info(os.EOL);

        fs.appendFileSync(
            './chesLog.txt',
            os.EOL + '------------------------------------' + os.EOL,
            function (err) { });
        fs.appendFileSync(
            './chesLog.txt',
            this.buffer,
            function (err) { });
        fs.appendFileSync(
            './chesLog.txt',
            os.EOL + 'CHES END',
            function (err) { });
    }
}


// Run afterlaunch and exit
const cleanUpAndExit = (exitCode) => __awaiter(this, void 0, void 0, function* () {
    try {
        yield sleep(3000);
        const returned = yield util_1.runFilenameOrFn_(config.configDir, config.afterLaunch, [exitCode]);
        if (typeof returned === 'number') {
            process.exit(returned);
        } else {
            process.exit(exitCode);
        }
    } catch (err) {
        logger.error('Error:', err);
        process.exit(1);
    }
});

function sleep(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}