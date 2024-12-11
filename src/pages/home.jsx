import LeftBar from "../comps/leftbar.jsx"
//  
import Topbar from "../comps/topbar";
import RightBar from "../comps/rightbar";
import Feed from "../comps/feed.jsx"
export default function Home(){
return(
    <div className=" text-white flex content-center ">
      <LeftBar/>
      <main className="flex flex-1">
        <div className=" flex flex-col  ml-[25%] w-[38%] border border-1 border-b-0 border-t-0 border-gray-600">
          <Topbar />
          <Feed/>
        </div>
        <RightBar />
      </main>
    </div>
)
}