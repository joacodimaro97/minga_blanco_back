

let controller = async (req, res, next, app) => {
    try {
        res.send('<h1>Hello world</h1>');
        const server = app.listen(3000, () => {
            console.log('listening on *:3000');
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

export default controller;