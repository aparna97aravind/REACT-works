import React from 'react'
import { PermMedia, Label, Room, EmojiEmotions } from '@material-ui/icons'
import './Share.css'
import shareImg from '../../Assets/3.webp'

const Share = () => {
  return (
    <div className='share'>
      <div className="shareWrapper">
        <div className="sharetop">
          <img className='shareProfileImg' src={shareImg} alt=''></img>
          <input placeholder="What's in your mind!" className='shareInput'/>
        </div>
        <hr className='shareHr'/>
        <div className="sharebottom">
          <div className="shareOptions">
              <div className="shareOption">
                <PermMedia htmlColor= 'red' className='shareIcon'/>
                <span className='shareOptionText'>Photo/Video</span>
              </div>
              <div className="shareOption">
                <Label htmlColor= 'blue' className='shareIcon'/>
                <span className='shareOptionText'>Tags</span>
              </div>
              <div className="shareOption">
                <Room htmlColor= 'green' className='shareIcon'/>
                <span className='shareOptionText'>Locations</span>
              </div>
              <div className="shareOption">
                <EmojiEmotions htmlColor= 'yellow' className='shareIcon'/>
                <span className='shareOptionText'>Feelings</span>
              </div>
          </div>
          <button className='shareButton'>SHARE</button>
        </div>
      </div>
    </div>
  )
}

export default Share;
