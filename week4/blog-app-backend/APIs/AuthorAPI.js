import exp from 'express'
import { UserModel } from '../models/UserModel'
import {} from ''
import { ArticleModel } from '../models/ArticleModel'
export const authorApp =exp.Router()

  
//write article
authorApp.post("/article",async(req,res)=>{
//get article obj from client 
const articleObj=req.body
//check author

let user = req.user;
//check author

let author=await UserModel.findById(articleObj.author)
if(author.email!==user.email){
    return res.status(403).json({message:"ypu are not authorized"})
}
if(!author){
    return res.status(404)
}
{
return res.status(404).json({ message: "invalid author" });
}
)

//read own articles
authorApp.post("/articles",verifyToken("AUTHOR"),async(req,res)=>{
let authorIdOfToken = req.user?.id;
const articlesList = await ArticleModel.find({author:authorIdOfToken})
res.status(200).json({message:"articles",payload:articlesList})
}
)
//update article by author
authorApp.put("/articles",async(req,res)=>{
    let articleIdOfToken = req.user?.id;
    const editedArticle = req.body;
       const modifiedArticle= await ArticleModel.findOneAndUpdate(
        {_id: articleIdOfToken,author:authorIdOfToken},
            {$set:{title,category,content}},
         {new:true})
       
       if(!modifiedArticle){
        return res.status(403).json({message:"not authorised to edit article"})
       }
       
    res.status(200).json({message:"article modified successfully",payload:modifiedArticle})

}
)



//edit article
//delete article (soft delete)
