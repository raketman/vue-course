import axios from 'axios'

export const userService = {
    login,
    fetch,
    favorite
};

function fetch(id) {
    return axios({
        method: 'get',
        url: 'http://localhost:3000/api/users/' + id + '.json',
        //url: process.env.API_URL + '/api/users/' +id +'.json',
    });
}
function login(username, password) {
    return axios({
        method: 'get',
        //url: process.env.API_URL + '/api/users.json',
        url: 'http://localhost:3000/api/users.json',
        params: {
            login: username,
            password: password
        }
    });
}

function favorite(id, story_id) {
    return axios.post(
        'http://localhost:3000/api/users/' + id + '/favorite.json',
        {story_id: story_id},
        {
            headers: {
                "Content-Type": "application/json"
            }
        }
    );
}
