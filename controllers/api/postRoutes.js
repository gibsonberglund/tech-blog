const router = require('express').Router();
const { Post, User } = require('../../models');


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
    const postData = await Post.findByPk(req.params.id)

    const post = postData.get({ plain: true });
    
    res.render('singlepost', {post});
  });

// CREATE a post
router.post('/', (req, res) => {
    // Use Sequelize's `create()` method to add a row to the table
    // Similar to `INSERT INTO` in plain SQL
    console.log('creating post');
    try {
    const newPost = Post.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.user_id,
    });
      console.log('post created');
        // Send the newly created row as a JSON object
      res.status(200).json(newPost);
      console.log('post added to json');
        //return res.render('./views/partials/blogthumb', newPost);
      } catch(err) {
        console.log('catching error');
        res.json(err);
      }});
  
  module.exports = router;