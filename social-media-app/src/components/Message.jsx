import React from 'react'

const Message = ({postOnClick}) => {
  return (
    <>
    <center><h1>There is no posts now !</h1>
    <button className='btn btn-primary' onClick={postOnClick}>Create Posts</button>
    </center>
    </>
  )
}

export default Message;