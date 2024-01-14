import RestaurantCard from "./RestaurantCard";
import resList from "../config/mockdata";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";


const Body=()=>{

    const [listOfRestaurants,setlistOfRestaurants]=useState([])
    const [filteredRestaurants,setFilteredRestaurants]=useState([])
    const [searchText,setsearchText]=useState("")


    useEffect(()=>{
        fetchData()
    },[])


    const fetchData=async()=>{
    
            const data=await fetch("https://apistaging.justmyroots.com/api/web/dashboard/meta?keyword=trending-dishes&isExpDelivery=false")
            const json=await data.json()
            setlistOfRestaurants(json.data[0].items)
            setFilteredRestaurants(json.data[0].items)

    }

    const handleTopFilterButton=()=>{

        const newList=listOfRestaurants.filter((res)=>res.sellingPrice>800)
        setFilteredRestaurants(newList)

    }

    const handleSearchButton=()=>{
        const newarr=[]
        for(let i=0;i<listOfRestaurants.length;i++)
        {
            const dishName=listOfRestaurants[i].itemName.toLowerCase()
            if(dishName.includes(searchText.toLowerCase()))
            {
                newarr.push(listOfRestaurants[i])
            }
        }
        setFilteredRestaurants(newarr)
    }


    return listOfRestaurants.length === 0?(<Shimmer />):(
        <div className="body">
            <div className="Filter">

                <div className="search">
                    <input type="text"  value={searchText}  onChange={(e)=>{setsearchText(e.target.value)}}/>
                    <button className="search-btn" onClick={handleSearchButton}>Search</button>   
                </div>

                <button className="filter-btn" onClick={handleTopFilterButton}>Top price food</button>
   
            </div>

            <div className="res-container">
                {filteredRestaurants.map((restaurant)=><RestaurantCard  key={restaurant._id} resData={restaurant}/>)}
            </div>

        </div>
    )
}

export default Body