import userRepository from "../repositories/userRepository.js";

class UserController {
    async showCreateForm(req, res) {
        res.render("user-form");
    }

    async create(req, res) {
        try {
            const { name, lastName, email, age, phoneNumber, password } = req.body;
            await userRepository.create({ name, lastName, email, age, phoneNumber, password });
            res.redirect("/posts/new");
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

export default new UserController();