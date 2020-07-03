const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

const info = require('../src/config');

app.use(cors())
app.use(express.json())
app.use('/', router)


var transport = {
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
    user: info.USER,
    pass: info.PASS
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/contact', (req, res, next) => {
  var name = req.body.name
  var email = req.body.email
  var message = req.body.message
  var content = `name: ${name} \nemail: ${email} \nmessage: ${message} `

  var mail = {
    from: name,
    to: 'marcdy27@gmail.com',
    subject: 'New Message from Portfolio Website',
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
	if (err) {
  	res.json({
    	status: 'fail'
  	})
	} else {
  	res.json({
   	status: 'success'
  	})

  	transporter.sendMail({
    	from: "marcdy27@gmail.com",
    	to: email,
    	subject: "Submission was successful",
        text: `Thank you for contacting me! I'll get back to you as soon as I see your message!\n\nYour details\nName: ${name}\n Email: ${email}\n Message: ${message}`
  	}, function(error, info){
    	if(error) {
      	console.log(error);
    	} else{
      	console.log('Message sent: ' + info.response);
    	}
  	});
	}
  })
})



app.listen(8000, () => console.log("Express server is working..."))