import { MdMoreHoriz } from "react-icons/md";
export default function Trends({ title, person, number }) {
  return (
    <div className="relative">
      <div className="pb-3 pr-4 pl-4 hover:bg-[#0c0b0b] cursor-pointer">
        <div className="text-gray-400 hover:text-blue-500 absolute right-2 top-1.5 h-8 w-8 flex justify-center items-center rounded-full cursor-pointer hover:bg-blue-500 transition-all hover:bg-opacity-15">
          <MdMoreHoriz className="h-4 w-4 " />
        </div>
        <p className=" text-[12px] text-gray-500 first-letter:uppercase ">
          {title}
        </p>
        <h2 className=" text-[14px] font-bold first-letter:uppercase ">
          {person}
        </h2>
        <p className=" text-[12px] text-gray-500">{number} posts</p>
      </div>
    </div>
  );
}
