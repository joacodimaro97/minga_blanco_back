<<<<<<< HEAD
import mongoose from "mongoose";

let schema = new mongoose.Schema({
  author_id:{
    type: mongoose.Types.ObjectId,
    ref: 'authors'
  },
  company_id:{
    type: mongoose.Types.ObjectId,
    ref: 'companies'
  },
  title: {type: String, required: true},
  cover_photo: {type: String, required: false},
  description: {type: String, required: true},
  category_id:{
    type: mongoose.Types.ObjectId,
    ref: 'categories',
    required: true
  }
=======

import {Schema, Types, model} from 'mongoose'

let schema = new Schema(
  {
    author_id: { type: Types.ObjectId, ref: 'authors', required: true },
    company_id: { type: Types.ObjectId, ref: 'companies' },
    title: { type: String, required: true },
    cover_photo: { type: String, required: true },
    description: { type: String, required: true },
    category_id: { type: Types.ObjectId, ref: 'categories', required: true }


>>>>>>> eff0fe3ddb3cd1b6e72893bd58de44d0277afd5f
},{
  timestamps: true
})

let collection = 'mangas'
<<<<<<< HEAD

let Manga = mongoose.model(collection, schema)
export default Manga
=======
let Manga = model (collection, schema)
>>>>>>> eff0fe3ddb3cd1b6e72893bd58de44d0277afd5f
