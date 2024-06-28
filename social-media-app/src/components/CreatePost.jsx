const CreatePost = ()=>{
    return <form className="create-post">
    <div className="mb-3">
      <label htmlFor="tittle" className="form-label">Post Tittle</label>
      <input type="text" className="form-control" id="tittle" aria-describedby="emailHelp"
      placeholder="How are you feeling today"
      />
     
    </div>

  
    <div className="mb-3">
      <label htmlFor="userId" className="form-label">UserId</label>
      <input type="text" className="form-control" id="userId" aria-describedby="emailHelp"
      placeholder="Enter your user id...."
      />
     
    </div>
    <div className="mb-3">
      <label htmlFor="tittle" className="form-label">Post Content</label>
      <textarea type="text" className="form-control" id="tittle" aria-describedby="emailHelp"
      placeholder="How are you feeling today"
      />
     
    </div>

    <div className="mb-3">
      <label htmlFor="reactions" className="form-label">No of Reactions</label>
      <input type="text" className="form-control" id="reactions" aria-describedby="emailHelp"
      placeholder="How are you feeling today"
      />
     
    </div>

    <div className="mb-3">
      <label htmlFor="tags" className="form-label">Enter your hash tags</label>
      <input type="text" className="form-control" id="tags" aria-describedby="emailHelp"
      placeholder="How are you feeling today"
      />
     
    </div>
    <button type="submit" className="btn btn-primary">Post</button>
  </form>
}

export default CreatePost;