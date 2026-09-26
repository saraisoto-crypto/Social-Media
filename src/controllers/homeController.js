import postService from "../services/postService.js";
import userRepository from "../repositories/userRepository.js";

class HomeController {
    async index(req, res) {
        try {
            const posts = await postService.getPosts();
            const users = await userRepository.findAll();
            res.render("home", { postCount: posts.length, userCount: users.length });
        } catch (error) {
            res.render("home", { postCount: 0, userCount: 0 });
        }
    }
}

export default new HomeController();