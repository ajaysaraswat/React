
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import { useState } from 'react';
import PostListProvider from '../store/Post-list-store';
import { Outlet } from 'react-router-dom';

function App() {
 const [selectedTab,setSelectedTab ] = useState("Create Post")

  return (
    <>
    <PostListProvider>
    <div className='app-container'>   
      <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
      <div className='content'>
      <Header/>
      <Outlet/>
      <Footer/>
      </div>
    </div>
    </PostListProvider>
   </>
      
  )
}

export default App;
