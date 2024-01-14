import {CDN_URL} from "../config/constant";

const RestaurantCard=(props)=>{

    const {resData}=props
    const{itemName,itemImage,sellingPrice,brand,ratings,discount,itemType}=resData

    return (
        <div className="res-card">
            <img className="card-logo" src={itemImage} alt="Image not found" />
            <h3>{itemName}</h3>
            <h4>{brand.brandName}</h4>
            <h4>{itemType}</h4>
            <h4>Rs.{sellingPrice}</h4>
            <h4>{discount}%</h4>
            <h4>{ratings}✳</h4>
        </div>
    )
}

export default RestaurantCard;