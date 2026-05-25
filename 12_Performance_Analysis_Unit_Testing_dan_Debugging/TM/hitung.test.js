import { test } from 'node:test';
import assert from 'node:assert';
import { tambahPenghitung } from './hitung.js';

test('5 tambah 3 sama dengan 8', () => {
    assert.strictEqual(tambahPenghitung(5, 3), 8);
});

test('0 tambah 10 sama dengan 10', () => {
    assert.strictEqual(tambahPenghitung(0, 10), 10);
});