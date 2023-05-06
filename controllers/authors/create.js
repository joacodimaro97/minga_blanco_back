import Author from '../../models/Author.js'
import Auth from '../../models/Auth.js'

let create = async(req, res, next) => {
    console.log(req.user)
    try {
        await Auth.findOneAndUpdate(
            {_id: req.user._id},
            {role: 1}
        )
        let one = await Author.create(req.body)
        return res.status(201).json({
            name: one.name,
            last_name: one.last_name,
            city: one.city,
            date: one.date,
            photo: one.photo,
            active: 'true',
        })
    } catch (error) {
        console.log(error)
        next(error)
    }
}
export default create