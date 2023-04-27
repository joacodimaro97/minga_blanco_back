import  {Schema, model, Types} from "mongoose";

let schema = new Schema({
    title: {type:String, requiered:true},
    cover_photo: {type:String, requiered:true},
    pages: [{type:String, requiered:true}],
    order: {type:Number, requiered:true},
    manga_id: {
        type: Types.ObjectId, 
        ref:'mangas', 
        requiered:true}
},{
    timestaps:true
})

let collection = 'Chapters'
let Chapter = model(collection,schema);
export default Chapter