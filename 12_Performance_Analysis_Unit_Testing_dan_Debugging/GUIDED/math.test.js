import test from "node:test";
import assert from "node:assert/strict";

test.describe("Logika Matematika", () => {
    test.it("1 sama dengan 1", () => {
        assert.strictEqual(1, 1);
    });

    test.it("1 tidak sama dengan dua", () => {
        assert.notStrictEqual(1, 2);
    });

    test.it("1 tambah 2 sama dengan 3", () => {
        assert.strictEqual(1 + 2, 3);
    });
});

test.describe("Float", () => {
    test.it("0.1 tambah 0.2 tidak sama dengan 0.3", () => {
        assert.notStrictEqual(0.1 + 0.2, 0.3);
    });

    test.it("Pecahan desimal ditambah bilangan bulat menambah sisi bulatnya", () => {
        assert.strictEqual(1.1 + 2, 3.1);
    });
});