const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
var ggyController = require('./controllers/ggycalculatorController.js')
var feesController = require('./controllers/feesController.js')
var idverificationController = require('./controllers/idverificationController.js')
var apphubccontroller = require('./controllers/apphubcontroller.js')

// GGY Calculator
router.get('/ggy-calculator/calculator', ggyController.calculator_get);
router.post('/ggy-calculator/calculator', ggyController.calculator_post);
router.get('/ggy-calculator/clear', ggyController.calculator_clear_get);


router.get('/ggy-calculator/calculator2', ggyController.calculator2_get);
router.post('/ggy-calculator/calculator2', ggyController.calculator2_post);
router.get('/ggy-calculator/clear2', ggyController.calculator_clear2_get);



// Fees
router.get('/fees/option1/summary', feesController.option1_summary_get);
router.get('/fees/option2/summary', feesController.option2_summary_get);
router.get('/fees/option3/summary', feesController.option3_summary_get);
router.get('/fees/option4/summary', feesController.option4_summary_get);


// ID Verification
router.post('/idverification/v1/add', idverificationController.add_post);
router.get('/idverification/v1/list', idverificationController.list_get);
router.post('/idverification/v1/list', idverificationController.list_post);
router.get('/idverification/v1/search', idverificationController.search_get);

// App hub controller
router.get('/applicationhub/v1/hub-with-apps', apphubccontroller.hub_with_apps_get);
router.get('/applicationhub/v2/hub-with-apps', apphubccontroller.hub_with_apps2_get);
router.get('/applicationhub/v3/hub-with-apps', apphubccontroller.hub_with_apps3_get);
router.get('/applicationhub/v1/hub-with-contributor', apphubccontroller.hub_with_contributor_get);
router.get('/applicationhub/v2/hub-with-contributor', apphubccontroller.hub_with_contributor2_get);
router.get('/applicationhub/v3/hub-with-contributor', apphubccontroller.hub_with_contributor3_get);
module.exports = router