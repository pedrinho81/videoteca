
const { validate: isUuid } = require("uuid")
const Video = require("../models/Videos")

module.exports = {
    async validateId(req, res, next) {
        const { id } = req.params;

        if(!isUuid(id)) {
            return res.status(400).json({error: "Invalid Id."})
        }

        try {
            const video = await Video.findById(id)
            res.video = video;
        } catch(err) {
            return res.status(500).json({error: err.message}) 
        }

        next();
    }, 
};