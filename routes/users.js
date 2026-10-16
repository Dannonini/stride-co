const express = require('express');
const router = express.Router();

const controller = require ('../controllers/users');

/* Post user create*/
router.post('/', controller.create);

/* GET users listing. */
router.get('/', controller.list );

/* Get user by id*/

router.get('/:id', controller.find);

/*put user to update*/
router.put('/:id', controller.update);

/*delete user by id*/
router.delete('/:id', controller.destroy); 

module.exports = router;
