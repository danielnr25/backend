const Student = require('../models/studentModel');


exports.getAllStudents = (req, res) => {
    Student.getAll((err,results)=>{
        if(err){
            return res.status(500).json({error: err.message})
        }
        res.json(results);
    })
};

exports.createStudent = (req,res) =>{
    const newStudent = req.body;
    Student.create(newStudent,(err, result) =>{
        if(err){
            return res.status(500).json({error: err.message})
        }
        res.json({message: 'Estudiante registrado', id: result.insertId});
    })
}


exports.updateStudent = (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
    Student.update(id, updatedData, (err) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Estudiante Actualizado' });
    });
};

exports.deleteStudent = (req,res) =>{
    const id = req.params.id;
    Student.delete(id,(err)=>{
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({message: 'Estudiante eliminado'});
    })
}