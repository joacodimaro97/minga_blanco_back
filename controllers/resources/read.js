import Resource from "./../../Models/Resource.js";

let read = async (req, res, next) => {
    try {
        let all = await Resource.find();
        if(all.length > 0){
            return res.status(200).json({ 
                resources: all });
        }
        return next(404, 'The resource has not been found' )
        
    } catch (error) {
        console.log(error);
       next(error)
    }
};

export default read;