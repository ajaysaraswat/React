import Post from "./Post";
import React, { useContext } from 'react';
import { PostList as PostListData  } from "../store/Post-list-store";

const PostList=()=>{
   const {postList} =  useContext(PostListData);
 return <>
 {postList.map((post)=>(
    <Post key={post.id} post={post}/>
 ))}
 
 
 </>
}

export default PostList;