const { hash } = require("bcryptjs");
const User = require("../models/User");

module.exports = {
    async getAll(req, res) {
        User.find({})
            .then(function (users) {
                res.send(users);
            })
            .catch(function (err) {
                if (err) {
                    throw new Error(err.message);
                }
            });
    },
    async get(req, res) {
        const {id} = req.params.id;
        const user = await User.find({ id });
        res.send(user);
    },
    async create(req, res) {
        const { email } = req.body;
        try {
            if (await User.findOne({ email })) {
                return res.status(400).send({ error: "User already exists!!" });
            }
            const user = await User.create(req.body);
            user.password = undefined;

            return res.send({ user });
        } catch (err) {
            return res.status(400).send({ error: "Registration failed!!" });
        }
    },
    async update(req, res) {
        try {
            let { name, email, password, image_url, updatedAt } = req.body;
            updatedAt = Date.now();
            password = await hash(password, 10);
            await User.updateOne(
                {},
                {
                    name,
                    email,
                    password,
                    image_url,
                    updatedAt,
                },
                { runValidators: true }
            );
            return res.send({ user: req.body });
        } catch (err) {
            console.error(err);
            res.send("Ocorreu uma falha ao atualizar cadastro!!");
        }
    },
    async delete(req, res) {
        try {
            await User.deleteOne(req.body.id);
            res.send("Usuário deletado com sucesso!!");
        } catch (err) {
            console.error(err);
            res.send("Ocorreu uma falhar ao deletar usuário!!");
        }
    },
};
