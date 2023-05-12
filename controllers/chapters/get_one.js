import Chapter from '../../models/Chapter.js' 

let getOne = async (req, res,next) => {
    
  try {
    let chapterId = await Chapter.findOne({_id:req.params.id},'pages title order -_id')
    let id_next = await Chapter.findOne({order:chapterId.order + 1},'_id' )
    let id_prev = await Chapter.findOne({order:chapterId.order - 1},'_id' )
    if (chapterId){
      return res.status(200).json({
        response: chapterId,
        id_next: id_next?._id || null,
        id_prev: id_prev?._id || null
        
      })
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Se te revento la pagina amigo, F por vos' });
    next(err);
  }
};
export default getOne