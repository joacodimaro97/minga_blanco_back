import Author from '../../models/Author.js'
// import Auth from '../../models/Auth.js'

let create = async(req, res, next) => {
    try {
        // await Auth.findOneAndUpdate(
        //     {name: req.user.name},
        //     {role: 1}
        // )
        let one = await Author.create(req.body)
        return res.status(201).json({
            name: one.name,
            last_name: one.last_name,
            city: one.city,
            date: one.date,
            photo: one.photo,
            active: 'true',
            id: one.id
        })
    } catch (error) {
        console.log(error)
        next(error)
    }
}
export default create