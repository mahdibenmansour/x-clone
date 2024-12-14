export default function Topbar({isToggled1, setIsToggled1,isToggled2, setIsToggled2}) {
  return (
    
    <div className="flex justify-around border-b border-gray-600 h-10 cursor-pointer">
      <div onClick={e=>{setIsToggled1(true);setIsToggled2(false)}} className="relative flex flex-col hover:bg-[#0c0b0b] w-[50%] items-center">
        <h1>For You</h1>
        {isToggled1?<div className="absolute bottom-0 h-1 w-[15%] rounded-3xl bg-[#1d9bf0]"></div>:""}

      </div>
      <div onClick={e=>{setIsToggled2(true);setIsToggled1(false)}} className="relative flex flex-col hover:bg-[#0c0b0b] w-[50%] items-center">
      <h1>Following</h1>
      {isToggled2?<div className="absolute bottom-0 h-1 w-[15%] rounded-3xl bg-[#1d9bf0]"></div>:""}
      </div>
    </div>
  );
}
    