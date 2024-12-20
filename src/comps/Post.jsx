import React, { useState } from "react";
import { TbMessageCircle } from "react-icons/tb";
import { IoIosMore, IoIosStats } from "react-icons/io";
import { RiShare2Line } from "react-icons/ri";
import { FaRegBookmark, FaRetweet } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import Icon from "./icon";
import PostContent from "./postcontent.jsx";
export default function Post({ data, children }) {
  const [isLiked, setIsliked] = useState(false);
  const [isReposted, setIsReposted] = useState(data.reposted);
  const [isSaved, setIsSaved] = useState(false);
  return (
    <div id="post" className="flex pt-3  pr-3">
      <div className="w-[10%]  ">
        <img
          src={data.profilePic}
          alt="profile pic alt"
          className="rounded-full ml-2"
          width="40px"
          height="40px"
        />
      </div>
      <div id="rest" className="overflow-hidden w-[90%]">
        <div className=" items-center flex gap-1 w-[100%] relative" id="infos">
          <a href="" className="font-bold first-letter:uppercase">
            {data.fullname}
          </a>
          {data.verified && <MdVerified />}
          <h3 className=" text-sm text-gray-500">{data.username}</h3>
          <h3 className="text-sm text-gray-500">·</h3>
          <h4 className="text-sm text-gray-500">{data.time}</h4>
          <div className="text-gray-400 hover:text-blue-500 absolute right-2 top-0 h-8 w-8 flex justify-center items-center rounded-full cursor-pointer hover:bg-blue-500 transition-all hover:bg-opacity-15">
            <IoIosMore />
          </div>
        </div>
        <div id="content ">
          <PostContent>{children}</PostContent>
        </div>
        <div id="icons " className="flex place-content-around py-2">
          <Icon number={data.comments} color="#f2c6cd">
            <TbMessageCircle />
          </Icon>
          <Icon
            number={isReposted ? data.retweets + 1 : data.retweets}
            color="black"
          >
            <FaRetweet
              onClick={(e) => {
                setIsReposted((prev) => {
                  !prev;
                  data.reposted = !prev;
                  return !prev;
                });
              }}
              color={isReposted ? "green" : ""}
            />
          </Icon>
          <Icon number={isLiked ? data.likes + 1 : data.likes} color="black">
            <FaRegHeart
              onClick={(e) => setIsliked((prev) => !prev)}
              color={isLiked ? "red" : ""}
            />
          </Icon>
          <Icon number={data.views} color="#3CDBD3">
            <IoIosStats />
          </Icon>
          <div className="flex">
            <Icon color="#000000">
              <FaRegBookmark
                onClick={(e) => setIsSaved((prev) => !prev)}
                color={isSaved ? "blue" : ""}
              />
            </Icon>
            <Icon color="#f8bb32">
              <RiShare2Line />
            </Icon>
          </div>
        </div>
      </div>
    </div>
  );
}
