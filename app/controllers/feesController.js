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
