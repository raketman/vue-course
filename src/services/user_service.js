import axios from 'axios'
import config from 'config';

export const userService = {
    login,
    fetch,
    favorite
};

function fetch(id) {
    return axios({
        method: 'get',
        url: config.apiUrl + '/api/users/' + id + '.json',
    });
}
function login(username, password) {
    return axios({
        method: 'get',
        url: config.apiUrl + '/api/users.json',
        params: {
            login: username,
            password: password
        }
    });
}

function favorite(id, story_id) {
    return axios.post(
        config.apiUrl + '/api/users/' + id + '/favorite.json',
        {story_id: story_id},
        {
            headers: {
                "Content-Type": "application/json"
            }
        }
    );
}
