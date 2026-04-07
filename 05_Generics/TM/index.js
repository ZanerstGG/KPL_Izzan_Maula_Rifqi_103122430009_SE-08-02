/**
 * @param {number} value
 * @returns {number|string}
 */
function zzzzOrNum(value) {
    if (typeof value !== "number") {
        throw new Error("Input harus berupa bilangan bulat!");
    }

    if (value % 15 === 0) {
        return "FizzBuzz";
    } else if (value % 3 === 0) {
        return "Fizz";
    } else if (value % 5 === 0) {
        return "Buzz";
    } else {
        return value;
    }
}

/**
 * @param {number[]} sequence
 * @returns {(number|string)[]}
 */
function fizzBuzz(sequence) {
    if (!Array.isArray(sequence)) {
        throw new Error("Input harus berupa array!");
    }
    const newSequence = sequence.map((e) => zzzzOrNum(e));

    return newSequence;
}

module.exports = {
    fizzBuzz: fizzBuzz,
    zzzzOrNum: zzzzOrNum,
};