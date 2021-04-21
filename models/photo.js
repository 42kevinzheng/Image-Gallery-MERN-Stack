import mongoose from 'mongoose';

const photoSchema = mongoose.Schema({
    title: String,
    user: String,
    discription: String,
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