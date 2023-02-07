const router = require('express').Router();
const Post = require('../models/Post');


// GET full list of posts
router.get('/', (req, res) => {
    // Get all books from the book table
    const postData = Post.findAll().then((postData) => {
      res.json(postData);
    })
    if (!postData) {
        res.status(404).json({ message: 'No posts found!' });
        return;
    }
  
    res.status(200).json(postData);
  });


// GET a single post
//needs to be async?
router.get('/:id', (req, res) => {
    // Find a single book by its primary key (book_id)
    const postData = Post.findByPk(req.params.id).then((postData) => {
      res.json(postData);
    });
    if (!postData) {
    res.status(404).json({ message: 'No post found with that id!' });
    return;
    }

    res.status(200).json(postData);
  });

// CREATE a post
router.post('/', (req, res) => {
    // Use Sequelize's `create()` method to add a row to the table
    // Similar to `INSERT INTO` in plain SQL
    Post.create({
      post_id: req.body.id,
        title: req.body.title,
      content: req.body.text,
      user_name: req.body.user_name,
    })
      .then((newPost) => {
        // Send the newly created row as a JSON object
        res.json(newPost);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  
  module.exports = router;