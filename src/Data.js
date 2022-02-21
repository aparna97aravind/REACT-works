
import PostOne from '../src/Assets/postone.webp'
import Posttwo from '../src/Assets/Posttwo.jpg'
import Postthree from '../src/Assets/jmj.jpeg'
import Postfour from '../src/Assets/postfour.jpg'
import Postfive from '../src/Assets/postfive.jpg'
import ProfileOne from '../src/Assets/3.jpeg'
import ProfileTwo from '../src/Assets/alia.webp'
import ProfileThree from '../src/Assets/varun.jpg'
import ProfileFour from '../src/Assets/ananya.jpg'
import ProfileFive from '../src/Assets/anushka.jpg'
import ProfileSix from '../src/Assets/p.jpg'

export const Users = [
  {
    id:1,
    profilePicture: ProfileSix,
    username: "Priyanka Chopra",
  },
  {
    id:2,
    profilePicture: ProfileTwo,
    username: "Alia Bhatt",
  },
  {
    id:3,
    profilePicture: ProfileFive,
    username: "Anushka Sharma",
  }
];

export const Posts = [
  {
    id: 1,
    profilePicture: ProfileOne,
    desc : "Happy Anniversary to us!!",
    photo: PostOne,
    date: "5 mins ago",
    userId: 1,
    like: 32,
    comment: 9,
    username: "Ranveer Singh",
  },
  {
    id: 2,
    profilePicture: ProfileTwo,
    desc: "Happy Sunday Guys!",
    photo: Posttwo,
    date: "15 mins ago",
    userId: 2,
    like: 2,
    comment: 1,
    username: "Alia Bhat",
  },
  {
    id: 3,
    profilePicture: ProfileThree,
    desc: "Every moment is a fresh beginning.",
    photo: Postthree,
    date: "1 hour ago",
    userId: 3,
    like: 61,
    comment: 2,
    username: "Varun Dhawan",
  },
  {
    id: 4,
    profilePicture: ProfileFour,
    desc: "Beach Calling",
    photo: Postfour,
    date: "4 hours ago",
    userId: 4,
    like: 7,
    comment: 3,
    username: "Ananya Pandey",
  },
  {
    id: 5,
    profilePicture: ProfileFive,
    desc: "Celebrate",
    photo: Postfive,
    date: "5 hours ago",
    userId: 5,
    like: 23,
    comment: 5,
    username: "Anushka Sharma",
  }
];