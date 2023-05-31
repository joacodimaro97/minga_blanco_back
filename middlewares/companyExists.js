import Company from "../models/Company.js";

async function companyExist(req,res,next) {
    const company = await Company.findOne({user_id: req.user.id})
    if(company) {
        return res.status(400).json({error:'Company already exist'})
    } return next()
}

export default companyExist