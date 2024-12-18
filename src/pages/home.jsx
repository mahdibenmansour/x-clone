import React, { createContext, useState, useContext } from "react";
import LeftBar from "../comps/leftbar.jsx";
//
import Topbar from "../comps/topbar";
import RightBar from "../comps/rightbar";
import Feed from "../comps/feed.jsx";
import Following from "../comps/following.jsx";
export default function Home({ setPage, posts, setPosts }) {
  const [tab, setTab] = useState("forYou");

  return (
    <div className=" text-white flex content-center ">
      <LeftBar setPage={setPage} />
      <main className="flex flex-1">
        <div className=" flex flex-col h-[100%] ml-[25%]  w-[38%] border border-1 border-b-0 border-t-0 border-gray-600">
          <Topbar tab={tab} setTab={setTab} />
          {tab === "forYou" ? (
            <Feed setPage={setPage} posts={posts} setPosts={setPosts} />
          ) : (
            <Following setPage={setPage} posts={posts} setPosts={setPosts} />
          )}
        </div>
        <RightBar />
      </main>
    </div>
  );
}
