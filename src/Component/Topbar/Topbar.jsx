import React from 'react'
import { Search ,Person, Chat, Notifications} from '@material-ui/icons'
import './Topbar.css'
import Propicture from "../../Assets/1.jpeg"


const Topbar = () => {
  return (
    <div className='topbarContainer'>
    <div className="topLeftBar">
      <span className='logo'>Deepika</span>
    </div>
    <div className="topCenterBar">
      <div className='searchTopbar'>
        <Search className="searchIcon"/>
        <input className='searchInput' placeholder="Search for friends, posts, or videos"></input>
      </div>
    </div>
    <div className="topRightBar">
      <div className='topbarLinks'>
          <span className='topBarLink'>Homepage</span>
          <span className='topBarLink'>Timeline</span>
      </div>
      <div className="topbarIcons">
        <div className="topbarIconItem">
          <Person/>
          <span className="topbarIconBadge">1</span>
        </div>
        <div className="topbarIconItem">
          <Chat/>
          <span className="topbarIconBadge">2</span>
        </div>
        <div className="topbarIconItem">
          <Notifications/>
          <span className="topbarIconBadge">3</span>
        </div>
      </div>
      <img src={ Propicture } alt="" className="topbarImg"/>
    </div>
  </div>
  )
}

export default Topbar;
