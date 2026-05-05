export function hitungHuruf(teks) {
    if (typeof teks !== 'string') return 0;
    const kumpulanHuruf = teks.match(/[a-zA-Z]/g);
    return kumpulanHuruf ? kumpulanHuruf.length : 0;
}

export function hitungKata(teks) {
    if (typeof teks !== 'string') return 0;
    const kata = teks.trim().split(/\s+/);
    const kataValid = kata.filter(k => k.length > 0);
    return kataValid.length;
}