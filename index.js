
var express = require('express');
var app = express();
var path =  require ('path');
var bodyparser = require ('body-parser');
var jsonparser = bodyparser.json({
	limit: '200mb'
})

var team;
var records;

var mongo = require('mongodb');
var url = 'mongodb://localhost:27017/txtLabs';
var Slack = require('slack-node');
webhookUri = "https://hooks.slack.com/services/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"
slack = new Slack();
slack.setWebhook(webhookUri);

var nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport({
    host: 'server145.web-hosting.com',
    port: 465,
    secure: true, // secure:true for port 465, secure:false for port 587
    auth: {
        user: 'contactus@txtlabs.io',
        pass: 'g00gle13'
    }
});



mongo.connect( url , function(err, db) {
	if (err) {
		 throw err
	} else {
		console.log('connected to database evaluations')
			records = db.collection('records');
	}

});



app.use(express.static(__dirname));

app.post('/saveRecord', jsonparser,function(req,res){
	var newContact = "NEW CONTACT:  " + req.body.fullname;
	var message = "Name: " + req.body.fullname + "\n Email : " + req.body.email + "\n Phone: " + req.body.phone + "\n Description: " + req.body.description + "\n Budget: " + req.body.budget;
	    		slack.webhook({
    			channel: "#txt_labs-contacts",
    			username: "txtLabsBot",
    			text: message
    		},function(err,response){
    			console.log(err);
    			console.log(response);
    		})



		    // setup email data with unicode symbols
		var mailOptions = {
		    from: 'contactus@txtlabs.io', // sender address
		    to: 'contactus@txtlabs.io', // list of receivers
		    subject: newContact, // Subject line
		    text: message // plain text body
		};

		// send mail with defined transport object
		transporter.sendMail(mailOptions, (error, info) => {
		    if (error) {
		        return console.log(error);
		    }
		    console.log('Message %s sent: %s', info.messageId, info.response);
		});


    records.insert(req.body).then(function(doc,err){
    	if(err){
    		throw err;
    		res.sendStatus(500);
    	}else{
    		res.sendStatus(200);
    	}
    })
    
})


console.log("Running TXTApp")
app.listen(8000);
