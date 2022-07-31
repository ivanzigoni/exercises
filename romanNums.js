function romanIntoInteger(romanNum) {
    const romanLetterToNumber = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let output = 0;

    for (let i = 0; i < romanNum.length; i += 1) {
      const currentDigit = romanLetterToNumber[romanNum[i]];
      const nextDigit = romanLetterToNumber[romanNum[i + 1]];

        if (currentDigit < nextDigit) {
            output += nextDigit - currentDigit;
            i += 1;
        } else {
            output += currentDigit;
        }

    }
    return output;
}

// console.log(romanIntoInteger('III'));
console.log(romanIntoInteger('MDIV'));
// console.log(romanIntoInteger('IV'));
// console.log(romanIntoInteger('IM'));
// console.log(romanIntoInteger('LVIII'));
// console.log(romanIntoInteger('MCMXCIV'));







