const router = require('express').Router();

const dataRouter = require('../modules/tomato/data.api')
const userRouter = require('../modules/user/user.api')

router.use('/data', dataRouter);
router.use('/users', userRouter)

module.exports = router;