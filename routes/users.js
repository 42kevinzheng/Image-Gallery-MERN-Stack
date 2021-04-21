import express from 'express';
import {getUsers, createUser, updateUser, deletePhoto} from '../controllers/users.js';


const router = express.Router();

// All Users Route
router.get('/', getUsers);

// Create User Route
router.post('/', createUser);

// Update User Route
router.patch('/:id', updateUser);

router.delete('/:id', deletePhoto);



export default router;