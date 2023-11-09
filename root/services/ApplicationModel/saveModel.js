const ApplicationModel = require('../../models/ApplicationModel');
const { v4: uuidv4 } = require('uuid');

const saveModel = async (req, res) => {
    try {
        const payload = req.body;
        payload._id = uuidv4();
        
        const applicationModel = new ApplicationModel(payload);
        await applicationModel.save();
        res.status(200).json({ message: 'Application model saved successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { saveModel };