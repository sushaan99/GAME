const router = require("express").Router();
const UserController = require("./user.controller");
const isAuthenticated = require("./user.auth")

router.post('/register', async (req, res, next)=>{
    try {
        const result = await UserController.create(req.body);
        return res.json({data: result, msg: "success"})
    } catch (error) {
        next(error)
    }
})

router.post("/login", isAuthenticated, async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) throw new Error("Email or password is missing");
        const result = await UserController.login(email, password);
        res.json({ data: result, msg: "success" });
    } catch (e) {
        next(e);
    }
});


module.exports = router;