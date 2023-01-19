import React from "react";

import { useEffect, useRef } from "react";

function Main(){

    return(
        <div className=" h-screen w-full flex-col mt-24 text-center ">
            <div className=" w-full h-1/6  w-full ">
                <h2 className="text-white  text-2xl">Hello World</h2>
            </div>
            <div className=" h-1/2 w-full">
                <h1 className="text-white font-bold text-5xl sm:text-7xl">Mateu Sandoval</h1>
                <h4 className="text-white mt-20 text-xl">Full-Stack Developer</h4>
            </div>
        </div>
    )
}
export default Main;