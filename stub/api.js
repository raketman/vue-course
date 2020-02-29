const express = require('express')
const cors = require('cors')
const api = express();
const fs = require('fs');
const bodyParser = require('body-parser');

api.use(cors())
api.use(bodyParser.json());

function readUsers()
{
    var contents = fs.readFileSync(__dirname + '/store/users.json').toString();

    return JSON.parse(contents);
}

function saveUser(user)
{
    var users = readUsers();

    users = users.map(function(item) {
        if (item.id === user.id) {
            return user;
        } else {
            return item;
        }
    });

    fs.writeFileSync(__dirname + '/store/users.json', JSON.stringify(users));
}

function getUserByCredential(login, password)
{
    var users = readUsers();

    users = users.filter(function(item) {
        return item.login === login && item.password === password
    });

    if (users.length < 1) {
        return null;
    }

    return users[0];

}

function getUserById(id)
{
    var users = readUsers();

    users = users.filter(function(item) {
        return item.id === parseInt(id)
    });

    if (users.length < 1) {
        return null;
    }

    return users[0];

}

api.get('/api/users.json',  (request, repsonse) => {
    console.log(request.query);
    var user = getUserByCredential(request.query.login, request.query.password);

    if (!user) {
        repsonse.send(JSON.stringify({status: 'error', 'msg' : 'Пользователь не найден'}));
    } else {
        repsonse.send(JSON.stringify(user));
    }


});

api.get('/api/users/:id.json',  (request, repsonse) => {
    console.log(request.params);
    var user = getUserById(request.params.id);

    if (!user) {
        repsonse.send(JSON.stringify({status: 'error', 'msg' : 'Пользователь не найден'}));
    } else {
        repsonse.send(JSON.stringify(user));
    }
});

api.post('/api/users/:id/favorite.json',  (request, repsonse) => {
    console.log(request.params, request.body);
    var user = getUserById(request.params.id);

    var data = request.body;


    if (user['favorites'].indexOf(data.story_id) == -1) {
        user['favorites'].push(data.story_id);
    } else {
        user['favorites'] = user['favorites'].filter(function(item) {
            return item != data.story_id;
        });
    }

    saveUser(user);

    repsonse.send(JSON.stringify(user));
});


api.listen(3000, () => console.log('API READY'))

module.exports.api = api
