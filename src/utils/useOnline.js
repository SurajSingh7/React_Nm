import { useState, useEffect } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };
    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isOnline;
};

export default useOnline;



// for junior developer

// import { useEffect, useState } from "react";

// const useOnline=()=>{
//     const [isOnline,setIsOnline]=useState(true);

//     useEffect(()=>{

//         window.addEventListener("online",()=>{
//             setIsOnline(true);
//         });

//         window.addEventListener("offline",()=>{
//             setIsOnline(false);
//         });

//     },[]);

//    return isOnline;

// };

// export default useOnline;




