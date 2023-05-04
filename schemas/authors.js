import joi from 'joi-oid'

export const authorCreate = joi.object({
        name: joi.string()
            .required(),
        last_name: joi.string()
            .required(),
        photo: joi.string()
            .uri(),
        city: joi.string()
            .required(),
        date: joi.string()
            .required(),
        active: joi.boolean(),
        id: joi.string()
            .required()
})

