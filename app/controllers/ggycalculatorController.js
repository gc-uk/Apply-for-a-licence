exports.calculator_get = function (req, res) {
    res.render('ggy-calculator/calculator');
}

exports.calculator_post = function (req, res) {

    // Calculate GGY
    var stakes = 0;
    var income = 0;
    var prizes = 0;

    stakes = parseFloat(req.session.data['amount1']);
    income = parseFloat(req.session.data['amount2']);
    prizes = parseFloat(req.session.data['amount3']);

    var total = ((stakes + income) - prizes);

    res.render('ggy-calculator/calculator',{total, stakes, income, prizes});
}

exports.calculator_clear_get = function (req, res) {
    req.session.data = {};
    res.redirect('/ggy-calculator/calculator');
}

exports.calculator2_get = function (req, res) {
    var total = null;
    res.render('ggy-calculator/calculator2', {total});
}

exports.calculator2_post = function (req, res) {

    var err = false;
    var total = null;
    var erramount1 = false;
    var erramount2 = false;
    var erramount3 = false;

    if(req.body.amount1 === ''){
        err = true;
        erramount1 = true;      
    }

    if(req.body.amount2 === ''){
        err = true;
        erramount2= true;      
    }

    if(req.body.amount3 === ''){
        err = true;
        erramount3 = true; 
    }

    if(err === true){
        return res.render('ggy-calculator/calculator2', {total, err, erramount1, erramount2, erramount3});
    }

    // Calculate GGY
    var stakes = 0;
    var income = 0;
    var prizes = 0;

    stakes = parseFloat(req.session.data['amount1']);
    income = parseFloat(req.session.data['amount2']);
    prizes = parseFloat(req.session.data['amount3']);

    total = ((stakes + income) - prizes);

    res.render('ggy-calculator/calculator2',{err, total, stakes, income, prizes});
}

exports.calculator_clear2_get = function (req, res) {
    req.session.data = {};
    res.redirect('/ggy-calculator/calculator2');
}