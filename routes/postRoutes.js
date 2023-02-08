const router = require('express').Router();
const Post = require('../models/Post');


// GET full list of posts
router.get('/', async (req, res) => {
    // Get all books from the book table
    const postData = await Post.findAll().then((postData) => {
      res.json(postData);
    });
  
    res.status(200).json(postData);
  });


// GET a single post
//needs to be async?
router.get('/:id', async (req, res) => {
    // Find a single book by its primary key (book_id)
    const postData = await Post.findByPk(req.params.id).then((postData) => {
      res.status(200).json(postData);
    });
    res.json(postData);
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