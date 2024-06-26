import { createContext, useReducer } from "react";

const PostList = createContext({
    postList :[],
    addPost: ()=>{},
    deletePost : ()=>{},
});

const postListr=()=>{

}

const PostListProvider = ({children})=>{

    const [postList,dispatchPostList] = useReducer();

    const addPost=()=>{

    }

    const deletePost=()=>{

    }
return <PostList.Provider value={
   { postList:postList,
    addPost: addPost,
    deletePost: deletePost,}
}>{children}
</PostList.Provider>;


}

export default PostListProvider;