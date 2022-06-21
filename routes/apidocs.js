const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../docs/basicInfo');
// display basic info about project
router.use('/', swaggerUi.serve);  // Launches Swagger UI 
router.get('/', swaggerUi.setup(swaggerDocument));  // endpoint to display  basic API info in web browser
router.get('/swagger.json', (request, response) => response.json(swaggerDocument))  //  Response is JSON object
module.exports = router