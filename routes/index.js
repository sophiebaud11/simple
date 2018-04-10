var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Simple Slack App' });
});
module.exports = router;
router.get('/slack-history', function(req, res, next){
  var sampleData = [
    {
      "city": "New York",
      "population": "8405837",
      "state": "New York"
    },
    {
      "city": "Los Angeles",
      "population": "3884307",
      "state": "California"
    },
    {
      "city": "Chicago",
      "population": "2718782",
      "state": "Illinois"
    }
  ]
  var message = "Ultimately, we'll put our Slack App here. The variable we're passing in here could contain anything."
  res.render('slack_history', {title: 'Slack History', message: message, data: sampleData})
  })
