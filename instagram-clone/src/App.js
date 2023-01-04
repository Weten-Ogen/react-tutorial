import Insta from './instagram.svg'
import './App.css'
import { useState } from 'react'
import Post  from './Post'
import ReactImg from './static/images/logo512.png'
import emma from './static/images/emma.jpg'
import gryffindor from './static/images/gryffindor.png'
import harrymovie from './static/images/harrymovie.jpg'
import hrrymv from './static/images/harrymovie2.jpg'
import hogwarts from './static/images/hogwarts.jpg'
import residents from './static/images/resident.jpg'

function App() {
  const [posts, setPosts] = useState([
     { 
      img:{ReactImg}, 
      cap:"This is React", 
      username:"marcuoware"},
    {
      img:{residents},  
      cap:"Amazing movie",
      username:"BelAir"
    },
    {
      img:{hrrymv},  
      cap:"Wizardry & Witchum" ,
      username:"Cho"
    },
    {
      img:{harrymovie} , 
      cap:"friends of all",
      username:"Ron weasly"
    },
    {
      img:{gryffindor} , 
      cap:"Best movies", 
      username:"Hollywood"
    },
    {
      img:{hogwarts},  
      cap:"Die fighting or die trying", 
      username:"Lord Voldmort",
    },
    {
      img:{emma} , 
      cap:"Cuteness", 
      username:"Emma Watson"
    },
  ])
 
  return (
    <div className="app">
     <div className='app__header'>
      <img 
        className='app__headerImage'
        src={Insta}
        alt='instagram'
      />
     </div>
     {/* Header */}
     {/* Posts */}
   
    {
      posts.map(({img, cap ,username}) => 
        <Post  
        key={cap}
        img={img}
        cap={cap}
        username={username}
        />)
    }
     
     
     {/* Posts */}
    </div> 
  );
}

export default App;
