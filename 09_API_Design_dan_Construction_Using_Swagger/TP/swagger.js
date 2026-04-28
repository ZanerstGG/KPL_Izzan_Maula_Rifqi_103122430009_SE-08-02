const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const option = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'menu Makanan',
            version: '1.0.0',
            description: 'Sebuah API sederhana tentang menu makanan yang kami sediakan',
        },
    },
    apis: ['index.js']
};

const specs = swaggerJsdoc(option);

module.exports = {
    specs,
    swaggerUi,
};