import Author from "../../models/Author.js"


let create = async(req, res, next) => {
    console.log(req.user)
    console.log(req.body)
    try {
        req.body.user_id = req.user.id
        let one = await Author.create(req.body)
        return res.status(201).json({
            name: one.name,
            last_name: one.last_name,
            city: one.city,
            date: one.date,
            photo: one.photo,
            active: one.active,
        })
    } catch (error) {
        console.log(error)
        next(error)
    }
}
export default create