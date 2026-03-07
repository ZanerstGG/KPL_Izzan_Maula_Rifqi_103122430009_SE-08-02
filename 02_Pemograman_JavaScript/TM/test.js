const fizzBuzz = require('./tm.js');
const assert = require("assert");

try {
    assert.strictEqual(fizzBuzz([8, 9, 32, 75, 84]), "Fizz 9 Fizz 75 FizzBuzz", "Tes 1 gagal lolos");
    console.log("✅ Tes 1 berhasil");

    assert.strictEqual(fizzBuzz([1, 68, 83, 91, 97]), "1, Fizz, 83, Buzz, 97", "Tes 2 gagal lolos");
    console.log("✅ Tes 2 berhasil");

    assert.strictEqual(fizzBuzz([-2, -1, 0, 1, 2]), "Fizz, -1, FizzBuzz, 1, Fizz", "Tes 3 gagal lolos");
    console.log("✅ Tes 3 berhasil");

    assert.strictEqual(fizzBuzz([-16]), "Fizz", "Tes 4 gagal lolos");
    console.log("✅ Tes 4 berhasil");

    assert.strictEqual(fizzBuzz("Nol"), "Input tidak valid", "Tes 5 gagal lolos");
    console.log("✅ Tes 5 berhasil");

    assert.strictEqual(fizzBuzz(1), "Input tidak valid", "Tes 6 gagal lolos");
    console.log("✅ Tes 6 berhasil");

    assert.strictEqual(fizzBuzz([2, 2, 7, 7, 14]), "Fizz Fizz Buzz Buzz FizzBuzz", "Tes 7 gagal lolos");
    console.log("✅ Tes 7 berhasil");
} catch (error) {
    console.error(`❌ Gagal: ${error}`);
}
