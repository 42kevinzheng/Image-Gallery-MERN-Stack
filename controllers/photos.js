import PostPhotos from '../models/photo.js';

// All Photos 
export const getPhotos = async(req, res) => {
    try{
        const postPhotos = await PostPhotos.find();

        res.status(200).json(postPhotos);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}


// Create Photo 
export const createPhoto = async (req, res) => {
    const { title, message, selectedFile, creator, tags } = req.body;

    const newPostMessage = new PostPhotos({ title, message, selectedFile, creator, tags })

    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


// Update Photo 
export const updatePhoto = async (req, res ) => {
    const {id} = req.params;

    const photo = req.body;

    const updatedPhoto = await PostPhotos.findByIdAndUpdate(id, {...photo, id}, {new:true});

    res.json(updatedPhoto);
}

// Delete Photo 
export const deletePhoto = async (req, res) => {
    const { id } = req.params;

    await PostPhotos.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}