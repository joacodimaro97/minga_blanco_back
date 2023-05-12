import Author from "../../models/Author.js"


let read = async(req,res,next)=>{
    try{
        let all = await Author.find()
        return res.status(200)
        .json({
            authors: all
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