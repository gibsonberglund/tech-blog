const router = require('express').Router();
const { Post, User } = require('../models');


router.get('/', async (req, res) => {
    try {

      const postData = await Post.findAll({
        include: [
          {
            model: User,
            attributes: ['username'],
          },
        ],
    });

      const posts = postData.map((post) => post.get({ plain: true }));
      res.render('blogpage', {posts});
    } catch (err) {
      res.status(500).json(err);
    }
  });



router.get('/login', (req, res) => {
// If the user is already logged in, redirect the request to another route
    res.render('login');
});

// Use withAuth middleware to prevent access to route
router.get('/profile', async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      console.log('try 1');
      const userData = await User.findAll({
        include: [
          {
            model: Post,
            attributes: ['title'],
          },
        ],
    });
    console.log('try 2');
      const user = userData.map((user1) => user1.get({ plain: true }));
      console.log('try 3');
      res.render('profile', {user});
    } catch (err) {
      console.log('catch the error');
      res.status(500).json(err);
    }
  });

module.exports = router;