import React from 'react'
import './Friends.css'

const Friends = ({ users }) => {
  return (
       <li className="sidebarFriend">
                <img className='sidebarFriendImg' src={users.profilePicture} alt=''></img>
                <span className='sidebarFriendName'>{users.username}</span>
      </li>
  )
}

export default Friends
