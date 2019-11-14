exports.option1_summary_get = function (req, res) {

    var feeCalc = require('../data/feecalc.json');

    res.render('fees/option1/summary', {
        feeCalc
    });
}

exports.option2_summary_get = function (req, res) {

    var feeCalc = require('../data/feecalc.json');

    res.render('fees/option2/summary', {
        feeCalc
    });
}

exports.option3_summary_get = function (req, res) {

    var feeCalc = require('../data/feecalc.json');

    res.render('fees/option3/summary', {
        feeCalc
    });
}

exports.option4_summary_get = function (req, res) {

    var feeCalc = require('../data/feecalc.json');

    res.render('fees/option4/summary', {
        feeCalc
    });
}

exports.fees_index = function (req, res) {

    var feeSession = req.session.data["fees"];

    res.render('fees/screens/index', {
        feeSession
    });
}

exports.nonremote_index = function (req, res) {

    var feeSession = req.session.data["fees"];

    console.log(feeSession);

    res.render('fees/screens/non-remote/index', {
        feeSession
    });
}




exports.addToSummary = function (req, res) {

    var feecats = require('../data/feecats.json');
    var id = req.params.id;

    // get added item and add to summary array
    var feeItem = feecats.categories.filter(function (value) {
        return value.id === id;
    });

    var feeSession = req.session.data["fees"];

    // Check the session

    if (feeSession === undefined) {

        // No fee session exists

        // create it
        var feeObj = {}
        var key = 'summaryItems';
        feeObj[key] = [];

        // What has been selected?       

        var data = {
            type: feeItem[0].type,
            activity: feeItem[0].activity,
            category: feeItem[0].category,
            id: feeItem[0].id
        };



        feeObj[key].push(data);  
        req.session.data["fees"] = feeObj;
    }


    console.log('fee session')
    console.log(feeSession);

    // Redirect to the index for the appropriate type
    if (feeItem[0].type === 'Non-remote') {
        return res.redirect('/fees/screens/non-remote')
    }

    res.redirect('/fees/screens/');
}