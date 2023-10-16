const db = require("./models");

//db.Student.find().then((students) => console.log(students));

// Promise.all([
//     db.Registration.aggregate([
//         { $match: { $expr: { $eq: ["$_id", { $toObjectId: "652a3e345b21895ae827c133" }] } } },
//         { $lookup: { from: "courses", localField: "courseid", foreignField: "courseid", as: "course" } },
//         { $unwind: "$course" },
//         { $lookup: { from: "grades", localField: "gradeid", foreignField: "gradeid", as: "grade" } },
//         { $unwind: { path: "$grade", preserveNullAndEmptyArrays: true } },
//     ]),
//     db.Grade.find().sort("gradeid"),
//     db.Registration.aggregate([
//         { $match: { regno: "1112101", gradeid: { $ne: null } } },
//         { $lookup: { from: "courses", localField: "courseid", foreignField: "courseid", as: "course" } },
//         { $unwind: "$course" },
//         { $lookup: { from: "grades", localField: "gradeid", foreignField: "gradeid", as: "grade" } },
//         { $unwind: "$grade" },
//         {
//             $group: {
//                 _id: null,
//                 tcr: { $sum: "$course.crhr" },
//                 mcr: { $sum: { $multiply: ["$course.crhr", "$grade.gpa"] } },
//             },
//         },
//         { $project: { _id: 0, GPA: { $divide: ["$mcr", "$tcr"] } } },
//     ]),
// ]).then(([regs, grades, gpa]) => {
//     console.log(JSON.stringify([regs, grades, gpa[0]], null, 4));
// });

db.Course.aggregate([
    // { $match: { $expr: { $eq: ["$_id", { $toObjectId: "652a3e345b21895ae827c133" }] } } },
    {
        $lookup: {
            from: "registrations",
            localField: "courseid",
            foreignField: "courseid",
            pipeline: [{ $match: { regno: "1112102" } }],
            as: "reg",
        },
    },
    { $match: { semester: 1 } },
    { $unwind: { path: "$reg", preserveNullAndEmptyArrays: true } },
    //{ $match: { "reg.regno": "1112101" } },
])
    .sort("courseid")
    .then((regs) => {
        console.log(JSON.stringify(regs, null, 4));
    });
