import PostPhotos from '../models/photo.js';

// // All Users Route
export const getUsers = async(req, res) => {
    try{
        const postPhotos = await PostPhotos.find();

        res.status(200).json(postPhotos);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}



export const createUser = async (req, res) => {
    const { title, message, selectedFile, creator, tags } = req.body;

    const newPostMessage = new PostPhotos({ title, message, selectedFile, creator, tags })

    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}



export const updateUser = async (req, res ) => {
    const {id:_id} = req.parms;

    const photo = req.body;
    if(mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No User with that id");

    const updatedPhoto = await PostPhotos.findByIdAndUpdate(_id, photo, {new: true});

    res.json(updatedPhoto);
}
