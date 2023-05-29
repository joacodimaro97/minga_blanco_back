import Author from '../models/Author.js'
import Company from '../models/Company.js'

const findsId = async (req, res, next) => {


  try {
    
    const author = await Author.findOne({ user_id: req.user.id })
    if (author) {
      req.body.author_id = author._id
      return next()
    }

   
    const company = await Company.findOne({ user_id: req.user.id })
    if (company) {
      req.body.company_id = company._id
      return next()
    }
    return res.status(404).json({ message: 'Author or company not found' })
  } catch (err) {
    console.error(err)
  }
}

export default findsId







