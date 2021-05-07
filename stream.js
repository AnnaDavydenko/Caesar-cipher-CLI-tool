const fs = require("fs");
const stream = require('stream');
const { encrypt, decrypt } = require('./utils/encrypt');

function readStream(input) {
    if (fs.existsSync(input)) {
        return fs.createReadStream(input, "utf8");
    } else if (input === undefined) {
        process.stdout.write('Enter a text...\n');
        return process.stdin;
    } else {
        process.stderr.write('You entered an invalid input file name.\n');
        return process.exit(1);
    }
}

function transformStream(shift, action) {
    return stream.Transform({
        transform(data, encoding, callback) {
            this.push(
                action.toString() === "encode"
                    ? encrypt(shift, data.toString())
                    : decrypt(shift, data.toString())
            );
            callback();
        }
    })
}

function writeStream(output) {
    if (fs.existsSync(output)) {
        return fs.createWriteStream(output, { flags: 'w+' });
    } else if (output === undefined) {
        return process.stdout;
    }
    else {
        process.stderr.write('You entered an invalid output file name.\n');
        return process.exit(1);
    }
}


module.exports = { readStream, transformStream, writeStream };
