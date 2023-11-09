const routesConfig = [
    {
        method: 'post',
        path: '/updateDomainModel',
        service: require('../services/DomainModel/updateDomainModel').updateDomainModel,
        middleware: [],
        inputSchema: {
            key: "DomainModelSchema",
            version: "1"
        },
        description: "Save Domain Model"
    }
]

module.exports = routesConfig