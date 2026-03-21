import {Schema,model,Types} from 'mongoose'

const commentSchema = new Schema({
    user:{
        type: Types.ObjectId,
        ref:"user",
        required:[true,"User ID required"]

    },
    comment:{
        type:String,

    },     
});


const articleSchema = new Schema({
  author:{
     type:Types.objectId,
     ref:"user",
     required:[true,"Author ID is Required"],

  },
  title:{
    type:String,
         required:[true,"Title is Required"],

  },
  category:{
    type:String,
         required:[true,"Category is Required"],  

  },
  content:{
     type:String,
         required:[true,"Content is Required"],
  },
  comments:[{type: commentSchema,default:[]}],
  isArticleActive:{
    type:Boolean,
    default:true,
  }
},


{
    versionKey:false,
    timestamp:true,
    strict:"throw"

})



//create article model
export const ArticleModel=model("article",articleSchema)