const router = require("express").Router();
const axios = require("axios")

router.get('/', async (req, res, next) => {
    try {
      const apiUrl = 'http://marcconrad.com/uob/tomato/api.php';
      const response = await axios.get(apiUrl);
      res.json(response.data)
    } catch (error) {
      next(error);
    }
  });

module.exports = router