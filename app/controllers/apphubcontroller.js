exports.hub_with_apps_get = function (req, res) {

    var appdata = require('../data/apphub.json');

    res.render('applicationhub/v1/hub-with-apps', {appdata});
}

exports.hub_with_apps2_get = function (req, res) {

    var appdata = require('../data/apphub.json');

    res.render('applicationhub/v2/hub-with-apps', {appdata});
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