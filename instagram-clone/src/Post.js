import React from 'react'

import './Post.css'
// import Avatar from '@material-ui/core/Avatar';

const Post = ({img , cap , username}) => {
  return (
    <div className='post'>
      <div className='post__header'>
        {/*
        <Avatar
          className='post__avatar'
          alt={username}
          src='/static/images/avatar/'
          />
       */}
        <h3>{username}</h3>
      </div>
      
      {/* header -> avatar + username  */}
      <img src={img} className='post__image' alt='img'/>
      {/* images */}
      <h4 className='post__text'><strong>@{username}</strong>{cap}</h4>
      {/*username + captions  */}
    </div>
  )
}

export default Post
