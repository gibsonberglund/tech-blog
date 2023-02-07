//MIGHT NOT NEED THIS FILE AT ALL



const router = require('express').Router();
const { Post, User, Comment } = require('../models');

// GET a single post
router.get('/:id', async (req, res) => {
    try {
      const commentData = await Comment.findByPk(req.params.id, {
        include: [{ model: Comment }],
      });
  
      if (!commentData) {
        res.status(404).json({ message: 'No comment found with that id!' });
        return;
      }
  
      res.status(200).json(commentData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// CREATE a post
router.post('/', (req, res) => {
    // Use Sequelize's `create()` method to add a row to the table
    // Similar to `INSERT INTO` in plain SQL
    Comment.create({
      text: req.body.text,
      user_name: req.body.user_name,
    })
      .then((newComment) => {
        // Send the newly created row as a JSON object
        res.json(newComment);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  