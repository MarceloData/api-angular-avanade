const Teacher = require("../models/Teacher");

module.exports = {
    async getAll(req, res) {
        Teacher.find({})
            .then(function (teachers) {
                res.send(teachers);
            })
            .catch(function (err) {
                if (err) {
                    throw new Error(err.message);
                }
            });
    },
    async get(req, res) {
        const { id } = req.params.id;
        const teacher = await Teacher.find({ id });
        res.send(teacher);
    },
    async create(req, res) {
        const { email } = req.body;
        try {
            if (await Teacher.findOne({ email })) {
                return res
                    .status(400)
                    .send({ error: "teachers already exists!!" });
            }
            const teachers = await Teacher.create(req.body);

            return res.send({ teachers });
        } catch (err) {
            return res.status(400).send({ error: "Registration failed!!" });
        }
    },
    async update(req, res) {
        try {
            let {
                name,
                age,
                gender,
                email,
                subject,
                image_url,
                updatedAt,
            } = req.body;
            updatedAt = Date.now();
            await Teacher.updateOne(
                {},
                {
                    name,
                    age,
                    gender,
                    email,
                    subject,
                    image_url,
                    updatedAt,
                },
                { runValidators: true }
            );
            return res.send({ teachers: req.body });
        } catch (err) {
            console.error(err);
            res.send("Ocorreu uma falha ao atualizar cadastro!!");
        }
    },
    async delete(req, res) {
        try {
            await Teacher.deleteOne(req.body.id);
            res.send("Usuário deletado com sucesso!!");
        } catch (err) {
            console.error(err);
            res.send("Ocorreu uma falhar ao deletar usuário!!");
        }
    },
};
