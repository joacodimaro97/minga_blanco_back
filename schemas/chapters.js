import Joi from "joi";

//objeto de esquema Joi que define la forma de los datos de entrada que se espera para la creación de un capítulo:
export const createChapterSchema = Joi.object({
  manga_id: Joi.string()
  .min(4)
  .required()
  .message({
    "string.min": "manga_id required "
  }),

  title: Joi.string()
  .min(3)
  .max(35)
  .required(),
  cover_photo: Joi.string()
  .uri(),
  pages: Joi.array()
  .items(Joi.string().uri())
  .required(),
  order: Joi.number()
  .integer()
  .min(1)
  .required(),
});