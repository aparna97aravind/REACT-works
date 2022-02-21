import './Profile.css'
import Topbar from '../../Component/Topbar/Topbar'
import Sidebar from '../../Component/Sidebar/Sidebar'
import Rightbar from '../../Component/Rightbar/Rightbar'
import Feed from '../../Component/Feed/Feed'
import CoverPic from '../../../src/Assets/1.jpeg'
import UserPic from '../../Assets/dpk.jpg'

const profile = () => {
  return (
  <>
      <Topbar/>
      <div className='profile'>
        <Sidebar/>

        <div className="profileRight">
          <div className="profileRightTop">
              <div className="profileCover">
                <img className = 'profileCoverImg' src={CoverPic} alt="" />
                <img className = 'profileUserImg' src={UserPic} alt="" />
              </div>

              <div className="profileInfo">
                <h4 className='profileInfoName'>Deepika Padkone</h4>
                <span className='profileInfoDesc'> Hey people! </span>
              </div>
          </div>

        <div className="profileRightBottom">
          <Feed/>
          <Rightbar profile/>
        </div>
      </div>
    </div>
  </>
  )
}

export default profile
