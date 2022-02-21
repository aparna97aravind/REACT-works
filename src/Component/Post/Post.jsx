import React, {useState} from 'react'
import './Post.css';
import Heart from '../../Assets/heart.png'
import Like from '../../Assets/like.png'
import { MoreVert } from '@material-ui/icons'

const Post = ({post}) => {
  const [like,setLike] =useState(post.like);
  const [liked, setLiked] = useState(false);

  const likeHandler = () => {
    setLike(liked ? like-1 : like+1);
    setLiked(!liked)
  }
  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className='postProfileImg' src={post.profilePicture} alt="" />
            <span className='postUserName'>{post.username}</span>
            <span className='postTime'>{post.date}</span>
          </div>

          <div className="postTopRight">
            <MoreVert/>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <br/>
          <img className='postImg' src={post.photo} alt=''/>
        </div>

        <div className="postBottom">
          <div className="postBottomLeft">
              <img className='postIcons' src={Like} onClick={likeHandler} alt="" />
              <img className='postIcons' src={Heart} onClick={likeHandler} alt="" />
              <div className="postLikeCount">{like} people likes it</div>
          </div>
          <div className="postBottomRight">
            <div className="postCommentText">{post.comment} comments</div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Post
