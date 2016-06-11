// Helpers

// Global dependencies
var Twitter = require('twitter');

var Helpers = {};

Helpers.getTwitterClient = function() {
  // Add your keys and access token credentials for your Twitter
  // developer application.
  // TODO: Move these values to environment variables. It's very
  // insecure to keep these values in your source code.
  var client = new Twitter({
    consumer_key: 'SorxS4Vxio1bGrjfrHr3FclLx',
    consumer_secret: 'cvZzZ25yC6YHo6PxzISlDvsxLTSNDELNM06t3JFcH3Sj7vzKoN',
    access_token_key: '3602832677-g6NLeR4QZJMpooBtZmQnci0Dk1SuYKNLPtpNL0b',
    access_token_secret: 'nLzHkMqyAiA9Y4GyKlleLBk9HtCuZTpla9UnZlGxYf4dn'
  });

  return client;
};

module.exports = Helpers;
