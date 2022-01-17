import React from 'react'

const Routines = () => {
    return <div>Welcome to the Routines Page.</div>
}

// module.exports = function (app) {
//     app.get("api/routines", (req, res) => {
//         db.routines.find({})
//             .poplate("routines")
//             .then(dbRoutine => {
//                 res.json(dbRoutine)
//             })
//             .catch(err => {
//                 res.json(err);
//             })
//     });
    
//     app.post("/api/routines", (req, res) => {
//         db.Routines.create({ day: Date.now})
//         .then(routine => {
//             res.json(routine);
//         }).catch(err => {
//             res.json(err);
//         })
//     })
// }

export default Routines;