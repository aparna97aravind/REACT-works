import Post from '../Post/Post'
import Share from '../Share/Share'
import './Feed.css'
import { Posts} from '../../Data';

const Feed = () => {
  return (
    <div className='feed'>
        <div className="feedWrapper">
          <Share/>
          {Posts.map((post) => (
            <Post key={Post.id} post= {post}/>
          ))}
        </div>
    </div>
  )
}

export default Feed
