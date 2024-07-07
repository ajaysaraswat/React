import { useContext, useRef } from "react";
import{ PostList } from "../store/Post-list-store";

const CreatePost = ()=>{
  const { addPost }=useContext(PostList)
  const userIdElement = useRef();
  const postTittleElement= useRef();
  const postBodyElement = useRef();
  const reactionsElement= useRef();
  const tagsElement = useRef();
  
  const handleSubmit = (event)=>{
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTittle = postTittleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    // userIdElement.current.value="";
    // postTittleElement.current.value="";
    // postBodyElement.current.value="";
    // reactionsElement.current.value="";
    // tagsElement.current.value ="";

    // addPost(userId,postTittle,postBody,reactions,tags);
  

  fetch('https://dummyjson.com/posts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
     
      title : postTittle,
      body : postBody,
      reactions : reactions,
      userId : userId,
      tags : tags,
      
    }),
  })
  .then(res => res.json())
  .then("res",console.log).then((post)=>{
    console.log("post",post);
    addPost(post);
  });
}
    return <form className="create-post" onSubmit={handleSubmit}>
    <div className="mb-3">
      <label htmlFor="tittle" className="form-label">Post Tittle</label>
      <input type="text" 
      ref={postTittleElement}
      className="form-control" id="tittle" aria-describedby="emailHelp"
      placeholder="How are you feeling today"
      />
     
    </div>

  
    <div className="mb-3">
      <label htmlFor="userId" className="form-label">UserId</label>
      <input type="text" 
      ref={userIdElement}
      className="form-control" id="userId" aria-describedby="emailHelp"
      placeholder="Enter your user id...."
      />
     
    </div>
    <div className="mb-3">
      <label htmlFor="body" 
      
      className="form-label">Post Content</label>
      <textarea type="text" className="form-control" id="body" aria-describedby="emailHelp"
      ref={postBodyElement}
      placeholder="How are you feeling today"
      />
     
    </div>

    <div className="mb-3">
      <label htmlFor="reactions" className="form-label">No of Reactions</label>
      <input type="text" 
      ref={reactionsElement}
      className="form-control" id="reactions" aria-describedby="emailHelp"
      placeholder="How are you feeling today"
      />
     
    </div>

    <div className="mb-3">
      <label htmlFor="tags" className="form-label">Enter your hash tags</label>
      <input type="text"
      ref={tagsElement}
       className="form-control" id="tags" aria-describedby="emailHelp"
      placeholder="How are you feeling today"
      />
     
    </div>
    <button type="submit" className="btn btn-primary">Post</button>
  </form>
}

export default CreatePost;