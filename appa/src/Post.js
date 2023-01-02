import React from 'react'
import ReactImg from './logo512.png'
import './Post.css'

const Post = () => {
  return (
    <div className='post'>
      <h3>Username</h3>
      {/* header -> avatar + username  */}
      <img src={ReactImg} className='post__image' alt='react-img'/>
      {/* images */}
      <h4 className='post__text'><strong>@Richdotcom</strong>Wow this Awesome</h4>
      {/*username + captions  */}
    </div>
  )
}

export default Post
