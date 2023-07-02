// Body part- 2
import { restaurantList,swiggy_api_URL } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";


const Body=()=>{

       
        const [searchText,setSearchText]=useState();

        // fetch()
        // const [restaurants,setrestaurants]=useState([]);
        const [allRestaurants, setAllRestaurants] = useState([]);
        const [filteredRestaurants, setFilteredRestaurants] = useState([]);
        // console.log(restaurants);

        useEffect(()=>{
           getRestaurants();
        },[]);

        
        async function getRestaurants() {
          // handle the error using try... catch
          try {
            const data = await fetch(swiggy_api_URL);
            const json = await data.json();
            // updated state variable restaurants with Swiggy API data

            setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
            setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
          } catch (error) {
            console.log(error);
          }
        }

      const isOnline=useOnline();
      if(isOnline==false){
        return <h1>offline</h1>
      }
    


    // if(filteredRestaurants.length==0) return <h1>No Restaurant match your filter!!</h1>


    return (allRestaurants.length==0)?<Shimmer/>: (
       
       <>
        <div className="search-container p-5 bg-pink-50 my-5 ">

            <input type="text" className="search-input" placeholder="Seakrch" 
             value={searchText} onChange={(e)=>{ setSearchText(e.target.value); }} />

            <button className="search-btn p-2 m-2 bg-green-400 hover:bg-gray-500 text-black rounded-md" onClick={()=>{  
              // need to filter the data 
              const data =filterData(searchText,allRestaurants);
              // update the state -restaurants
              setFilteredRestaurants(data);
            }}>
            Search</button>
        </div>

        <div className="flex flex-wrap">
            {   
                
                filteredRestaurants.map((restaurant) =>{
                    return(
                       <Link to={"/restaurant/"+restaurant.data.id} key={restaurant.data.id} >
                          <RestaurantCard {...restaurant.data} />
                        </Link>  
                      // <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
                    );
                })
            }
        
        </div>

        </>
    );
};

export default Body;