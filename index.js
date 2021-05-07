const { pipeline } = require('stream');
const { readStream, transformStream, writeStream } = require('./stream');
const { options } = require('./utils/options');
const { validateInput } = require('./utils/validation');

validateInput();

const { shift, action, input, output } = options;
const readableStream = readStream(input);
const transformationStream = transformStream(shift, action);
const writeableStream = writeStream(output);

pipeline(
    readableStream,
    transformationStream,
    writeableStream,
    (err) => {
        if (err) {
            console.error('Failed.', err);
        } else {
            console.log('Succeeded.');
        }
    }
);
