import bcryptjs from 'bcryptjs'


function passwordIsOk(req, res, next){
    const db_pwd = req.user.password
    const form_pwd= req.body.password
    if(bcryptjs.compareSync(form_pwd,db_pwd)){
        return next()
    } return res.status(400).json({
        succes: false,
        message: 'Wrong credentials'
    })
}

export default passwordIsOk