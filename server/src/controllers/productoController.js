const path = require('path');
const connection = require('../models/db')
const fs = require('fs')



module.exports.saveProduct = (req, res) =>{
    const { nombre } = req.body;
    const avatar = req.file;
    const data = fs.readFileSync(path.join(__dirname,'../imagenes/'+ req.file.filename))
    /*aqui se lee la imagen para poder mandarla a la base de datos 
    se usa el modulo fs(file system) y se guarda esa lectura en la 
    contante data(que va a ser el imagen a guardar en la DB
        la forma de LEER LA IMAGEN es fs(usa filesystem).readFileSync(
            metodo que recibe la ubicacion exacta de la carpeta
        )path(para declarar el camino(ruta del directorio).join(une el path)(_dirname(variable global que devuelve la ubicacion de la carpeta donde es llamada),../imagenes/(ubicacion de la carpeta)+ el nombre del archivo))
    )*/ 
    const consult = 'INSERT PRODUCTO (nombre, avatar) values (?,?)';
    try{
        connection.query(consult,[nombre,data],(err,result)=>{
            if(err){
                console.error(err)
                res.send(err);
            }else {
                console.log(result);
                res.send('Operación exitosa');
            }
            

        })
    }catch (error) {
        console.error(error);
        res.send(error);
    }
    
    
    
    
    /*console.log(req.body);
    console.log(nombre)
    console.log(avatar);
    console.log("si llego rey")*/
    /*const consult = 'INSERT INTO PRODUCTO VALUES (?,?)';
    try {
        if(nombre===''&& avatar===''){
            res.send({message: 'campos vacios'})
        }else{
            connection.query(consult, [nombre, avatar], (err, results)=>{

            if(err){
                res.send(err);
            }
  
            console.log(req.body)
            res.json(req.body)
        });}
        
    } catch (e) {
        

    }*/
}