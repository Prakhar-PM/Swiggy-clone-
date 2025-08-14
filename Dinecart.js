import React from "react";
import ReactDOM from "react-dom/client";
import { dineoutRestaurants} from "../utils/Dinedata.js";
import DineOption from "./DineOption.js";

export default function DineCart() {
    return (
        <div className="w-[80%] container mx-auto mt-20">
            <h1 className="text-3xl font-bold">
                Discover best restaurants on Dineout
            </h1>
            <div className="w-[80%] container mx-auto flex flex-wrap mt-20 gap-3">
                {
                    dineoutRestaurants.map((value) =><DineOption key = {value.info.id} value ={value}></DineOption>)
                }
            </div>
        </div>
    )
}