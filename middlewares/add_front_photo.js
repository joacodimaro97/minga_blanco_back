async function add_front_photo (req,res,next) {
    if(!req.body.cover_photo){
        req.body.cover_photo = ''
    }
    console.log(req.body.cover_photo)
    return next()
}
export default add_front_photo