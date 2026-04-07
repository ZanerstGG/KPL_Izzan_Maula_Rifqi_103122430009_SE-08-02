/**
 * @param {String} deret Deretan bercirikan string
 * @returns {String}
 */
function fizzBuzz(deret) {
    /** @type {String} */
    let hasil = "";

    /** @type {Array<String>} */
    let deretLarik = deret.split(' ');

    for (const elemen of deretLarik) {
        /** @type {Number} */
        const n = Number(elemen);

        /** @type {String} */
        let fz = "";

        // Fizz
        if (n % 3 === 0) {
            fz += " Fizz ";
        }

        // Buzz
        if (n % 5 === 0) {
            fz += " Buzz ";
        }

        if (fz != '') {
            hasil += `${fz}`;
            continue;
        }

        hasil += `${n}`;
        // 15 -> FizzBuzz
        // 14 -> 14
    }
    return hasil;
}

console.log(fizzBuzz("1 2 3 4 5 6 7 8 9 10 11 12 13 14 15"));