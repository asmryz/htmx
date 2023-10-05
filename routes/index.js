const router = require('express').Router();
const db = require('../models');

router.get('/', (req, res)=>{
    res.render('index.html');
});

router.get('/list', (req, res)=>{
    db.Course.find().sort({ courseid: 1 })
    .then(courses => res.render('list.vash', { courses }))  
})

router.post('/edit', (req, res)=>{
    //let courseid = req.body.courseid;
    db.Course.find({ courseid: Number(req.body.courseid) })
    .then(course => {
        console.log(course[0])
        res.render('edit.vash', { course: course[0] })
    })  
})

router.get('/save', (req, res)=>{
    console.log(req.query)
    res.send(`<pre>${JSON.stringify(req.query)}</pre>`)
    //res.end();
    //let courseid = req.body.courseid;
    // db.Course.find({ courseid: Number(req.body.courseid) })
    // .then(course => {
    //     console.log(course[0])
    //     res.render('edit.vash', { course: course[0] })
    // })  
})


module.exports = router;