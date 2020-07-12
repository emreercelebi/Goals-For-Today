const router = module.exports = require('express').Router();


router.use('/users', require('../controllers/userController.js'));
router.use('/teams', require('../controllers/teamController'));
router.use('/goals', require('../controllers/goalController'));
router.use('/comments', require('../controllers/commentController'));

