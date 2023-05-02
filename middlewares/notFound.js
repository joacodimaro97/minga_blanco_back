import createHttpError, { HttpError } from "http-errors";

const notFound = (req, res, next) =>{
    next(createHttpError( 404, 'Sorry, the rout does not exist'))
}

export default notFound