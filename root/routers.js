const routers = [
    {
        path: '/api/applicationModel',
        router: require('./routes/applicationModelCRUD')
    }, {
        path: '/api/domainModel',
        router: require('./routes/domainModelCRUD')
    }, {
        path: '/api/collection',
        router: require('./routes/collectionCRUD')
    }
]

module.exports = routers;