import React from "react";
import ReactDOM from "react-dom/client";
import { imageGridCards }  from "../utils/FoodData";

export default function FoodCart() {
 return(
    <>
       <div className="w-[90%] container mx-auto flex flex-wrap mt-20 gap-3">
{imageGridCards.map((value) => (
  <div key={value.id} className="food-card">
   <a href={value?.action?.link}>
    <img className="w-28 h-35 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+value?.imageId}></img>
    </a>
  </div>
))}
       </div>
    </>
 )
}