import { User } from '../models/index.js';
import { hashPassword} from '../helpers/bcrypt.js';

 const createUser = async (req, res) => {
    try {
        const user = req.body;
        const { password } = req.body;
        const passwordHashed = await hashPassword(password);
        user.password = passwordHashed;
        const userCreated = await User.create(user);
        res.status(201).json(userCreated);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error.message });
    }
}

export {createUser};