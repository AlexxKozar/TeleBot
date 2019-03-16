import {addOneToCollection} from "../api/mongo";
import PostStatusModel from "../models/post.status.model";
import PostModel from "../models/post.model";

addOneToCollection(PostStatusModel, "removed");
addOneToCollection(PostStatusModel, "published");
addOneToCollection(PostStatusModel, "waiting");

export const getPosts = (req, res, next) => {

  const searchSettings = {};

  PostModel
    .find(searchSettings)
    .then(posts => {

      console.log("Posts find");
      console.log(posts);

      res.status(200).json({
        status: 'ok',
        code: 200,
        posts: posts,
      })
        .catch(error => next(error))
    })
    .catch(error => next(error));

};

export const addPost = (req, res, next) => {


  console.log("Put");
  console.log(req.body);

  const post = {
    description: req.body.description,
    images: req.body.images,
    date: req.body.date,
    status: req.body.status
  };

  PostModel
    .create(post)
    .then(post => {

      console.log("Create post");
      console.log(post);

      res.status(201).json({
        status: 'created',
        code: 201,
        recipeId: post._id,
      })
        .catch(error => next(error))

    })
    .catch(error => next(error))

};


export const removePost = (req, res, next) => {

  const postId = req.params.id;
  console.log('postId');
  console.log(postId);

  PostModel.deleteOne({
    _id: postId
  })
    .then(query => res.status(200).json({
        status: 'ok',
        code: 200,
        deletedCount: query.deletedCount,
        deletedId: id,
      })
      .catch(error => next(error))
    )
    .catch(error => next(error))
};

