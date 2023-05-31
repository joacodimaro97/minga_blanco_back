import Author from "../../models/Author.js";

let getOne = async (req, res, next) => {
  try {
    let id = req.params.id
    let author = await Author.findById(id).select("-__v  -updatedAt -_id -user_id -active")

    return res.status(200).json({
      success: true,
      response: author,
    });
  } catch (error) {
    next(error);
  }
};

export default getOne;
//corregir que author si el id es incorrecto no debe devolver succes true