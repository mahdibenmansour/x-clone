import React, { useState } from "react";
import LeftBar from "../comps/leftbar.jsx";
//
import Topbar from "../comps/topbar";
import RightBar from "../comps/rightbar";
import Feed from "../comps/feed.jsx";
import Following from "../comps/following.jsx";
import data from "../comps/posts.json";
export default function Home({ setPage }) {
  const [tab, setTab] = useState("forYou");
  const [posts, setPosts] = useState(data);
  const [reposts, setReposts] = useState([]);
  return (
    <div className=" text-white flex content-center ">
      <LeftBar setReposts={setReposts} setPage={setPage} />
      <main className="flex flex-1">
        <div className=" flex flex-col h-[100%] ml-[25%]  w-[38%] border border-1 border-b-0 border-t-0 border-gray-600">
          <Topbar tab={tab} setTab={setTab} />
          {tab === "forYou" ? (
            <Feed
              setPage={setPage}
              posts={posts.filter(
                (post) => post.type === "all" || post.type == "forYou"
              )}
              setPosts={setPosts}
              setReposts={setReposts}
            />
          ) : (
            <Following
              setPage={setPage}
              posts={posts.filter(
                (post) => post.type === "all" || post.type == "following"
              )}
              setPosts={setPosts}
              setReposts={setReposts}
            />
          )}
        </div>
        <RightBar />
      </main>
    </div>
  );
}
