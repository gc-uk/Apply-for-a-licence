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

exports.fees_clear_index = function (req, res) {

    req.session.data["fees"] = undefined;

    res.redirect('/fees/screens/index');
}



exports.nonremote_index = function (req, res) {

    var feeSession = req.session.data["fees"];

    console.log(feeSession);

    res.render('fees/screens/non-remote/index', {
        feeSession
    });
}

exports.nonremote_bi_index = function (req, res) {

    var feeSession = req.session.data["fees"];

    console.log(feeSession);

    res.render('fees/screens/non-remote/bi', {
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

    var listOfItems = [];

    if (req.session.data['fees'] !== undefined) {
        listOfItems = req.session.data['fees'];
    }

    // Save details in to session and redirect to list
    let type = req.session.data['settlement-outcome']
    let activity = req.session.data['amount']
    let detail = req.session.data['settlement-detail']

    listOfItems.push({
        type: feeItem[0].type,
        activity: feeItem[0].activity,
        category: feeItem[0].category,
        id: feeItem[0].id,
        sameURL: feeItem[0].sameURL
    })

    req.session.data['fees'] = listOfItems




    // Redirect to the index for the appropriate type
    if (feeItem[0].type === 'Non-remote') {
        return res.redirect('/fees/screens/non-remote')
    }

    res.redirect('/fees/screens/index');
}


exports.removeFromSummary = function (req, res) {

    var feecats = require('../data/feecats.json');
    var id = req.params.id;

    // get added item and add to summary array
    var feeItem = feecats.categories.filter(function (value) {
        return value.id === id;
    });

    var feeSession = req.session.data["fees"];

    // Check the session

  
        var sessionObject = feeSession.filter(function (value) {
            return value.id !== id;
        });
        
        req.session.data["fees"] = sessionObject;
    



    // Redirect to the page for the ID as the user might want to select a different item in this type
  
    return res.redirect(feeItem[0].sameURL)
    
}