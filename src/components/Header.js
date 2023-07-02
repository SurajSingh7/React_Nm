import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import Logo from "../assets/img/foodvilla.jpg";
import { Link } from "react-router-dom";


const LoggedInUser =()=>{
  //API call to check authentication
  return false;
}

const Header = () => {
   
 
   // use useState for user logged in or logged out
   const [isLoggedin, setIsLoggedin] = useState(true);

  return (
    <div className="flex justify-between bg-pink-50 shadow-lg">

      <div className="logo-container">
        {/* <img className="logo" src={LOGO_URL} /> */}
        <img className="h-28 p-2" src={Logo} />
      </div>
      
      <div className="nav-items">
        <ul className="flex py-10">
          
          <Link to="/"> <li className="px-2">Home</li> </Link>
          <Link to="/about"> <li className="px-2">About Us</li> </Link>
          <Link to="/contact"><li className="px-2">Contact Us</li></Link> 
          <li className="px-2">Cart</li>
          <Link to="/instamart"><li className="px-2">Instamart</li></Link> 
        </ul>
      </div>

     {/* {
        // js expression & Statement
       (   a=1,console.log(a) )
     } */}

     

      { isLoggedin ? (
              <button className="logout-btn" onClick={() => setIsLoggedin(false)}>Logout </button>
            ) : (
            <button className="login-btn" onClick={() => setIsLoggedin(true)}>Login</button>
            )  
      }

     
    </div>
  );
};

export default Header;