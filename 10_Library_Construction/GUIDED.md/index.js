export function tambah(x, y) {
    return x + y;
}

export function kurang(x, y) {
    return x - y;
}

export function kali(x, y) {
    return x * y;
}

export function bagi(x, y) {
    return x / y;
}

export function pangkat(x, y) {
    return x ** y;
}

/**
 * 
 * @param {string} x
 * @param {number} a
 * @param {number} b
 */

export function plsv_tiga(x, a, b) {
    const k = b - a;

    if (x === "x") {
        return k;
    } else if (x === "-x") {
        return bagi(k, -1);
    } else {
        const v = parseInt(x);
        return bagi(k, v);
    }
}