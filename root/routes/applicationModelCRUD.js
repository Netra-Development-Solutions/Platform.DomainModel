const routesConfig = [
    {
        method: 'post',
        path: '/',
        service: require('../services/ApplicationModel/saveModel').saveModel,
        middleware: [],
        inputSchema: {
            key: "ApplicationModel",
            version: "1"
        },
        description: "Save Application Model"
    }
]

module.exports = routesConfig