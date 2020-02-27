import axios from 'axios'

export const hoboboHandler = {
    getList
};

function getList() {
    let promise = new Promise()

    axios.get('https://www.hobobo.ru/api/noindex/4').then( result => {
        console.log(result);

        promise.resolve(result);
    });

    return promise;
}


