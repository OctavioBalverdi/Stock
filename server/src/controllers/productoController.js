const connection = require('../models/db')

module.exports.saveProduct = (req, res) =>{
    const {nombre, avatar} = req.body;
    const consult = 'INSERT INTO PRODUCTO VALUES (?,?)';
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
        

    }
}