// CJS
require('dotenv').config();

// ESM
// import 'dotenv/config';
function ambilKutipan() {
    try {
       fetch(process.env.BASE_API)
       .then(response => response.json())
       .then(data => console.log(data['data']));
    } catch (error) {
        console.error(error);
    }
}

ambilKutipan();