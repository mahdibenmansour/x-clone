import React, { useState } from 'react';
import LeftBar from "../comps/leftbar.jsx"
//  
import Topbar from "../comps/topbar";
import RightBar from "../comps/rightbar";
import Feed from "../comps/feed.jsx"
import Following from '../comps/following.jsx'; 
export default function Home(){
  const [isToggled1, setIsToggled1] = useState(true);
  const [isToggled2, setIsToggled2] = useState(false);
return(
    <div className=" text-white flex content-center ">
      <LeftBar/>
      <main className="flex flex-1">
        <div className=" flex flex-col  ml-[25%] w-[38%] border border-1 border-b-0 border-t-0 border-gray-600">
          <Topbar isToggled1={isToggled1} isToggled2={isToggled2} setIsToggled1={setIsToggled1} setIsToggled2={setIsToggled2} />
          {isToggled1?<Feed/>:<Following/>}
        </div>
        <RightBar />
      </main>
    </div>
)
}