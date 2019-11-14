exports.option1_summary_get = function (req, res) {

    var feeCalc = require('../data/feecalc.json');

    res.render('fees/option1/summary', {feeCalc});
}

exports.option2_summary_get = function (req, res) {

    var feeCalc = require('../data/feecalc.json');

    res.render('fees/option2/summary', {feeCalc});
}

exports.option3_summary_get = function (req, res) {

    var feeCalc = require('../data/feecalc.json');

    res.render('fees/option3/summary', {feeCalc});
}

exports.option4_summary_get = function (req, res) {

    var feeCalc = require('../data/feecalc.json');

    res.render('fees/option4/summary', {feeCalc});
}


exports.addToSummary = function (req, res) {

    console.log('add')
    var fees = require('../data/feecats.json');

    // get added item and add to summary array

    var feeSession = req.session["fees"];

    if(feeSession !== null){
        
    }

    res.render('fees/screens/summary', {feeSummary});
}
