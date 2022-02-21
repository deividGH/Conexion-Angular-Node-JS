const { Router } = require('express');
const router = Router();
const DB = require('../config/config');

router.get('/', (req, res) => {
    res.status(200).json({
        message: "Ruta /fromoracle funcionando correctamente"
    })
})

//Creando la ruta
router.get('/api/fromoracle', async (req, res) => {
    const personas = [];
    sql = "SELECT * FROM PERSONAS";

    let result = await DB.Open(sql, [], false);
    console.log(result.rows)//imprime la informacion desde la base de datos
    console.log(personas)
    result.rows.map(person => {
        let userSchema = {
            "ID": person[0],
            "NOMBRE": person[1],
            "APELLIDO": person[2],
            "CORREO": person[3],
        }
        personas.push(userSchema)
    });
    res.json({ personas });
})

module.exports = router