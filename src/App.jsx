import Home from "./pages/home";
import Profile from "./pages/profile";
import React, { useState } from "react";
import data from "./comps/posts.json";
function App() {
  const [page, setPage] = useState("Home");
  const [posts, setPosts] = useState(data);
  return (
    <>
      {/* i need ti pass set posts   */}
      {page === "Home" ? (
        <Home setPage={setPage} setPosts={setPosts} posts={posts} />
      ) : (
        <Profile setPage={setPage} posts={posts} />
      )}
    </>
  );
}
export default App;
