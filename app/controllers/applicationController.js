var NotifyClient = require('notifications-node-client').NotifyClient,
    notify = new NotifyClient(process.env.NotifyKey);

exports.security_signin_get = function (req, res) {
    res.render('app/v1/security/signin', {});
}

exports.security_signin_post = function (req, res) {
    res.redirect('/applicationhub/v2/hub-no-apps');
}



exports.security_createaccount_get = function (req, res) {
    res.render('app/v1/security/create-account', {});
}

exports.security_createaccount_post = function (req, res) {

    //Send a code
    notify
        .sendEmail('a5a89337-ef7d-4aa6-809d-183d308aa130', req.session.data['email'], {
            personalisation: {
                'code': '898121'
            }
        })
        .then(response => console.log("Sent"))
        .catch(err => console.error("errored"))

    res.redirect('/app/v1/security/code');
}



exports.security_code_get = function (req, res) {
    res.render('app/v1/security/code', {});
}

exports.security_code_post = function (req, res) {
    if (req.session.data['code'] === "") {
        return res.redirect('/app/v1/security/failed-to-register');
    }
    res.redirect('/app/v1/account/name-password');
}


exports.security_forgotpassword_get = function (req, res) {
    res.render('app/v1/security/forgot-password', {});
}

exports.security_forgotpassword_post = function (req, res) {
    if (req.session.data['email'] === "") {
        return res.render('app/v1/security/forgot-password', {});
    }

    notify
        .sendEmail('d6548e32-6337-426f-abc9-1e81e4555453', req.session.data['email'], {
            personalisation: {
                'url': process.env.domain + 'app/v1/security/set-password'
            }
        })
        .then(response => console.log("Sent"))
        .catch(err => console.error("errored"))

    res.redirect('/app/v1/security/reset-sent');
}



exports.account_namepassword_get = function (req, res) {
    res.render('app/v1/account/name-password', {});
}

exports.account_namepassword_post = function (req, res) {
    res.redirect('/applicationhub/v2/hub-no-apps');
}


exports.security_setpassword_get = function (req, res) {
    res.render('app/v1/security/set-password', {});
}

exports.security_setpassword_post = function (req, res) {

    notify
        .sendEmail('9da04c11-653c-4fd5-87ab-5c21aca39875', req.session.data['email'], {
            personalisation: {            }
        })
        .then(response => console.log("Sent"))
        .catch(err => console.error("errored"))

    res.redirect('/applicationhub/v2/hub-no-apps');
}