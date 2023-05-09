import Chapter from '../../models/Chapter.js' 

let getOne = async (req, res,next) => {
    
  try {
    let chapterId = await Chapter.findOne({_id:req.params.id},'pages -_id')
    if (chapterId){
      return res.status(200).json({
        response: chapterId
      })
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
    next(err);
  }
};
export default getOne