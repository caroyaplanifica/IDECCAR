const router = require('express').Router();

router.get('/', (req, res) =>{
    res.render('index');
});

router.get('/', (req, res) =>{
    res.render('visualizador');
});

module.exports = router;