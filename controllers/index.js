const router = require('express').Router();
const postRoutes = require('./api/postRoutes');
const homeRoutes = require('./homeRoutes');
//const userRoutes = require('./userRoutes');

router.use('/', homeRoutes);

router.use('/posts', postRoutes);
//router.use('/users', userRoutes);

module.exports = router;