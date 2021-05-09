# Caesar-cipher-CLI-tool
CLI tool that encode and decode a text by Caesar cipher

### How to install
- Download or clone this repository
- Go to the app folder (Caesar-cipher-CLI-tool)
- Use the command npm i or npm install to install the dependencies

### How to use
In the app folder write the command node index.js [options], where the options are:

-s, --shift: cipher shift (required, integer)<br>
-a, --action: action - encode/decode (required)<br>
-i, --input: input file (default: stdin)<br>
-o, --output: output file (default: stdout)<br>

#### Usage examples:
$ node caesar-cipher --action encode --shift 11 --input first-file.txt --output second-file.txt

$ node index.js --action encode --shift 5 --input input.txt --output output.txt"

$ node index.js --action decode --shift 5 --input output.txt --output input.txt"

$ node index.js -a encode -s 5 --input input.txt -o output.txt"

$ node index.js -a decode -s 5 --input output.txt -o input.txt"

$ node index.js --action encode --shift 5"

$ node index.js --action decode --shift 5"

$ node index.js -a encode -s 5"

$ node index.js -a decode -s 5"

$ node index.js --action encode --shift -1 --input input.txt --output output.txt
