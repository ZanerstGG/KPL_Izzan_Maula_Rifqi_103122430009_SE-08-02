// @ts-nocheck
const fb = require("./index.js");
const assert = require("assert");

try {
    // Contoh tes 1: [1, 2, 3, 4, 5] mengembalikan [1, 2, 'Fizz', 4, 'Buzz']
    console.log("Seri: fizzBuzz");
    assert.deepStrictEqual(fb.fizzBuzz([1, 2, 3, 4, 5]), [1, 2, 'Fizz', 4, 'Buzz'], "Tes 1 gagal lolos");
    console.log("✅ Tes 2 berhasil");

    assert.deepStrictEqual(fb.fizzBuzz([15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165]), ['FizzBuzz', 'FizzBuzz', 'FizzBuzz', 'FizzBuzz', 'FizzBuzz', 'FizzBuzz', 'FizzBuzz', 'FizzBuzz', 'FizzBuzz', 'FizzBuzz', 'FizzBuzz'], "Tes 2 gagal lolos");
    console.log("✅ Tes 2 berhasil");

    assert.deepStrictEqual(fb.fizzBuzz([35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104]), ['Buzz', 'Fizz', 37, 38, 'Fizz', 'Buzz', 41, 'Fizz', 43, 44, 'FizzBuzz', 46, 47, 'Fizz', 49, 'Buzz', 'Fizz', 52, 53, 'Fizz', 'Buzz', 56, 'Fizz', 58, 59, 'FizzBuzz', 61, 62, 'Fizz', 64, 'Buzz', 'Fizz', 67, 68, 'Fizz', 'Buzz', 71, 'Fizz', 73, 74, 'FizzBuzz', 76, 77, 'Fizz', 79, 'Buzz', 'Fizz', 82, 83, 'Fizz', 'Buzz', 86, 'Fizz', 88, 89, 'FizzBuzz', 91, 92, 'Fizz', 94, 'Buzz', 'Fizz', 97, 98, 'Fizz', 'Buzz', 101, 'Fizz', 103, 104], "Tes 3 gagal lolos");
    console.log("✅ Tes 3 berhasil");

    assert.deepStrictEqual(fb.fizzBuzz([]), [], "Tes 4 gagal lolos");
    console.log("✅ Tes 4 berhasil");

    // assert.throws akan berhasil jika memang error (tips: pakai throw new)
    // Asersinya akan gagal jika tidak error
    assert.throws(() => fb.fizzBuzz(1214));
    console.log("✅ Tes 5 berhasil");

    console.log("");

    console.log("Seri: zzzzOrNum");
    assert.strictEqual(fb.zzzzOrNum(1212), "Fizz", "Tes 1 gagal lolos");
    console.log("✅ Tes 1 berhasil");

    assert.strictEqual(fb.zzzzOrNum(77), 77, "Tes 2 gagal lolos");
    console.log("✅ Tes 2 berhasil");

    assert.strictEqual(fb.zzzzOrNum(100), "Buzz", "Tes 3 gagal lolos");
    console.log("✅ Tes 3 berhasil");

    assert.throws(() => fb.zzzzOrNum([]));
    console.log("✅ Tes 4 berhasil");

    assert.throws(() => fb.zzzzOrNum("Rizz"));
    console.log("✅ Tes 5 berhasil");
} catch (error) {
    console.error(`❌ Gagal: ${error}`);
}