const express   = require('express');
const router    = express.Router();
const models    = require('../db/models/index');

router.get('/', (req, res) =>{
    models.Blog
        .findAll()
        .then(blogs => {
            res.status(200).json(blogs);
        });
});

router.get('/featured', (req, res) => {
    models.Blog
        .findAll({ where: { featured: true } })
        .then(blogs => {
            res.status(200).json(blogs);
        });
});

router.get('/:id', (req, res) =>{
    models.Blog
        .findById(req.params.id)
        .then(blog => {
            if (blog) {
                res.json(blog);
            } else {
                res.status(404).send('Not found');
            }
        })
        .catch(err => {
            res.status(500).send(err);
        })
});

router.post('/', (req, res) =>{
    var obj = req.body;
    obj.authorId = req.query.authorId
    models.Blog
        .create(obj)
        .then(blogs => {
            res.status(201).json(blogs)
        });
});

router.put('/:id', (req, res) =>{
    models.Blog
        .findById(req.params.id)
        .then(blogs => {
            blogs.updateAttributes(req.body)
            res.status(204).json(blogs);
        });
});

router.delete('/:id', (req, res) => {
    models.Blog
        .destroy({
            where: {
                id: req.params.id
            }
        })
        .then(blog => {
            res.status(200).json(blog);
        })
        .catch(err => {
            res.status(404).send('Not found');
        });
});

module.exports = router;