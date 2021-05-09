const { options } = require('./options');

function validateInput() {
    [
        { key: "shift", errorMessage: 'You did not specify a shift.\n' },
        { key: "action", errorMessage: 'You did not specify an action encode/decode.\n' },
    ].forEach(option => {
        if (options[option.key] === undefined) {
            process.stderr.write(option.errorMessage);
            process.exit(1);
        }
    });
}

module.exports = { validateInput };
