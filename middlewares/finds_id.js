import Author from '../models/Author.js'

let finds_id = async(req,res,next) => {
 const author = await Author.findOne({author_id: req.user.id})
 if(author){
  req.body.author_id = Author
  return next()
 }
 return res.status(401).json({ message: 'Author not found' })
}

export default finds_id