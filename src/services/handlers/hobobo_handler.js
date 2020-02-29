import axios from 'axios'


export default {
    getList
};

function getList() {

    let resolve;
    let promise = new Promise((resolveFunc) => {
        resolve = resolveFunc;
    });


    axios({
        method: 'get',
        url: 'https://www.hobobo.ru/api/noindex/4'
    }).then( result => {
        // Приведем к общей моделе
        resolve(result['data']['data'].map(function(item) {
            var match = item[0].match('<a href="(.+)" class="link link--underline">(.+)</a>');

            if (!match) {
                return null;
            }

            return {
                id: match[1],
                url: match[1],
                duration: item[2],
                title: match[2],
                desc:'',
                photo: null,
                rating:item[3],
                author: item[1]
            };
        }).filter(function (item) {return item != null}));
    });

    return promise;
}


