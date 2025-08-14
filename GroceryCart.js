import React from "react";
import ReactDOM from "react-dom/client";
import { GrocerGridCard }  from "../utils/GroceryData";
import GroceryOption from "./GroceryOption.js";


export default function GroceryCart() {
 return(
    
      <div className="w-[80%] container mx-auto mt-20">
        <h1 className = " text-3xl font-bold">Shop groceries on Instamart</h1>
        <div className="w-[80%] container mx-auto flex flex-wrap mt-20 gap-3">
        {
          GrocerGridCard.map((value)=><GroceryOption key = {value.id} value ={value}></GroceryOption>)
        }
        </div>
      </div>
    
 )}