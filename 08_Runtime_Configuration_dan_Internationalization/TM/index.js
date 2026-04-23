require('dotenv').config();

function konversiKurs(jumlahRupiah) {
    fetch(process.env.BASE_API)
        .then(response => response.json())
        .then(data => {
            const kursCNH = data.idr.cnh;
            const kursEUR = data.idr.eur;

            const waktu = new Intl.DateTimeFormat('id-ID', { 
                day: 'numeric', month: 'long', year: 'numeric' 
            }).format(new Date());

            const idr = new Intl.NumberFormat('id-ID', { 
                style: 'currency', currency: 'IDR', maximumFractionDigits: 0 
            }).format(jumlahRupiah).replace(/\s/g, '');

            const cnh = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'CNH' }).format(jumlahRupiah * kursCNH);
            const eur = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'EUR' }).format(jumlahRupiah * kursEUR);
            console.log(`Kurs ${idr} pada ${waktu} adalah ${cnh} dan ${eur}`);
        })
        .catch(error => console.error("Gagal mengambil data:", error));
}

[25000, 50000, 100000].forEach(konversiKurs);