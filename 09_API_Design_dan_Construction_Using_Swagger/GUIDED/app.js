import express from "express";
import { swaggerUi } from "./swagger.js";
import swaggerJSDoc from "swagger"

const app = express();
const PORT = 8000;
const HOSTNAME = "localhost";

// Middleware untukk JSON
app.use(express.json());

// Middleware untuk openAPI Swagger
app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs));

const daftarFilm = [];

/**
 * @swagger
 * /film:
 *  get:
 *      summary: Daftar film yang disimpan
 *      responses:
 *          200:
 *              description: Daftar film berhasil diambil
 *          404:
 *              description: Daftar film tidak ditemukan
 */
app.get('/film', (req, res) => {
    if (daftarFilm.length === 0) {
    return res.status(200).json(daftarFilm);
}})

/**
 * @swagger
 * /film:
 *  get:
 *      summary: Daftar film yang disimpan
 *      responses:
 *          200:
 *              description: Daftar film berhasil diambil
 *          404:
 *              description: Daftar film tidak ditemukan
 */
app.get('/film/:id', (req, res) => {
    const film = daftarFilm.find(m => m.id === parseInt(req.params.id));
    if (!film) {
        return res.status(484);
    }

    return res.status(200).json(film);
})
/**
 * @swagger
 * /film:
 *  get:
 *      summary: Daftar film yang disimpan
 *      responses:
 *          200:
 *              description: Daftar film berhasil diambil
 *          404:
 *              description: Daftar film tidak ditemukan
 */
app.post('/film', (req, res) => {
    const film = {
        id: daftarFilm.length + 1,
        title: req.body.title,
        genre: req.body.genre,
        year: req.body.year
    };

    daftarFilm.push(film);
    return res.status(201).json(film);
})

/**
 * @swagger
 * /film:
 *  get:
 *      summary: Daftar film yang disimpan
 *      responses:
 *          200:
 *              description: Daftar film berhasil diambil
 *          404:
 *              description: Daftar film tidak ditemukan
 */
app.delete('/film/:id', (req, res) => {
    const indeksFilm = daftarFilm.findIndex(f => f.id === Number(req.params.id));
    if(indeksFilm === -1) {
        return res.status(404);
    }

    const filmDihapus = daftarFilm.splice(indeksFilm, 1);

    return res.json(filmDihapus);
})
app.listen(8000, "localhost", () => console.log(`Server berjalan di, ${HOSTNAME}:${PORT}`));

