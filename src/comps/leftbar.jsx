import { IoIosMore, IoMdNotificationsOutline } from "react-icons/io";
import { CiCircleMore } from "react-icons/ci";
import { BsPerson } from "react-icons/bs";
import { IoFlashOutline, IoSearchOutline } from "react-icons/io5";
import { MdPeopleAlt, MdMailOutline } from "react-icons/md";
import { PiSuitcaseSimple } from "react-icons/pi";
import { FaRegBookmark } from "react-icons/fa";
import { LuSquareSlash } from "react-icons/lu";
import { GoHomeFill } from "react-icons/go";
import { TbBrandX } from "react-icons/tb";
import Element from "./element.jsx";
export default function LeftBar({ setPage }) {
  return (
    <div className=" h-screen w-[22%] fixed p-2">
      <div className="ml-[50%] flex flex-col gap-2">
        <Element>
          <TbBrandX />
        </Element>
        <Element setPage={setPage} name="Home">
          <GoHomeFill />
        </Element>
        <Element name="explore">
          <IoSearchOutline />
        </Element>
        <Element name="notifications">
          <IoMdNotificationsOutline />
        </Element>
        <Element name="messages">
          <MdMailOutline />
        </Element>
        <Element name="grok">
          <LuSquareSlash />
        </Element>
        <Element name="bookmarks">
          <FaRegBookmark />
        </Element>
        <Element name="jobs">
          <PiSuitcaseSimple />
        </Element>
        <Element name="communities">
          <MdPeopleAlt />
        </Element>
        <Element name="premium">
          <TbBrandX />
        </Element>
        <Element name="verified Orgs">
          <IoFlashOutline />
        </Element>
        <Element setPage={setPage} name="profile">
          <BsPerson />
        </Element>
        <Element name="more">
          <CiCircleMore />
        </Element>
        <button className=" rounded-3xl bg-[#1d9bf0] hover:bg-[#3e96d1] text-white p-2 px-20 font-medium my-3 ">
          Post
        </button>
        <div className=" fixed bottom-3 flex items-center content-center rounded-full hover:bg-gray-700 hover:bg-opacity-30 p-2">
          <img
            src="https://www.strasys.uk/wp-content/uploads/2022/02/Depositphotos_484354208_S.jpg"
            alt=""
            className="rounded-full"
            width={40}
            height={40}
          />
          <div
            className="pl-1 flex flex-col flex-1 cursor-pointer "
            onClick={() => setPage("Profile")}
          >
            <h1 className="text-sm font-semibold"> Mahdi</h1>
            <p className="text-gray-400 text-sm">@mansourbmahdi</p>
          </div>
          <div className="text-gray-400 hover:text-blue-500 flex justify-center items-center rounded-full cursor-pointer hover:bg-blue-500 transition-all hover:bg-opacity-15">
            <IoIosMore />
          </div>
        </div>
      </div>
    </div>
  );
}
