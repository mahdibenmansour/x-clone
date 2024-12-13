import { BiSearch } from "react-icons/bi";

export default function Search (){
    return(
        <div className="w-[100%] h-10  rounded-3xl bg-gray-600 bg-opacity-40 items-center content-center">
            <div className=" pl-4 flex ">
            <BiSearch size={20}/>
            {/* testing */}
            <input placeholder="Search" type="text" className="pl-4 flex-grow outline-none bg-transparent"></input>
            </div>
        </div>
    )
}