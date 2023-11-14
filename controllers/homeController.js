exports.getIndex = (req, res, next) => {
    res.render('index');
}

exports.getAfterForm = (req, res, next) => {
    res.render('afterFormSubmission')
}

exports.getIntakeForm = (req, res, next) => {
    res.render('intakeform')
}

exports.getRequestForm = (req, res, next) => {
    res.render('datarequestform')
}