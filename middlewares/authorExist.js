import Author from "../models/Author.js";

async function authorExist(req,res,next) {
    const author = await Author.findOne({user_id: req.user.id})
    if(author) {
        return res.status(400).json({error:'Author already exist'})
    } return next()
}

export default authorExist