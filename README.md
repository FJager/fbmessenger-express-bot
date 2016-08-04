# `fbmessenger-express-bot`

NodeJS [Express](http://expressjs.com/) middleware that sets up a POST endpoint for the Facebook Messenger platform.

## Getting started

### Register the middleware for Express and provide a function to handle incoming messages

```javascript
var express = require('express');
var botHelper = require('fbmessenger-express-bot');
var app = express();

app.use(botHelper({
    pageAccessToken: 'your_token_here', // Facebook page access token, set in Facebook App Dashboard
    route: '/webhook', // Webhook endpoint path for incoming messages
    handle: processMessage // The function that will be called when a message comes in
}));
```

## Options object

* `handle`: The callback function for incoming messages.
* `pageAccessToken`: App page access token, configured in App Dashboard Messenger settings (https://developers.facebook.com/apps)
* `route`: Sets the webhook path (`/webhook` by default)

## License

[MIT License](http://www.opensource.org/licenses/mit-license.php)