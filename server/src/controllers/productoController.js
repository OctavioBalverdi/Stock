const connection = require('../models/db')
const multer=require('multer')
const path = require('path')

const almacenamientoTemporal= multer.almacenamientoTemporal({
    destination: path.join(__dirname,'../imagenes'),
    filename: (req,avatar,callBack)=>{{
        callBack(null,Date.now()+'-berry-'+ avatar.originalname)
    }}
})

const avatarSubir= multer({storage: almacenamientoTemporal}).single('avatar')



module.exports.saveProduct = (req, res) =>{
    const {nombre, avatar} = req.body;
    console.log(req.body)
    alert("si llego rey")
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