const oracledb=require('oracledb')

db={
    user: 'usuario01',
    password: 'clave01',
    connectString: 'localhost:1521'
}

//Conexion con la base de datos
async function open(sql, binds, autoCommit){
    let con = await oracledb.getConnection(db)
    let result = await con.execute(sql, binds, {autoCommit})
    con.release();
    return result;
}

exports.Open = open
