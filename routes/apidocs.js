const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../docs/basicInfo');
// display basic info about project
router.use('/', swaggerUi.serve);
router.get('/', swaggerUi.setup(swaggerDocument));  // endpoint for display in web browser
router.get('/swagger.json', (request, response) => response.json(swaggerDocument))  // endpoint for Postman. Response is JSON object
module.exports = router