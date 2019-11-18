exports.hub_with_apps_get = function (req, res) {

    var appdata = require('../data/apphub.json');

    res.render('applicationhub/v1/hub-with-apps', {appdata});
}

exports.hub_with_apps2_get = function (req, res) {

    var appdata = require('../data/apphub.json');

    res.render('applicationhub/v2/hub-with-apps', {appdata});
}

exports.hub_with_apps_submitted_get = function (req, res) {

    var appdata = require('../data/apphub.json');

    res.render('applicationhub/v2/hub-with-apps-submitted', {appdata});
}

exports.hub_with_apps3_get = function (req, res) {

    var appdata = require('../data/apphub.json');

    res.render('applicationhub/v3/hub-with-apps', {appdata});
}

exports.hub_with_contributor_get = function (req, res) {

    var appdata = require('../data/apphub.json');

    res.render('applicationhub/v1/hub-with-contributor', {appdata});
}

exports.hub_with_contributor2_get = function (req, res) {

    var appdata = require('../data/apphub.json');

    res.render('applicationhub/v2/hub-with-contributor', {appdata});
}

exports.hub_with_contributor3_get = function (req, res) {

    var appdata = require('../data/apphub.json');

    res.render('applicationhub/v3/hub-with-contributor', {appdata});
}

exports.appstart_index = function (req, res) {

    var feeSession = req.session.data["fees"];
    var feeSession2 = req.session.data["fees"];

    console.log(feeSession);

    res.render('appstart/index', {
        feeSession, feeSession2
    });
}

exports.step1 = function (req, res) {

    var feeSession = req.session.data["fees"];
    var feeSession2 = req.session.data["fees"];

    console.log(feeSession);

    res.render('appstart/step1', {
        feeSession, feeSession2
    });
}

exports.appstart_v2_index = function (req, res) {

    var feeSession = req.session.data["fees"];
    var feeSession2 = req.session.data["fees"];

    console.log(feeSession);

    res.render('appstart-v2/index', {
        feeSession, feeSession2
    });
}