
const validator = (schema)=> [
    (req, res, next)=>{
        const validation = schema.validate(req.body, {abortEarly:false}) //abortearly tira todos los errores de una
        if(validation.error){
            console.log(validation.error)
            return res.status(400).json({
                succes:false,
                message: validation.error.details.map(error=>error.message)
            }) 
       }
       return next()
    } 
]

export default validator