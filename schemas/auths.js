import joi from "joi";


export const userGetSignUp = joi.object({

name: joi.string().messages({
    'string.empty': 'Name is empty'
}),   
    
email: 
    joi.string()
    .required()
    .email({minDomainSegments: 2})
    .messages({
        'any.required': 'Email is required',
        'string.empty': 'Email is empty',
        'string.email': 'Invalid email',
        'string.min': 'Email too short',
    }),
password: 
    joi.string()
    .required()
    .min(8)
    .messages({
        'any.required': 'Password is required',
        'string.empty': 'Password is empty',
        'string.min': 'Password is too short',
    }),
photo: 
    joi.string()
    .required()
    .uri()
    .messages({
        'any.required': 'Photo is required',
        'string.empty': 'Photo is empty',
        'string.uri': 'Invalid URL',
    }),
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

export const userGetSignIn = joi.object({
    email: 
    joi.string()
    .required()
    .email({minDomainSegments: 2})
    .messages({
        'any.required': 'Email is required',
        'string.empty': 'Email is empty',
        'string.email': 'Sorry, invalid email',
        
    }),
password: 
    joi.string()
    .required()
    .min(8)
    .messages({
        'any.required': 'Password is required',
        'string.empty': 'Password is empty',
        'string.min': 'Invalid password, too short',
    }),


})



