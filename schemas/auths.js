import joi from "joi";

const userGetSing = joi.object({
    
email: 
    joi.string()
    .required()
    .email({minDomainSegments: 2}),
password: 
    joi.string()
    .required(),
photo: 
    joi.string()
    .required()
    .uri(),
role: 
    joi.number()
    .optional(),
is_online: 
    joi.boolean()
    .optional(),
is_verified: 
    joi.boolean()
    .optional(),
verify_code: 
    joi.string()
    .optional()
})

export default userGetSing