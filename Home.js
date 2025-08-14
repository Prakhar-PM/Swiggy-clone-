import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header.js";
import FoodCart from "./FoodCart.js";
import GroceryCart from "./GroceryCart.js";
import DineCart from "./Dinecart.js";

export default function Home(){
    return(
        <>
        <Header></Header>
            <FoodCart></FoodCart>
            <GroceryCart></GroceryCart>
            <DineCart></DineCart>
        </>
    )
}