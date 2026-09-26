import postService from "../services/postService.js";
import userRepository from "../repositories/userRepository.js";

class PostController {
    async getAll(req, res) {
        try {
            const posts = await postService.getPosts();
            res.render("posts", { posts });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async showCreateForm(req, res) {
        try {
            const users = await userRepository.findAll();
            res.render("post-form", { post: null, users });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async create(req, res) {
        try {
            const { userId, hashtags, ...postData } = req.body;
            const parsedHashtags = hashtags
                ? hashtags.split(",").map(h => h.trim()).filter(Boolean)
                : [];
            await postService.createPost(userId, { ...postData, hashtags: parsedHashtags });
            res.redirect("/posts");
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async showEditForm(req, res) {
        try {
            const { id } = req.params;
            const post = await postService.getPostById(id);
            const users = await userRepository.findAll();
            res.render("post-form", { post, users });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            const { hashtags, ...postData } = req.body;
            const parsedHashtags = hashtags
                ? hashtags.split(",").map(h => h.trim()).filter(Boolean)
                : [];
            await postService.updatePost(id, { ...postData, hashtags: parsedHashtags });
            res.redirect("/posts");
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            await postService.deletePost(id);
            res.redirect("/posts");
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

export default new PostController();