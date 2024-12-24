import React, { useState, useEffect } from "react";
import { TbMessageCircle } from "react-icons/tb";
import { IoIosMore, IoIosStats } from "react-icons/io";
import { RiShare2Line } from "react-icons/ri";
import { FaRegBookmark, FaRetweet } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { Router, useLoaderData } from "react-router";
import Icon from "./icon";
import PostContent from "./postcontent.jsx";
export default function Post({ data, children }) {
  {
    console.log(data.id);
  }
  const [isLiked, setIsliked] = useState(false);
  const [isReposted, setIsReposted] = useState(data.reposted);
  const [isSaved, setIsSaved] = useState(false);
  const [user, setUser] = useState({});
  useEffect(() => {
    fetch(`https://randomuser.me/api/`)
      .then((res) => res.json())
      .then((data) => setUser(data.results[0]));
  }, []);
  const [imgApi, setImg] = useState("");
  useEffect(() => {
    fetch("https://api.api-ninjas.com/v1/randomimage?category=abstract", {
      headers: {
        "X-Api-Key": "1GQo09bPtHVkwZyBL/pH2A==YE5qeSsdkhUkFmWl",
        Accept: "image/jpg",
      },
    })
      .then((response) => response.blob())
      .then((blob) => {
        setImg(URL.createObjectURL(blob));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  const random = (a, b) => Math.floor(Math.random() * (a - b + 1)) + b;
  const retweets = random(20, 400);
  return (
    <div id="post" className="flex pt-3  pr-3">
      <div className="w-[10%]  ">
        <img
          src={user.picture?.medium}
          alt="profile pic alt"
          className="rounded-full ml-2"
          width="40px"
          height="40px"
        />
      </div>
      <div id="rest" className="overflow-hidden w-[90%]">
        <div className=" items-center flex gap-1 w-[100%] relative" id="infos">
          <a href="" className="font-bold first-letter:uppercase">
            {user.name?.first} {user.name?.last}
          </a>
          {data.verified && <MdVerified />}
          <h3 className=" text-sm text-gray-500">@{user.login?.username}</h3>
          <h3 className="text-sm text-gray-500">·</h3>
          <h4 className="text-sm text-gray-500">{random(1, 12)}h</h4>
          <div className="text-gray-400 hover:text-blue-500 absolute right-2 top-0 h-8 w-8 flex justify-center items-center rounded-full cursor-pointer hover:bg-blue-500 transition-all hover:bg-opacity-15">
            <IoIosMore />
          </div>
        </div>
        <div id="content ">
          <PostContent Imgsrc={data.id % 3 === 0 && imgApi}>
            {children}
          </PostContent>
        </div>
        <div id="icons " className="flex place-content-around py-2">
          <Icon number={random(11, 110)} color="#f2c6cd">
            <TbMessageCircle />
          </Icon>
          <Icon number={isReposted ? retweets + 1 : retweets} color="black">
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
          <Icon
            number={isLiked ? data.reactions.likes + 1 : data.reactions.likes}
            color="black"
          >
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
