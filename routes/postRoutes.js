const router = require('express').Router();
const Post = require('../models/Post');
const User = require('../models/User');


// GET full list of posts
router.get('/', async (req, res) => {
    // Get all posts from the post table
    const postData = await Post.findAll();
  
    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));

    //res.status(200).json(postData);
    res.render('blogpage', {posts});
  });


// GET a single post
//needs to be async?
router.get('/:id', async (req, res) => {
    // Find a single book by its primary key (book_id)
    const postData = await Post.findByPk(req.params.id).then((postData) => {
      res.status(200).json(postData);
      
    });

    res.json(postData);
      return res.render('partials/blogthumb', postData);
  });

// CREATE a post
router.post('/', (req, res) => {
    // Use Sequelize's `create()` method to add a row to the table
    // Similar to `INSERT INTO` in plain SQL
    Post.create({
      post_id: req.body.id,
        title: req.body.title,
      content: req.body.text,
      username: req.body.username,
    })
      .then((newPost) => {
        // Send the newly created row as a JSON object
        res.json(newPost);
        //return res.render('./views/partials/blogthumb', newPost);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  
  module.exports = router;