const mongoose = require("mongoose")

const VideoSchema = mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    liked: {
        type: Boolean,
        default: true 
    },  
});

module.exports = mongoose.model("Video", VideoSchema);