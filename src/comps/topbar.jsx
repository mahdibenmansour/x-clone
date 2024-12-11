import { HiOutlineMinusSm } from "react-icons/hi";

export default function Topbar() {
  return (
    <div className="flex justify-around border-b border-gray-600 h-10 cursor-pointer">
      <div className="relative flex flex-col hover:bg-[#0c0b0b] w-[50%] items-center">
        <h1>For You</h1>
        <div className="absolute bottom-0 h-1 w-[15%] rounded-3xl bg-[#1d9bf0]">

        </div>
      </div>
      <div className="flex flex-col w-[50%] hover:bg-[#0c0b0b] items-center">
      <h1>Following</h1>
      </div>
    </div>
  );
}
    