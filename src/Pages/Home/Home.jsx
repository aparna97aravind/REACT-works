import React from 'react'
import Topbar from '../../Component/Topbar/Topbar'
import Sidebar from '../../Component/Sidebar/Sidebar'
import Rightbar from '../../Component/Rightbar/Rightbar'
import Feed from '../../Component/Feed/Feed'
import './Home.css'

const Home = () => {
  return (
  <>
    <Topbar/>
    <div className='homeContainer'>
      <Sidebar/>
      <Feed/>
      <Rightbar/> 
    </div>
  </>
  )}
export default Home
