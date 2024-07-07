import { createContext, useReducer } from "react";


export const PostList = createContext({
    postList :[],
    addPost: ()=>{},
    deletePost : ()=>{},
    addPosts : ()=>{},
});

const postListReducer=(currPostList,action)=>{
    let newPostList =  currPostList;
    if(action.type=== 'DELETE_POST'){
        newPostList = currPostList.filter(post=>post.id !== action.payload.postId);
    }
    else if(action.type==='ADD_POST'){
        console.log("using Red",action.payload.post);
        newPostList = [action.payload.post,...currPostList];
    }
    else if(action.type === 'ADD_INITIAL_POST'){
        
     newPostList=action.payload.posts;
     
}

return newPostList;
}

const PostListProvider = ({children})=>{

    const [postList,dispatchPostList] = useReducer(postListReducer,
        []
    );

    const addPost=(post)=>{
        console.log(post);
        dispatchPostList({
            type : 'ADD_POST',
            payload :{
                post,
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

    const addPosts=(posts)=>{
        console.log(posts);
        
        dispatchPostList({
            type : 'ADD_INITIAL_POST',
            payload : { 
                posts,

            },
               
            
        });
    }
return <PostList.Provider value={
   { postList:postList,
    addPost: addPost,
    deletePost: deletePost,
    addPosts : addPosts,
}
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