var express = require('express');
var router  = express.Router();
var nodemailer = require("nodemailer");


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});


router.post('/send', function(req, res, next){
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'smth@gmail.com',
      pass: 'somepass'
    }
  });
  
  var mailOptions = {
    from: 'John Doe <john.doe@gmail.com>',
    to: 'pcubeki@gmail.com',
    subject: 'Website submission',
    text: 'You ve a new submission with following details ... Name' + req.body.name + ' Email: ' + req.body.email + ' Message: ' + req.body.message + '.',
    html: '<p>You ve a new submission with following details ...</p>'
  };
  
  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
    smtpTransport.close();
  });
  
  
});



module.exports = router;