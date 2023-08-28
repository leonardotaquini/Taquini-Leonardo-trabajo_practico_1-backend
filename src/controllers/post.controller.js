import { User, Comment, Post } from '../models/index.js';

const getAll = async(req, res) => {
    try {
        const posts = await Post.findAll({
           include: User
        });
        res.status(200).json(posts)
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error.message});
    }
}

const getPostById = async (req, res) => {
    try {
        const { id } = req.params; 
        const post = await Post.findOne({ where: { id }, include: User });
        if (!post){
            return res.status(404).json({msg: 'No se encontro el post'});
        }
        return res.status(200).json(post);     
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error.message});
    }
}

const createPost = async(req, res) => {
    try {
        const { userId } = req.body;
        const user = await User.findOne({ where: { id: userId } });
        if(!user){
            return res.status(404).json({msg: 'User does not exist'});
        }
        const post = await Post.create(req.body);
        res.status(201).json(post);
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: error.message});
    }
}

const updatePost = async(req, res) => {
    try {
        const { id } = req.params;
        const { userId } = req.body;
        const user = await User.findOne({ where: { id: userId } });
        if(!user){
            return res.status(404).json({msg: 'User does not exist'});
        }
        const postUpdated = await Post.update(req.body, { where: { id } });
        if(postUpdated === 0){
            return res.status(404).json({msg: 'No se encontro el post'});
        }
        res.status(200).json({msg: 'Post updated'});
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: error.message});
    }
}

const deletePost = async(req, res) => {
    try {
        const { id } = req.params;
        const postDeleted = await Post.destroy({ where: { id } });
        if(postDeleted === 0){
            return res.status(404).json({msg: 'No se encontro el post'});
        }
        res.status(200).json({msg: `post ${id} deleted`})
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: error.message});
    }
}

const restorePost = async(req, res) => {
    try {
        const { id } = req.params;
        const postRestored = await Post.restore({ where: { id } });
        if(postRestored === 0){
            return res.status(404).json({msg: 'No se encontro el post'});
        }
        res.status(200).json({msg: `post ${id} restored`})
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: error.message});
    }
}

export { 
    getAll, 
    getPostById,
    createPost,
    updatePost,
    deletePost,
    restorePost
}