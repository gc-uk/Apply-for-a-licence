const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
var ggyController = require('./controllers/ggycalculatorController.js')
var feesController = require('./controllers/feesController.js')
var idverificationController = require('./controllers/idverificationController.js')
var apphubccontroller = require('./controllers/apphubcontroller.js')
var applicationController = require('./controllers/applicationController.js')

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

// Screens
router.get('/fees/screens/', feesController.fees_index);
router.get('/fees/screens/non-remote', feesController.nonremote_index);
router.get('/fees/screens/non-remote/bi', feesController.nonremote_bi_index);
router.get('/fees/screens/non-remote/agc', feesController.nonremote_agc_index);

router.get('/fees/screens/clear', feesController.fees_clear_index);


// Add fee to summary
router.get('/fees/screens/add/:id', feesController.addToSummary);
router.get('/fees/screens/remove/:id', feesController.removeFromSummary);


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

router.get('/applicationhub/v2/hub-with-apps-submitted', apphubccontroller.hub_with_apps_submitted_get);


router.get('/appstart/', apphubccontroller.appstart_index);
router.get('/appstart/step1', apphubccontroller.step1);


router.get('/appstart-v2/', apphubccontroller.appstart_v2_index);
router.get('/appstart-v2/activity', apphubccontroller.appstart_v2_activity);
router.get('/appstart-v2/need', apphubccontroller.appstart_v2_need);
router.get('/appstart-v2/updates', apphubccontroller.appstart_v2_updates);
router.get('/appstart-v2/start', apphubccontroller.appstart_v2_start);



// APPLICATION
router.get('/app/v1/security/signin', applicationController.security_signin_get);
router.post('/app/v1/security/signin', applicationController.security_signin_post);

router.get('/app/v1/security/create-account', applicationController.security_createaccount_get);
router.post('/app/v1/security/create-account', applicationController.security_createaccount_post);

router.get('/app/v1/security/code', applicationController.security_code_get);
router.post('/app/v1/security/code', applicationController.security_code_post);

router.get('/app/v1/security/forgot-password', applicationController.security_forgotpassword_get);
router.post('/app/v1/security/forgot-password', applicationController.security_forgotpassword_post);

router.get('/app/v1/account/name-password', applicationController.account_namepassword_get);
router.post('/app/v1/account/name-password', applicationController.account_namepassword_post);

router.get('/app/v1/security/set-password', applicationController.security_setpassword_get);
router.post('/app/v1/security/set-password', applicationController.security_setpassword_post);


module.exports = router