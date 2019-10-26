const crypto = require("crypto");

exports.add_post = function (req, res) {

    // Add the session items to a list and return to the frontend
    var listOfItems = [];

    if (req.session.data['items'] !== undefined) {
        listOfItems = req.session.data['items'];
    }

    // Save details in to session and redirect to list
    let document = req.session.data['docs']
    let reference = req.session.data['reference']
    let issue = req.session.data['issue-issued-day'] + "/" + req.session.data['issue-issued-month'] + "/" + req.session.data['issue-issued-year']
    let expiry = req.session.data['expiry-day'] + "/" + req.session.data['expiry-month'] + "/" + req.session.data['expiry-year']

    listOfItems.push({
        document: document,
        reference: reference,
        issue: issue,
        expiry: expiry,
        id: crypto.randomBytes(16).toString("hex")
    })

    req.session.data['items'] = listOfItems

    res.redirect('/idverification/v1/list');
}

exports.list_get = function (req, res) {

    // Add the session items to a list and return to the frontend
    var items = req.session.data['items'];

    res.render('idverification/v1/list', {items});
}

exports.list_post = function (req, res) {

    res.redirect('idverification/v1/check');
}


exports.search_get = function (req, res) {

    // Add the session items to a list and return to the frontend
    req.session.data['items'] = [];

    res.render('idverification/v1/search');
}

