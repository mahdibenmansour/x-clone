import Home from "./pages/home";
import Profile from "./pages/profile";
import React, { useState } from "react";
import data from "./comps/posts.json";
import { useEffect } from "react";
function App() {
  const [page, setPage] = useState("Home");
  const [posts, setPosts] = useState(data);
  const [postsApi, setPostsApi] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => setPostsApi(data.posts));
  }, []);
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  }, []);
  return (
    <>
      {/* i need to pass set posts   */}
      {page === "Home" ? (
        <Home setPage={setPage} setPosts={setPostsApi} posts={postsApi} />
      ) : (
        <Profile setPage={setPage} posts={postsApi} />
      )}
    </>
  );
}
export default App;
