'use strict';
const express = require('express')
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json({ limit: '100mb' }));
app.use(
	bodyParser.urlencoded({
		limit: '100mb',
		extended: true,
		parameterLimit: 100000
	})
);

const fizzBuzz = require('./fizzBuzz');

app.post('/', (req , res) => {
    try {
        let count = req.body.count;
        const results=  fizzBuzz.getResults(count);
        console.log(results);
        return res.send({
            status: true,
            code: 200,
            message: 'Success',
            appVersion: 'v1',
            description: 'Check output in cmd console',
            result: results
        });
    } catch (e) {
        console.error(e);
        return res.send({error: e})
    }
    
  });


const port = process.env.PORT || 3000
app.listen(port, () => console.log(`App listening on port ${port}`));
