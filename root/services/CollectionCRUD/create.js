const DomainModel = require('../../models/DomainModel');
const mongoose = require('mongoose');

const { successResponse, errorResponse } = require('../../utils/response');

const CreateActionHandler = async (req, res) => {
    const { ModelName } = req.body;
    const model = await DomainModel.findOne({ name: ModelName });
    if (!model) {
        return errorResponse(res, 'Model not found', 404);
    }

    const Model = await GenerateModel(model);
    const { data } = req.body;
    const modelInstance = new Model(data);
    const result = await modelInstance.save();
    return successResponse(res, result, "Model created successfully", 201);
}

const GenerateModel = async (model) => {
    const { name, schema } = model;

    const ModelSchema = new mongoose.Schema(schema, {
        timestamps: true
    });

    const Model = mongoose.model(name, ModelSchema);

    return Model;
}

module.exports = { CreateActionHandler };