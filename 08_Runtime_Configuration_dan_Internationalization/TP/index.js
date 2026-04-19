const tanggalSekarang = new Date();
const formatterTanggal = new Intl.DateTimeFormat('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
});

const hasilFormat = formatterTanggal.format(tanggalSekarang);
console.log(hasilFormat);