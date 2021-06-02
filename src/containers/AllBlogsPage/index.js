import React from "react";

const AllBlogsPage = ({ token, setToken, setUser }) => {
  return (
    <div className="bg-indigo-200 min-h-screen max-h-auto flex justify-center items-center">
      <button
        onClick={() => {
          setToken("");
          setUser("");
          localStorage.clear();
        }}
        className="bg-red-400 p-4 rounded absolute top-5 right-5"
      >
        Log out
      </button>
      <div className="flex flex-col md:flex-row items-center">
        <div className="">form</div>
        <div className="">feed</div>
      </div>
    </div>
  );
};

export default AllBlogsPage;
