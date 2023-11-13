const axios = require('axios');

exports.postForm = (req, res, next) => {
    console.log(`The form submitted this info:`, req.body)
    // grab data and post it to the desired api
    // using a free, sample web server that just responds with what you post to it as an example
    axios.post('https://httpbin.org/post', req.body)
    .then(function (response) {
        console.log(`The server responded with:`, response.data)
        res.render('afterFormSubmission', {response: response.data});
    }).catch(function (error) {
        res.end();
    });
}