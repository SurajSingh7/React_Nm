// import food from "../Images/burger-image.png";
import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import ProfileFunComp from "./Profile";


const About = () => {
  return (
    <div>
        <h1> About US</h1>
        <p>
           ...........................................
           ...........................................
         </p>
    
       <ProfileFunComp name={"surajfun"}/>
       <Profile name={"SurajClass"}/>

     {/* <Outlet/> */}
    </div>
  );
};

export default About;