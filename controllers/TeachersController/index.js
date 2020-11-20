"use strict";

const TeacherRepository = require("../../repositories/TeacherRepository");

module.exports = {
    async getAll(req, res, next) {
        await TeacherRepository.getAll()
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
            const user = await TeacherRepository.getById(id);
            return res.status(200).send(user);
        } catch (err) {
            console.log(err);
            return res.status(500).send(err);
        }
    },
    async create(req, res, next) {
        const { email } = req.body;
        try {
            if (await TeacherRepository.getByEmail({ email })) {
                return res.status(400).send({ error: "User already exists!!" });
            }
            const user = await TeacherRepository.create(req.body);
            user.password = undefined;

            return res.status(200).send({ user });
        } catch (err) {
            console.log(err);
            return res.status(400).send({ error: "Registration failed!!" });
        }
    },
    async delete(req, res) {
        try {
            await TeacherRepository.delete(req.body.id);
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
            await TeacherRepository.update(req.params.id, req.body);
            return res.status(201).send({ user: req.body });
        } catch (err) {
            console.error(err);
            return res
                .status(500)
                .send("Ocorreu uma falha ao atualizar cadastro!!");
        }
    },
};
