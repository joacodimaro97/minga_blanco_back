import Category from './../../models/Category.js'


let read = async(req,res,next)=>{
    try{
        let all = await Category.find()
        return res.status(200)
        .json({
          success: 'ok',
          response: all
        })
    }catch(error) {
        console.log(error)
        return res.status(400)
        .json({
            error: 'ha ocurrido un error'
        })
    }
}

export default read