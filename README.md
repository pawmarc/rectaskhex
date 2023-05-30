# Dish App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Live Version: https://bespoke-dango-4cd2fe.netlify.app/


## How to setup locally:


By cloning:
```bash
git clone --branch main https://github.com/pawmarc/rectaskhex.git your-project-name
cd your-project-name
npm install
```

Then run app with:
```bash
npm start
```


## Tested on NPM version 8.15.0 and Node version 16.16.0


## Libs/technologies used: react, formik, yup, prop-types, tailwindcss, tailwindcss/forms, tw-elements


## Other info:

App uses simple proxy server made for handling requests & avoiding CORS issues. The code for proxy server is here:

    const dotenv = require('dotenv');

    dotenv.config();
    const express = require('express');
    const fetch = require('node-fetch');
    const cors = require('cors');
    const axios = require('axios');

    app.post('/hex-api', (req, res) => {
    axios
        .post(`${apiHexUrl}`, {
        ...req.body,
        })
        .then((response) => {
        return res.json({
            ...response.data,
        });
        })
        .catch(err => res.send(err));
    });


    app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
    });
