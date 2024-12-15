export default function Topbar({tab,setTab}) {
  return (
    
    <div className="flex justify-around border-b border-gray-600 h-10 cursor-pointer">
      <div onClick={e=>setTab("forYou")} className="relative flex flex-col hover:bg-[#0c0b0b] w-[50%] items-center">
        <h1>For You</h1>
        {tab==="forYou"&&<div className="absolute bottom-0 h-1 w-[15%] rounded-3xl bg-[#1d9bf0]"></div>}

      </div>
      <div onClick={e=>setTab("following")} className="relative flex flex-col hover:bg-[#0c0b0b] w-[50%] items-center">
      <h1>Following</h1>
      {tab==="following"&&<div className="absolute bottom-0 h-1 w-[15%] rounded-3xl bg-[#1d9bf0]"></div>}
      </div>
    </div>
  );
}
    