import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Film yang ditonton',
            version: '1.0.0',
            description: 'API sederhana dari Express untuk film-film yang pernah di tonton',
    },
},
apis: ['app.js'],
};

const specs = swaggerJsdoc(options);
export {
    specs,
    swaggerUi,
};