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
        url: 'http://localhost:3000/api/proxy.json',
        params: {
            url: 'https://music.yandex.ru/handlers/metatag.jsx?id=%D0%B0%D1%83%D0%B4%D0%B8%D0%BE%D1%81%D0%BA%D0%B0%D0%B7%D0%BA%D0%B8&lang=ru'
        }
    }).then( result => {
        // Приведем к общей моделе
        resolve(result.data.metatag.tracks.map(function(item) {
            console.log(item);

            var minute = Math.floor(item.durationMs / 60000);
            var second = Math.floor((item.durationMs - minute * 60000) / 1000);

            return {
                id: item.id,
                url: 'https://music.yandex.ru/album/' + item.albums[0].id+'/track/' + item.id,
                duration: minute.toString().padStart(2, '0') + ':' + second.toString().padStart(2, '0'),
                title: item.title,
                desc:'',
                photo: null,
                rating:null,
                author: item.artists[0].name
            };
        }).filter(function (item) {return item != null}));
    });

    return promise;
}


