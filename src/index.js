const numbers = {
    1: "one",       2: "two",        3: "three",     4: "four",      5: "five",
    6: "six",       7: "seven",      8: "eight",     9: "nine",     10: "ten",
    11: "eleven",  12: "twelve",    13: "thirteen", 14: "fourteen", 15: "fifteen",
    16: "sixteen", 17: "seventeen", 18: "eighteen", 19: "nineteen", 20: "twenty",
    30: "thirty",  40: "forty",     50: "fifty",    60: "sixty",    70: "seventy",
    80: "eighty",  90: "ninety",
};

module.exports = function toReadable (number) {
    if (number == 0) return "zero";

    let result = "";
    if (number >= 100) {
        result += numgerToString(Math.floor(number / 100)) + ' hundred ';
        number = number % 100;
    }
    if (number > 0) {
        if (numbers[number] != null) {
            result += numgerToString(number);
        } else {
            result += numgerToString(Math.floor(number / 10)*10) + ' ' + numgerToString(number % 10);
        }
    }
    return result.trim();
}


const numgerToString = (number) => {
    return (numbers[number] ? numbers[number]  : '') ;
};
