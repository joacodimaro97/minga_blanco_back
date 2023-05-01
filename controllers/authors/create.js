import Author from '../../models/Author.js'

let create = async(req, res, next) => {
    try {
        console.log(req.body)
        let one = await Author.create(req.body)
        return res.status(201).json({
            name: one.name,
            last_name: one.last_name,
            city: one.city,
            date: one.date,
            photo: one.photo,
        })
    } catch (error) {
        console.log(error)
        next(error)
    }
}
export default create