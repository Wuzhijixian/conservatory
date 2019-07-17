var express = require('express');
var router = express.Router();
var user = require('./../controllers/user')

/* GET home page. */
router.get('/verifyUser', user.verifyUser);
router.post('/addUser', user.addUser);
router.get('/getallUser', user.getallUser);
router.delete('/deleteUser/:id', user.deleteUser);
router.put('/editUser/:id', user.editUser);


module.exports = router;