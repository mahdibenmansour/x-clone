import { MdVerified } from "react-icons/md";
export default function Profiles({icon,name,username,verified}){
    return (
        <div className="hover:bg-[#0c0b0b] cursor-pointer flex">
          <div className="w-[50px] h-[50px]"> <img className="pl-4 pt-2 pb-2" src={icon} alt="" /></div>
          <div className="gap-24 flex items-center w-[100%] relative " >
            <div className="pl-2 ">
                <div className="flex items-center gap-1">
                <h1 className="font-bold text-sm">{name}</h1>
                <div className="text-blue-500">{verified?<MdVerified />:""}</div>
                </div>
            <p className=" text-gray-500 text-sm">{username}</p></div>
            <div className="">
            <button className=" absolute top-2 right-3 rounded-3xl h-8 bg-white text-black w-20 first-letter:uppercase font-medium text-sm">follow</button>
            </div>
          </div>
        </div>
      
    )
}