import './Rightbar.css'
import birthdayImage from '../../Assets/p.jpg'
import AdImgone from '../../Assets/456.jpg'
import { Users } from '../../Data';
import Online from '../../Onlinefriends/Online';

const Rightbar = ({profile}) => {
  return (
    <div className='rightbar'>
        <div className="rightbarWrapper">
          <div className="birthdayContainer">
            <img className ='birthdayImg' src={birthdayImage} alt="" />
            <span className="birthdayText">
              <b>Priyanka Chopra</b> and <b>3 others friends </b> have birthday Today. Wish them !
            </span>
          </div>
            <img className="AdContainer" src={AdImgone} alt="" />
            <h4 className="onlineFriendsTitle">ONLINE FRIENDS </h4>
            <ul className='rightbarFriendList'>
              {Users.map((user) => (
              <Online key= {user.id} user = {user}/>
              ))}
            </ul>
        </div>
    </div>
  )
}

export default Rightbar
