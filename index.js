module.exports = function (options) {
    var express = require('express');
    var extend = require('extend');
    var router = express.Router();

    var settings = {
        pageAccessToken: 'your_token_here', // Facebook page access token, set in Facebook App Dashboard
        route: '/webhook', // Webhook endpoint path for incoming messages
        handle: processMessage // The function that will be called when a message comes in
    };

    // Merge options into settings object if passed in
    if (options && typeof options === 'object') {
        extend(settings, options);
    }

    // Facebook token validation
    function validateToken(req, res) {
        if (req.query['hub.verify_token'] === settings.validationToken) {
            res.send(req.query['hub.challenge']);
        } else {
            res.status(403).send('Error: incorrect validation token');
        }
    }

    // Default function that's called when a message comes in
    function processMessage(req, res) {
        console.log('Message received');
        res.end();
    }

    router.get(settings.route, validateToken);
    router.post(settings.route, settings.handle);

    return router;
};