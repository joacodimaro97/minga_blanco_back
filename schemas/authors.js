import joi from 'joi-oid'

export const authorCreate = joi.object({
        name: joi.string()
            .required()
            .messages({
                'any.required': 'Name is required.',
                'string.empty': 'Name is required.',
            }),
        last_name: joi.string()
            .required()
            .messages({
                'any.required': 'Last Name is required',
                'string.empty': 'Last Name is required',
            }),
        photo: joi.string()
            .uri()
            .messages({
                'any.required': 'Photo is required',
                'string.empty': 'Photo is required',
                'string.uri': 'Invalid photo URL'
            }),
        city: joi.string()
            .required(),
        date: joi.string()
            .required(),
        active: joi.boolean(),
       
})

