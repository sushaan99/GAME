const router = require('express').Router();

router.get('/', (req, res)=>{
    res.render("login")
})

router.get('/signup', (req, res)=>{
    res.render("register")
})

router.get('/home', (req, res)=>{
    res.render("index")
})

module.exports = router;