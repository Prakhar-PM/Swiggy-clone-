import React from "react";
import ReactDOM from "react-dom/client";
import { GrocerGridCard }  from "../utils/GroceryData";


export default function GroceryOption({value}) {
    return(
        <div className="flex-none w-[20%] flex-col items-center justify-center gap-2 p-2 border border-gray-300 rounded-lg">
        <a href={value?.action?.link}>
             <img  className = "h-40 w-50 object-cover border-t-0 "src={"https://media-assets.swiggy.com/swiggy/image/upload/"+value?.imageId}></img>
        </a>
        <h1 className="text-center font-bold">{value?.action?.text}</h1>
         </div>
    )
}