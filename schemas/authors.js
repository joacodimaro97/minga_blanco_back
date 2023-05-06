import joi from 'joi-oid'

export const authorCreate = joi.object({
        name: joi.string()
            .required()
            .messages({
                'any.required': 'NAME_REQUIRED',
                'string.empty': 'NAME_REQUIRED',
            }),
        last_name: joi.string()
            .required()
            .messages({
                'any.required': 'LAST_NAME_REQUIRED',
                'string.empty': 'LAST_NAME_REQUIRED',
            }),
        photo: joi.string()
            .uri()
            .messages({
                'any.required': 'PHOTO_REQUIRED',
                'string.empty': 'PHOTO_REQUIRED',
                'string.uri': 'INVALID_PHOTO_URL'
            }),
        city: joi.string()
            .required(),
        date: joi.string()
            .required(),
        active: joi.boolean(),
        user_id: joi.objectId()
            .required()
})

