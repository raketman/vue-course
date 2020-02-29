import Hobobo from './handlers/hobobo_handler'

export const objectService = {
    getList
};

function getList() {
    let promises = [];
    promises.push(Hobobo.getList());

    let resolve;
    let promise = new Promise((resolveFunc) => {
        resolve = resolveFunc;
    });

    Promise.all(promises).then(result => {
        let list = [];

        for (var i in result) {
            for (var j in result[i]) {
                list.push(result[i][j]);
            }

        }
        resolve(list);
    });

    return promise;
}

