import Hobobo from './handlers/hobobo_handler'

export const objectService = {
    getList
};

function getList() {
    let promises = [];
    promises.push(Hobobo.getList);

    Promise.all(promises).then(result => {
        console.log('result');
    })
}

