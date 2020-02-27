const express = require('express')
const api = express();

api.get('/api',  (request, repo) => {
    console.log(request);
})

api.listen(3000, () => console.log('test'))

module.exports.api = api
