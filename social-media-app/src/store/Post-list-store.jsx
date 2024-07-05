import { createContext, useReducer } from "react";


export const PostList = createContext({
    postList :[],
    addPost: ()=>{},
    deletePost : ()=>{},
});

const postListReducer=(currPostList,action)=>{
    let newPostList =  currPostList;
    if(action.type=== 'DELETE_POST'){
        newPostList = currPostList.filter(post=>post.id !== action.payload.postId);
    }
    else if(action.type==='ADD_POST'){
        newPostList = [action.payload,...currPostList];
    }
return newPostList;
}

const PostListProvider = ({children})=>{

    const [postList,dispatchPostList] = useReducer(postListReducer,
         DEFAULT_POST_LIST
    );

    const addPost=(userId,postTittle,postBody,reactions,tags)=>{
        
        dispatchPostList({
            type : 'ADD_POST',
            payload : {
                
                    id : DEFAULT_POST_LIST.length+1,
                    tittle :postTittle,
                    body : postBody,
                    reactions : reactions,
                    userId : userId,
                    tags : tags,  
            }
        })
        
        

    }

    const deletePost=(postId)=>{
        dispatchPostList({
            type : 'DELETE_POST',
            payload : {
                postId,
            },
        });
    }
return <PostList.Provider value={
   { postList:postList,
    addPost: addPost,
    deletePost: deletePost,}
}>{children}
</PostList.Provider>;


}
const  DEFAULT_POST_LIST = [{
    id : "1",
    tittle :'going to mumbai',
    body : 'hii friends i am going to mumbai ',
    reactions : 2,
    userId : 'user-9',
    tags : ['vacation','mumbai','enjyoing']
},
{
    id : "2",
    tittle :'pass',
    body : 'wow ',
    reactions : 12,
    userId : 'user-12',
    tags : ['graduation','unbeleivable']
},

];

export default PostListProvider;