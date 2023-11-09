const routers = [
    {
        path: '/api/applicationModel',
        router: require('./routes/applicationModelCRUD')
    }, {
        path: '/api/domainModel',
        router: require('./routes/domainModelCRUD')
    }
]

module.exports = routers;