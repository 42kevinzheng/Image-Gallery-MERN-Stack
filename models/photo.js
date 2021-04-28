import mongoose from 'mongoose';

const photoSchema = mongoose.Schema({
    title: String,
    creator: String,
    message: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type:Number,
        default:0
    },
    createdAt: {
        type:Date,
        default: new Date()
    },

});

const postPhotos = mongoose.model('Photo', photoSchema);

export default postPhotos;