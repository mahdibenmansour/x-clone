import Home from "./pages/home";
import Profile from "./pages/profile";
import React, { useState } from "react";
function App() {
  const [page, setPage] = useState("Home");
  return (
    <>
      {page === "Home" ? (
        <Home setPage={setPage} />
      ) : (
        <Profile setPage={setPage} />
      )}
    </>
  );
}
export default App;
