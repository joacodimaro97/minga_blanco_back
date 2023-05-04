import joi from "joi";


export const userGetSignUp = joi.object({

name: joi.string().messages({
    'any.empty' : 'campo vacio'
}),   
    
email: 
    joi.string()
    .required()
    .email({minDomainSegments: 2})
    .messages({
        'any.required': 'EMAIL_REQUIRED',
        'string.empty': 'EMAIL_REQUIRED',
        'string.email': 'INVALID_EMAIL',
        'string.min': 'PASSWORD_TOO_SHORT',
    }),
password: 
    joi.string()
    .required()
    .min(8)
    .messages({
        'any.required': 'PWD_REQUIRED',
        'string.empty': 'PWD_REQUIRED',
        'string.min': 'PWD_TOO_SHORT',
    }),
photo: 
    joi.string()
    .required()
    .uri()
    .messages({
        'any.required': 'PHOTO_REQUIRED',
        'string.empty': 'PHOTO_REQUIRED',
        'string.uri': 'INVALID_PHOTO_URI',
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
        'any.required': 'EMAIL_REQUIRED',
        'string.empty': 'EMAIL_REQUIRED',
        'string.email': 'INVALID_EMAIL',
        'string.min': 'PASSWORD_TOO_SHORT',
    }),
password: 
    joi.string()
    .required()
    .min(8)
    .messages({
        'any.required': 'PWD_REQUIRED',
        'string.empty': 'PWD_REQUIRED',
        'string.min': 'PWD_TOO_SHORT',
    }),


})



