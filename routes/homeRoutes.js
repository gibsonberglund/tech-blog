const router = require('express').Router();
const Post = require('../models/Post');
const User = require('../models/User');

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
              {
                attributes: ['username'],
              }
          ]});

      const posts = postData.map((post) => post.get({ plain: true }));

      res.render('blogpage', posts);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
module.exports = router;