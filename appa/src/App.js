import Insta from './instagram.svg'
import './App.css'
import Post  from './Post'


function App() {
 
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
     <Post/>
     {/* Posts */}
    </div> 
  );
}

export default App;
