const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', withAuth, async (req, res) => {
    try {
console.log('homeroute 1');
      const postData = await Post.findAll({
        include: [
          {
            model: User,
          },
        ],
    });
    console.log('homeroute 2');
      const posts = postData.map((post) => post.get({ plain: true }));
      console.log('homeroute 3');
      res.render('blogpage', {posts,
        loggedIn: req.session.loggedIn});
    } catch (err) {
      console.log('catching error');
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

      const userData = await User.findAll({});

    console.log('try 2');

    //WHY IS THIS BREAKING DOWN
      const user = userData.get({ plain: true });


      console.log('try 3');
      res.render('profile', {
        ...user,
        logged_in: true
      });
    } catch (err) {
      console.log('catch the error');
      res.status(500).json(err);
    }
  });

module.exports = router;