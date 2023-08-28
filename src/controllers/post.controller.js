import { where } from 'sequelize';
import { User, Comment, Post } from '../models/index.js';

const getAll = async(req, res) => {
    try {
        const posts = await Post.findAll();
        res.status(200).json(posts)
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: error.message});
    }
}

const getPostById = (req, res) => {
    try {
        const { id } = req.params; 
        const post = Post.findOne({ where: { id } });
        if (!post){
            return res.status(404).json({msg: 'No se encontro el post'});
        }
        return res.status(200).json();     
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error.message});
    }
}

const createPost = async(req, res) => {
    try {
        const post = await Post.create(req.body);
        res.status(201).json(post)
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: error.message});
    }
}

const updatePost = (req, res) => {
    try {
        const { id } = req.params;
        res.status(200).json({msg: `post ${id} updated`})
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: error.message});
    }
}

const deletePost = (req, res) => {
    try {
        const { id } = req.params;
        res.status(200).json({msg: `post ${id} deleted`})
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
    deletePost
}