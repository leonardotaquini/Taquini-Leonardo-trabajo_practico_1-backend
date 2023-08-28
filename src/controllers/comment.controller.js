import { User, Post, Comment } from "../models/index.js";

const createComment = async (req, res) => {
    try {
        const { userId } = req.body;
        const { postId } = req.body;

        const user = await User.findOne({ where: { id: userId } });
        const post = await Post.findOne({ where: { id: postId } });

        if(!user){
            return res.status(404).json({msg: 'User does not exist'});
        }

        if(!post){
            return res.status(404).json({msg: 'Post does not exist'});
        }

        const comment = await Comment.create(req.body);
        res.status(201).json(comment);
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error.message});
    }
}

export { createComment };