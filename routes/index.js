const router = require("express").Router();
const db = require("../models");

router.get("/", (req, res) => {
    res.render("index.html");
});

router.get("/list", (req, res) => {
    db.Course.find()
        .sort({ courseid: 1 })
        .then((courses) => res.render("list.vash", { courses }));
});

router.get("/doit", (req, res) => {
    //db.Course.find().sort({ courseid: 1 }).then((courses) => res.render("list.vash", { courses }));
    console.log(`Enter Clicked >> ${JSON.stringify(req.query)}`);
    res.send(`<pre  style="margin: 0;">${req.query.regno}</pre>`);
});

router.post("/edit", (req, res) => {
    //let courseid = req.body.courseid;
    db.Course.find({ courseid: Number(req.body.courseid) }).then((course) => {
        console.log(course[0]);
        res.render("edit.vash", { course: course[0] });
    });
});

router.post("/save", async (req, res) => {
    console.log(req.query);
    let result = await db.Course.updateOne(
        { courseid: req.body.courseid },
        {
            $set: req.body,
        }
    );
    console.log(result);

    if (result.modifiedCount === 1) {
        res.render("update.vash", { course: { ...req.body } });
        //res.render("save.vash", { data: JSON.stringify(req.query, null, 4) });
    }
    //res.send(`<pre>${JSON.stringify(req.query)}</pre>`);
    //res.end();
    //let courseid = req.body.courseid;
    // db.Course.find({ courseid: Number(req.body.courseid) })
    // .then(course => {
    //     console.log(course[0])
    //     res.render('edit.vash', { course: course[0] })
    // })
});

module.exports = router;
