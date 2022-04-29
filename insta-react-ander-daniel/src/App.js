import React, {useState} from 'react';
import './App.css';
import Post from './Post';

function App() {
  const [posts, setPosts] = useState([
    {
      username:"Ander", 
      caption:'F1',
      imageUrl:"https://static.independent.co.uk/2022/04/22/15/F1-GP_EMILIA-ROMAGNA_06337.jpg?quality=75&width=982&height=726&auto=webp"
    },
    {
      username: "F1",
      caption:'Ferrari',
      imageUrl: "https://images.daznservices.com/di/library/DAZN_News/f7/b/2022-04-24-verstappen-red-bull-f1-formula-1_1jz9lbxeta7eq1hvq0y2tqkdui.jpg?t=1610926208&quality=60&h=450"
    }
  ]);
  

  return (
    <div className="App">
        <div className='app_header'>
        <img
          className='app_headerImage'
          src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'
          alt=''
          />
        </div>
        
        <h1>Instagram Clone</h1>
        {
          posts.map(post =>(
            <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
          ))
        }

    </div>
  );
}

export default App;
