'use strict';

const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const app = express();
const port = process.env.PORT || 1337;
const corsOpts = {
	origin: 'https://petersenparts.com',
	optionSuccessStatus: 200
};

// body parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

// /sendEmail
app.post('/sendEmail', cors(corsOpts), (req, res, next) => {
	const params = req.body;
	var success = false;

	console.log('new request');
	console.log(params);

	if(params.form)
		success = true;

	res.json({
		success
	});
});

app.listen(port, () => {
	console.log(`listening on port ${port}`);
});
