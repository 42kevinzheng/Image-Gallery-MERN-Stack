import express from 'express';
import {getPhotos, createPhoto, updatePhoto} from '../controllers/photos.js';


const router = express.Router();

// All Photos Route
router.get('/', getPhotos);

// Create Photo Route
router.post('/', createPhoto);

// Update Photo Route
router.patch('/:id', updatePhoto);

// // Delete Photo Route
// router.delete('/:id', deletePhoto);


export default router;