import { IoLocationOutline } from "react-icons/io5";
import { RiCalendarScheduleLine, RiListRadio } from "react-icons/ri";
import { FaRegSmile } from "react-icons/fa";
import { MdOutlineGifBox } from "react-icons/md";
import { CiImageOn } from "react-icons/ci";
import { useRef, useState } from "react";

export default function NewPost({ setReposts, setPosts, setPage }) {
  const [newPost, setNewPost] = useState({});
  const fileRef = useRef();

  console.log(newPost.image?.link);

  return (
    <div id="post" className="flex pt-3 border-t border-gray-500 pr-3 pb-2">
      <div className="w-[7.5%]  ">
        <img
          src="https://www.strasys.uk/wp-content/uploads/2022/02/Depositphotos_484354208_S.jpg"
          alt="pp"
          className="rounded-full ml-2 cursor-pointer"
          width="40px"
          height="40px"
          onClick={() => setPage("Profile")}
        />
      </div>
      <div id="rest" className=" w-[90%] ">
        <input
          placeholder="What is happening?!"
          type="text"
          className="pl-4 text-2xl w-[100%] outline-none bg-transparent"
          onChange={(e) => {
            setNewPost((prev) => ({ ...prev, description: e.target.value }));
          }}
        ></input>
        <div className="flex mt-14">
          <div
            id="icons"
            className="   text-[#1d9bf0] pl-3 flex gap-2 justify-around items-center content-center"
          >
            <div className="hover:bg-blue-500 hover:bg-opacity-40 rounded-full p-1">
              <CiImageOn onClick={() => fileRef.current.click()} size={23} />
              <input
                type="file"
                className="hidden"
                ref={fileRef}
                accept="image/*"
                onChange={(e) =>
                  setNewPost((prev) => ({
                    ...prev,
                    image: {
                      ...prev.image,
                      link: URL.createObjectURL(e.target.files[0]),
                    },
                  }))
                }
              ></input>
            </div>
            <div className="hover:bg-blue-500 hover:bg-opacity-40 rounded-full p-1">
              <MdOutlineGifBox size={23} />
            </div>
            <div className="hover:bg-blue-500 hover:bg-opacity-40 rounded-full p-1">
              <RiListRadio size={23} />
            </div>
            <div className="hover:bg-blue-500 hover:bg-opacity-40 rounded-full p-1">
              <FaRegSmile size={23} />
            </div>
            <div className="hover:bg-blue-500 hover:bg-opacity-40 rounded-full p-1">
              <RiCalendarScheduleLine size={23} />
            </div>
            <div className="hover:bg-blue-500 hover:bg-opacity-40 rounded-full p-1">
              <IoLocationOutline size={23} />
            </div>
          </div>
          <div className="w-[60%]"></div>
          <button
            className=" rounded-3xl bg-[#1d9bf0] hover:bg-[#3e96d1] text-white p-2 px-6 font-medium "
            onClick={(e) =>
              setPosts((prev) => [
                ...prev,
                {
                  ...newPost,
                  type: "all",
                  fullname: "mahdi",
                  username: "@mahdi",
                  time: "3h",
                  likes: 50,
                  retweets: 50,
                  views: 50,
                  comments: 50,
                  verified: true,
                  profilePic:
                    "https://media.tenor.com/2fDPAEGo1vAAAAAM/alfred-marko.gif",
                },
              ])
            }
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
