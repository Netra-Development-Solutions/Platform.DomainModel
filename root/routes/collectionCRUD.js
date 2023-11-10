const { CreateActionHandler } = require('../services/CollectionCRUD/create');

const routesConfig = [
    {
        method: 'post',
        path: '/create',
        service: CreateActionHandler,
        middleware: [],
        inputSchema: {
            key: "CreateCollectionSchema",
            version: "1"
        },
        description: "Create Collection"
    }
];

module.exports = routesConfig;