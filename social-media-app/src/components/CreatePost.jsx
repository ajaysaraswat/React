import { Form, redirect} from "react-router-dom";
const CreatePost = ()=>{
    return <Form className="create-post" method="post" >
    <div className="mb-3">
      <label htmlFor="tittle" className="form-label">Post Tittle</label>
      <input type="text" 
      name="postTittle"
      className="form-control" id="tittle" aria-describedby="emailHelp"
      placeholder="How are you feeling today"
      />
     
    </div>

  
    <div className="mb-3">
      <label htmlFor="userId" className="form-label">UserId</label>
      <input type="text" 
      name="userId"
      className="form-control" id="userId" aria-describedby="emailHelp"
      placeholder="Enter your user id...."
      />
     
    </div>
    <div className="mb-3">
      <label htmlFor="body" 
      
      className="form-label">Post Content</label>
      <textarea type="text" className="form-control" id="body" aria-describedby="emailHelp"
      name="postBody"
      placeholder="How are you feeling today"
      />
     
    </div>

    <div className="mb-3">
      <label htmlFor="reactions" className="form-label">No of Reactions</label>
      <input type="text" 
      name="reactions"
      className="form-control" id="reactions" aria-describedby="emailHelp"
      placeholder="How are you feeling today"
      />
     
    </div>

    <div className="mb-3">
      <label htmlFor="tags" className="form-label">Enter your hash tags</label>
      <input type="text"
      name="tags"
       className="form-control" id="tags" aria-describedby="emailHelp"
      placeholder="How are you feeling today"
      />
     
    </div>
    <button type="submit" className="btn btn-primary">Post</button>
  </Form>
}

export async function createPostAction(data){
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  console.log(postData);
  fetch('https://dummyjson.com/posts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(postData),
  })
  .then(res => res.json())
  .then((post)=>{
    
    console.log(post);
    

  });
  return redirect("/");
}

export default CreatePost;