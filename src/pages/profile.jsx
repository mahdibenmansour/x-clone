import { FaRegCalendarAlt } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";
import LeftBar from "../comps/leftbar.jsx";
import RightBar from "../comps/rightbar";
import { useState } from "react";
import Section from "../comps/profileComps/section.jsx";
import { FaRetweet } from "react-icons/fa6";
import Post from "../comps/Post.jsx";
export default function Profile({ setPage, posts }) {
  const [section, setSection] = useState("Posts");
  return (
    <div className=" text-white flex content-center ">
      <LeftBar setPage={setPage} />
      <main className="flex flex-1">
        <div className=" flex flex-col h-[100%] min-h-screen ml-[25%]  w-[38%] border border-1 border-b-0 border-t-0 border-gray-600">
          {/*  */}
          <div className="flex flex-col ">
            <div className="flex h-12">
              <div className="w-[8%] content-center items-center px-5">
                <FaArrowLeft
                  className="cursor-pointer"
                  onClick={(e) => setPage("Home")}
                  size={25}
                />
              </div>
              <div className="flex flex-col">
                <p>Mahdi</p>
                <p className="text-gray-500 text-sm">30 posts</p>
              </div>
            </div>
            <div className="w-[100%] h-40 bg-[#626568] bg-opacity-65"></div>
            <div className="w-[100%] h-20 flex flex-row-reverse relative ">
              <button className="mr-14 w-28 h-10 border border-gray-500 mt-2 rounded-full">
                Edit Profile
              </button>
              <div className=" absolute bottom-0 left-5">
                <img
                  className="  rounded-full w-40 h-40 "
                  src="https://www.strasys.uk/wp-content/uploads/2022/02/Depositphotos_484354208_S.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="flex items-center content-center">
              <p className="mt-2 ml-4 font-bold text-xl h-9 first-letter:uppercase ">
                mahdi
              </p>
              <button className="ml-24 w-28 pl-4 border border-gray-500  rounded-full relative ">
                <MdVerified
                  className="absolute left-1 bottom-1"
                  color={"#1d9bf0"}
                />
                Get verified
              </button>
            </div>
            <div>
              <p className="ml-3 text-gray-400 first-letter:uppercase">
                @mansourbmahdi
              </p>
            </div>
            <div>
              <FaRegCalendarAlt
                size={14}
                color="gray"
                className="inline-block ml-4"
              />
              <p className="ml-3 text-gray-400 inline-block text-sm first-letter:uppercase">
                joined March 2024
              </p>
            </div>
            <div className=" flex gap-4 text-gray-400 ">
              <div>
                <p className="hover:underline cursor-pointer">
                  <span className="text-white mr-1 ml-3 ">71</span>Following
                </p>
              </div>
              <div>
                <p className="hover:underline cursor-pointer">
                  <span className="text-white mr-1 ">3</span>Followers
                </p>
              </div>
            </div>
            <div className="flex mt-4 w-[100%] border-b border-gray-600 ">
              <Section name="Posts" setSection={setSection} section={section} />
              <Section
                name="Replies"
                setSection={setSection}
                section={section}
              />
              <Section
                name="Highlights"
                setSection={setSection}
                section={section}
              />
              <Section
                name="Articles"
                setSection={setSection}
                section={section}
              />
              <Section name="Media" setSection={setSection} section={section} />
              <Section name="Likes" setSection={setSection} section={section} />
            </div>
            {/* posts*/}
            {section === "Posts" && (
              <div id="posts" className="flex flex-col h-[100] pt-2">
                {posts
                  .filter((post) => post.reposted === true)
                  .map((post) => (
                    <div
                      id="post"
                      className="border-b border-gray-500 flex flex-col h-[100]"
                    >
                      <div className="pl-6 flex gap-3 items-center content-center font-semibold">
                        <FaRetweet color="gray" size={20} />
                        <p className=" text-gray-500">You reposted</p>
                      </div>
                      <Post key={post.id} data={post}>
                        {post.body && <p>{post.body}</p>}
                        {post.image && (
                          <img
                            className="rounded-xl"
                            src={post.image.link}
                            alt={post.image.alt}
                          />
                        )}
                      </Post>
                    </div>
                  ))}
              </div>
            )}
            {/* posts*/}
          </div>
          {/*  */}
        </div>
        <RightBar />
      </main>
    </div>
  );
}
