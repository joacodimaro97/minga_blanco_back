const errorHandler = (req, res, next) => {
    console.log(err.stack)
    return  res
    .status(err.status || 500)
    .json({
        status: err.status,
        message: err.message,
    })
}

export default errorHandler

//err.status es el error 404 de notfound.js
//err.message es el mensaje de error de notfound.js
