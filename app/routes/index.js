const router = require("express").Router();
const { api } = require("../api/api");

router.get("/student/regno", async (req, res) => {
    console.log(req.query);
    const student = (await api.get(`/api/students/${req.query.regno}`)).data;
    const semesters = (await api.get(`/api/courses/semesters`)).data;

    const data = await api.get(`/api/registrations/${req.query.regno}`);
    let [regs, grades, gpa] = data.data;
    //console.log([regs, grades, gpa]);
    gpa = gpa === null ? { GPA: 0 } : gpa;
    res.render("student", { student, semesters, regs, grades, gpa });
});

router.get("/semetser/courses", async (req, res) => {
    console.log(req.query);
    const courses = await api.get(`/api/semetser/courses/${req.query.regno}/${req.query.semno}`);
    //console.log(courses.data)
    res.render("courses", { courses: courses.data });
});

router.post("/course/register", async (req, res) => {
    console.log(req.body);
    const courses = await api.post(`/api/courses/register`, { ...req.body });
    console.log(courses.data);
    const data = await api.get(`/api/registrations/${req.body.regno}`);
    let [regs, grades, gpa] = data.data;
    //console.log([regs, grades, gpa]);
    gpa = gpa === null ? { GPA: 0 } : gpa;
    res.render("register", { regs, grades, gpa, register: true });
    //res.end();
});

router.post("/registration/update", async (req, res) => {
    //console.log(req.body);
    const data = await api.post(`/api/registrations/update`, { ...req.body });
    const [regs, grades, gpa] = data.data;
    //console.log([regs, grades, gpa]);

    res.render("update", { regs, grades, gpa });
});

module.exports = router;
