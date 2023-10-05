const db = require("./models");

// (async () => {
//     const heads = await db.Head.find();
//     heads.forEach(async (head) => {
//         const result = await db.Mark.updateMany(
//             { hid: head.hid },
//             {
//                 $set: {
//                     head: head._id,
//                 },
//             }
//         );
//         console.log(result);
//     });
//     //process.exit();
// })();

// db.Student.find().then((students) => {
//     students.forEach(async (student) => {
//         let result = await db.Mark.updateMany(
//             { regno: student.regno },
//             {
//                 $set: {
//                     student: student._id,
//                 },
//             }
//         );
//         console.log(result);
//     });
// });

// (async () => {
//   const students = await db.Student.find();

//   students.forEach(async (student) => {
//     let ids = await db.Mark.find({ regno: student.regno });

//     //console.log(ids);

//     let result = await db.Student.updateOne(
//       { regno: student.regno },
//       {
//         $push: {
//           marks: ids,
//         },
//       }
//     );
//     console.log(result);
//   });
// })();

// db.Student.find()
//   .populate({
//     path: "marks",
//     match: { marks: { $gt: 10 } },
//     select: { marks: 1, _id: 0 },
//   })
//   .then((courses) => console.log(JSON.stringify(courses, null, 4)))
//   .then(() => process.exit());

// db.Mark.find()
//     .then((res) => console.log(JSON.stringify(res, null, 4)))
//     .then(() => process.exit());

db.Student.aggregate([
    { $lookup: { from: "marks", foreignField: "regno", localField: "regno", as: "obtain" } },
    { $unwind: "$obtain" },
    { $group: { _id: { regno: "$regno", name: "$name" }, total: { $sum: "$obtain.marks" } } },
    { $project: { _id: 0, regno: "$_id.regno", name: "$_id.name", total: 1 } },
])
    .then((res) => console.log(JSON.stringify(res, null, 4)))
    .then(() => process.exit());
//0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789
