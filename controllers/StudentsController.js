const Student = require("../models/Student");

module.exports = {
    async getAll(req, res) {
        Student.find({})
            .then(function (students) {
                res.send(students);
            })
            .catch(function (err) {
                if (err) {
                    throw new Error(err.message);
                }
            });
    },
    async get(req, res) {
        const { id } = req.params.id;
        const student = await Student.find({ id });
        res.send(student);
    },
    async create(req, res) {
        const { email } = req.body;
        try {
            if (await Student.findOne({ email })) {
                return res
                    .status(400)
                    .send({ error: "student already exists!!" });
            }
            const student = await Student.create(req.body);

            return res.send({ student });
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
                grade,
                image_url,
                updatedAt,
            } = req.body;
            updatedAt = Date.now();
            await Student.updateOne(
                {},
                {
                    name,
                    age,
                    gender,
                    email,
                    grade,
                    image_url,
                    updatedAt,
                },
                { runValidators: true }
            );
            return res.send({ student: req.body });
        } catch (err) {
            console.error(err);
            res.send("Ocorreu uma falha ao atualizar cadastro!!");
        }
    },
    async delete(req, res) {
        try {
            await Student.deleteOne(req.body.id);
            res.send("Usuário deletado com sucesso!!");
        } catch (err) {
            console.error(err);
            res.send("Ocorreu uma falhar ao deletar usuário!!");
        }
    },
};
