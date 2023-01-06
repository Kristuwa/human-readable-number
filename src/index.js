module.exports = function toReadable(number) {
    const obj = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };

    const keys = Object.keys(obj);
    const str = number.toString();
    if (str.length === 1) {
        const key = keys.find((item) => item === number.toString());
        return obj[key];
    }
    if (str.length === 2) {
        const key = keys.find((item) => item === number.toString());

        if (key) {
            return obj[key];
        } else {
            const n = number - Number(str[str.length - 1]);
            return obj[n] + " " + obj[Number(str[str.length - 1])];
        }
    }

    if (str.length === 3) {
        const dozens = str.slice(1);
        if (Number(dozens[0]) === 0) {
            if (Number(dozens[1]) === 0) {
                return obj[str[0]] + " hundred";
            }
            const element = dozens[1];
            const key = keys.find((item) => item === element);
            console.log(key);
            return obj[str[0]] + " hundred " + obj[key];
        }

        const key = keys.find((item) => item === dozens);
        if (key) return obj[str[0]] + " hundred " + obj[key];
        const n = dozens - Number(dozens[dozens.length - 1]);
        return (
            obj[str[0]] +
            " hundred " +
            obj[n] +
            " " +
            obj[Number(dozens[dozens.length - 1])]
        );
    }
};
