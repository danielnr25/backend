const db = require("../config/db");


const Student = {
    getAll: (callback) =>{
        const sql = 'SELECT * FROM students WHERE deleted_at IS NULL';
        db.query(sql, callback);
    },
    create:(studentData, callback) =>{
        const sql = 'INSERT INTO students (firstname, lastname, age,profession) VALUES (?,?,?,?)';
        db.query(sql,[studentData.firstname, studentData.lastname, studentData.age, studentData.profession],callback);

    },
    update:(id,studentData,callback) =>{
        const sql = 'UPDATE students SET firstname = ?, lastname = ?, age = ?, profession = ? WHERE id = ?';
        db.query(sql,[studentData.firstname,studentData.lastname, studentData.age, studentData.profession,id], callback);
    },
    delete: (id,callback) =>{
        const sql = "DELETE FROM students WHERE id = ?";
        db.query(sql,[id], callback);
    }
}

module.exports = Student;