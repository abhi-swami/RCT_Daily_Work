// import Courses ,Title and Usercard here
// keep a user object with mentioned properties and pass down to UserCard as prop

import Course from "./Components/Courses";
import Title from "./Components/Title";
import UserCard from "./Components/UserCard";

export default function App() {

  return (
    <>
      <Title />
      <UserCard name={"Krishna"} avatar={"https://images.newindianexpress.com/uploads/user/imagelibrary/2018/6/21/w600X300/Krishna_Wants.jpg?w=640&dpr=1.5"} posts={123456} followers={10000000000} address={"infinity"}/>
      <Course />
    </>
  );
}


//https://avatars.githubusercontent.com/u/107119119?v=4