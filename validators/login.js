const { compare } = require("bcryptjs");
const User = require("../models/User");

module.exports = {
    async validate(req, res, next) {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.send({
                user: req.body,
                error: "Usuário não cadastrado!!",
            });
        }

        const passed = await compare(password, user.password);

        if (!passed) {
            return res.send({
                user: req.body,
                error: "Senha Incorreta!!",
            });
        }
        res.send("Logado!!");
        req.user = user;
        next();
    },
};
