exports.getIndex = (req, res, next) => {
    res.render('index');
}

exports.getAfterForm = (req, res, next) => {
    res.render('afterFormSubmission')
}