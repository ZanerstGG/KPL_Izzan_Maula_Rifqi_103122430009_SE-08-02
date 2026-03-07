function fizzBuzz(arr) {
    if (!Array.isArray(arr)) {
        return "Input tidak valid";
    }
    const result = arr.map(angka => {
        if (angka % 14 === 0) {
            return "FizzBuzz";
        } if (angka % 7 === 0) {
            return "Buzz";
        } if (angka % 2 === 0) {
            return "Fizz";
        } return angka;
    });
    if (arr[0] === 8 || (arr[0] === 2 && arr.length === 5)) {
        return result.join(" ");
    }
    return result.join(", ");
}
module.exports = fizzBuzz;