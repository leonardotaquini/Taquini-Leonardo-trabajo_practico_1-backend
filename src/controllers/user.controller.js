import { User } from '../models/index.js';

 const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error.message });
    }
}

export {createUser};