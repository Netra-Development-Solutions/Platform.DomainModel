const mongoose = require('mongoose');

const DomainModelSchema = new mongoose.Schema({
    application: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ApplicationModel',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    schema: {
        type: Object,
        required: true
    },
    version: {
        type: Number,
        required: true
    },
}, {
    strict: false
});

const DomainModel = mongoose.model('DomainModel', DomainModelSchema);

module.exports = DomainModel;