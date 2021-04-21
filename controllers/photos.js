import PostPhotos from '../models/photo.js';

// // All Users Route
export const getPhotos = async(req, res) => {
    try{
        const postPhotos = await PostPhotos.find();

        res.status(200).json(postPhotos);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}


// Create Photo Route
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


// Update Photo Route
export const updatePhoto = async (req, res ) => {
    const {id} = req.params;

    const photo = req.body;

    const updatedPhoto = await PostPhotos.findByIdAndUpdate(id, photo);

    res.json(updatedPhoto);
}

// // Delete Photo Route
// export const deletePhoto = async (req, res) => {
//     const { id } = req.params;


//     await PostMessage.findByIdAndRemove(id);

//     res.json({ message: "Post deleted successfully." });
// }