const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
    res.send('Welcome to Github Actions.')
});

app.listen(3000, () => {
    console.log('I am ready on 3000')
})