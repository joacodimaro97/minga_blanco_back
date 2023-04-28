import Author from '../../models/Author.js'

let create = async(req, res, next) => {
    try {
        let one = await Author.create(req.body)
        return res.status(201).json({
            author: one.name,
            success: true,
            timestamps: one.createdAt
        })
    } catch (error) {
        console.log(error)
        next(error)
    }
}
export default create