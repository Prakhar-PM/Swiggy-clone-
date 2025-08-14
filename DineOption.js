import React from "react";
import ReactDOM from "react-dom/client";

export default function DineOption({ value }) {
    return (
        <div className="max-w-sm flex-none">
        <a href={value?.cta?.link}>
            <div className="flex-wrap flex-row items-center justify-center gap-2 p-2 border border-gray-300 rounded-lg relative">  
                <img className="w-80 h-50 object-cover " src={"https://media-assets.swiggy.com/swiggy/image/upload/" + value?.info?.mediaFiles[0].url}></img>
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent"></div>
                <p className="absolute bottom-2 left-2 text-xl text-white z-10">
                    {value.info.name}
                </p>
                <p className="absolute bottom-2 right-2 text-xl text-white z-10">
                    {value?.info?.rating?.value}
                </p>
            </div>
        </a>
        </div>
    )
}