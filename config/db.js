const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'studentdb'
})

db.connect((err) =>{
    if(err){
        console.log('Error con la conexión a la base de datos');
        return
    }
    console.log('Conexion exitosa a la base de datos');
});


module.exports = db;

