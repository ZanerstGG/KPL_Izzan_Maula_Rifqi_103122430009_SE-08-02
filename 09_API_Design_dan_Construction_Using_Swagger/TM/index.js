const express = require('express');
const { swaggerUi, specs } = require('./swagger');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));

/**
 * @swagger
 * /:
 *   get:
 *     summary: Redirect ke Swagger UI
 *     responses:
 *       302:
 *         description: Redirect ke /docs
 */
app.get('/', (req, res) => {
    res.redirect('/docs');
});

/**
 * @swagger
 * /:
 *   post:
 *     summary: Main tebak-tebakan angka acak berdasarkan nama
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nama:
 *                 type: string
 *                 example: "Hamid"
 *               tebakan:
 *                 type: integer
 *                 example: 24
 *     responses:
 *       200:
 *         description: Hasil evaluasi tebakan
 */

app.post('/', (req, res) => {
    const nama = req.body.nama;
    const tebakan = req.body.tebakan;
    let jumlahAscii = 0;
    
    for (let i = 0; i < nama.length; i++) {
        jumlahAscii += nama.charCodeAt(i);
    }
    
    const targetAngka = (jumlahAscii % 100) + 1;
    if (tebakan === targetAngka) {
        res.status(200).json({ jawaban: `Benar sekali! Tebakannya adalah ${targetAngka}.` });
    } else if (tebakan > targetAngka) {
        res.status(200).json({ jawaban: "Tebakanmu terlalu tinggi!" });
    } else {
        res.status(200).json({ jawaban: "Tebakanmu terlalu rendah!" });
    }
});

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});