var express = require('express');
var router = express.Router();
var user = require('./../controllers/user')

/* GET home page. */
router.post('/login', user.login);
router.post('/judge', user.judge);
router.post('/user', user.add);
router.get('/user', user.all);
router.delete('/user/:id', user.del);
router.put('/user/:id', user.edit);


module.exports = router;