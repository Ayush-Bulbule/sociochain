const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    likes: {
        type: Number,
        default: 0

    },
    dislikes: {
        type: Number,
        default: 0
    },
    comments: {
        type: Array,
        default: ""
    },
    flags: {
        type: Number,
        default: 0
    }
});

module.exports = Post = mongoose.model('post', postSchema)


