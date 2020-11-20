"use strict";

const ClassRepository = require("../../repositories/ClassRepository")

module.exports = {
    async getAll(req, res, next) {
        await Base.getAll()
            .then(function (users) {
                res.status(201).send(users);
            })
            .catch(function (err) {
                console.log(err);
                res.status(500).send(err);
            });
    },
    async getById(req, res, next) {
        const { id } = req.params.id;
        try {
            const user = await Base.getById(id);
            return res.status(200).send(user);
        } catch (err) {
            console.log(err);
            return res.status(500).send(err);
        }
    },
    async create(req, res, next) {
        const { email } = req.body;
        try {
            if (await Base.getByEmail({ email })) {
                return res.status(400).send({ error: "User already exists!!" });
            }
            const user = await Base.create(req.body);
            user.password = undefined;

            return res.status(200).send({ user });
        } catch (err) {
            console.log(err);
            return res.status(400).send({ error: "Registration failed!!" });
        }
    },
    async delete(req, res) {
        try {
            await Base.delete(req.body.id);
            res.status(200).send("Usuário deletado com sucesso!!");
        } catch (err) {
            console.error(err);
            return res
                .status(500)
                .send("Ocorreu uma falhar ao deletar usuário!!");
        }
    },
    async update(req, res, next) {
        try {
            let { teacher, subject, students, updatedAt } = req.body;
            updatedAt = Date.now();
            await Base.update(req.params.id, req.body);
            return res.status(201).send({ user: req.body });
        } catch (err) {
            console.error(err);
            return res
                .status(500)
                .send("Ocorreu uma falha ao atualizar cadastro!!");
        }
    },
};
