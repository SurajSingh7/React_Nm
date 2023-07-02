const Shimmer =()=>{
    return(
        // <h1>shimmer ui Loading </h1>
        <div className="restaurant-list">
           { Array(10).fill("").map((e,index)=> { return <div key={index} className="shimmer-card"></div>} ) }

        </div>    
    )
}

export default Shimmer;