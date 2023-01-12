import React from "react";

import { useEffect, useRef } from "react";

function Main(){

    
    
    return(
        <div className=" h-screen  text-center relative">
            <div className="container h-1/6 flex justify-center items-center">
                <span className="text-white container text-2xl">Hello World</span>
            </div>
            <div className="container h-1/3">
                <h1 className="text-white font-bold text-7xl">Matt Sandoval Balada</h1>
                <h4 className="text-white mt-20 text-xl">Full-Stack Developer</h4>
            </div>
            <div className=" container h-1/2 flex justify-center items-center gap-32">
                <button className="text-white rounded-lg bg-green-400 w-20 h-10"><a>CV</a></button>
                <button className="text-white rounded-lg bg-blue-900 w-20 h-10"><a>Let's Talk</a></button>
            </div>
        </div>
    )
}
export default Main;