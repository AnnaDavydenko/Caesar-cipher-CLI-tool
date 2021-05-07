// const encrypt = (key, str, action) => {
//     const upperCaseStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     const lowerCaseStr = upperCaseStr.toLowerCase();
//     const oldLetterOrder = `${upperCaseStr}${lowerCaseStr}`;
//     const indexFirstEl = 26 - key;
//
//     const newLetterOrder = reorderLettersInStr(upperCaseStr, lowerCaseStr, indexFirstEl);
//
//     if (action === 'encode') {
//         const index = (x) => {
//             return newLetterOrder.indexOf(x);
//         };
//         const translate = (x) => {
//             return index(x) > -1 ? oldLetterOrder[index(x)] : x;
//         };
//         return str.split('').map((item) => translate(item)).join('');
//     }
//     if (action === 'decode') {
//         const index = (x) => {
//             return oldLetterOrder.indexOf(x);
//         };
//         const translate = (x) => {
//             return index(x) > -1 ? newLetterOrder[index(x)] : x;
//         };
//         return str.split('').map(translate).join('');
//     }
// };

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const encrypt = (key, str) =>  process(key, str, true);

const decrypt = (key, str) => process(key, str, false);

const process = (key, str, straight) => {
    const upperCaseStr = ALPHABET;
    const lowerCaseStr = upperCaseStr.toLowerCase();
    const oldLetterOrder = `${upperCaseStr}${lowerCaseStr}`;
    const indexFirstEl = key < 0
        ? (26 - key - 26)
        : 26 - key;

    const newLetterOrder = reorderLettersInStr(upperCaseStr, lowerCaseStr, indexFirstEl);
    const index = (x) => (straight ? newLetterOrder : oldLetterOrder).indexOf(x);
    const translate = (x) => index(x) > -1 ? (straight ? oldLetterOrder : newLetterOrder)[index(x)] : x;
    return str.split('').map((item) => translate(item)).join('');
};

const reorderLettersInStr = (upperStr, lowerStr, index) => {
    return [upperStr, lowerStr]
        .reduce((result, str) => {
            const lettersArr = str.split('');
            for (let i = index; i < lettersArr.length; i++) {
                result.push(lettersArr[i]);
            }
            for (let i = 0; i < index; i++) {
                result.push(lettersArr[i]);
            }
            return result;
        }, [])
        .join("");
};

module.exports = { encrypt, decrypt };
