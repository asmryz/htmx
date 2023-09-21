const router = require('express').Router();

router.get('/', (req, res)=>{
    res.render('index.html');
})

router.get('/msg', (req, res)=>{
    res.render('message.vash',{msg: 'Hello World', });
})

module.exports = router;