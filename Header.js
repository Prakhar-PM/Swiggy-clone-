import React from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router"

export default function Header() {
     return (
    <>
     <header className="bg-[#ff5200] font-serif">
        <div className= " container mx-auto flex justify-between items-center py-8">
            <img className="w-40 h-12" src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png"></img> 
            <div className="flex items-center gap-10 font-bold text-base text-white">
               <a  href="https://www.swiggy.com/corporate/" target="_blank">Swiggy Corporate</a>
               <a  href="https://partner.swiggy.com/login#/swiggy" target="_blank">Partner with us</a>
               <a className="border border-white px-5 py-3 rounded-2xl" target="_blank" href="https://www.swiggy.com/corporate/">Get The App</a>
                <a className="border border-black bg-black px-5 py-3 rounded-2xl"target="_blank" href="https://www.swiggy.com/corporate/">Sign in</a>
            </div> 
        </div>

        <div className="pt-16 pb-8 relative">
            <img className="h-110 w-60 absolute top-0 left-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"></img>
            <img className="h-110 w-60 absolute top-0 right-0"  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"></img>
            <div className=" w-[60%] container text-center text-5xl font-bold text-white mx-auto">
                Order food & groceries. Discover best restaurants. Swiggy it!
            </div>

            <div className=" flex justify-center items-center gap-4 mt-8 max-w-[70%] mx-auto">
                <input type="text" placeholder = "Gurugram,Haryana,India" className="bg-white  text-black border-black p-2 m-2 rounded-2xl w-[40%] text-xl"></input>
                <input type="text" placeholder = "Search for restaurant, item or more" className="bg-white text-black border-black p-2 m-2 rounded-2xl w-[55%] text-xl"></input>
            </div>


        </div>

        <div className="max-w container mx-auto flex">
               <Link to = "/Restaurant">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/fa01e85b-3057-482d-9523-5289722b1df2_Food4BU.png"></img>
                </Link>
                <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/16/ca34e375-f1bd-4a2e-a3e7-0a20833be83b_IM4BU1.png"></img>
                </a>
                <a href="https://www.swiggy.com/dineout">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/76c30e5a-8adb-4795-bf5b-fa64e9e9e1d3_DO4BU.png"></img>
                </a>
                <a href="https://www.swiggy.com/genie">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/31/14033c0b-8907-420b-b72a-d26cfa68dc7b_Genie4BU.png"></img>
                </a>

            </div>


        </header>
    </>
)
}