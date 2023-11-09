const routesConfig = [
    {
        method: 'post',
        path: '/updateApplicationModel',
        service: require('../services/ApplicationModel/saveModel').saveModel,
        middleware: [],
        inputSchema: {
            key: "ApplicationModel",
            version: "1"
        },
        description: "Save Application Model"
    }, 
    {
        method: 'get',
        path: '/getApplicationModel',
        service: require('../services/ApplicationModel/getApplication').getApplication,
        middleware: [],
        inputSchema: {
            key: "GetApplicationModel",
            version: "1"
        },
        description: "Get Application Model"
    }
]

module.exports = routesConfig