import Post from "./Post";
import React, { useContext, useEffect, useState } from 'react';
import { PostList as PostListData  } from "../store/Post-list-store";
import Message from "./Message";
import LoadingSpinner from "./LoadingSpinner";

export const PostList=()=>{
   const {postList,fetching} =  useContext(PostListData);


   
  const handlePostList=()=>{
   
   
   };
 return <>
 {fetching && <LoadingSpinner/> }

 {!fetching && postList.length ===0 && <Message postOnClick ={handlePostList}></Message>}
 {!fetching && postList.map((post)=>(
    <Post key={post.id} post={post}/>
 ))}
 
 
 </>
}

export default PostList;