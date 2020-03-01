module.exports = {
    configureWebpack: {
        externals: {
            // global app config object
            config: JSON.stringify({
                apiUrl: 'http://localhost:3000'
            })
        }
    }
};
