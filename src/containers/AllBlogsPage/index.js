import React, { useState } from "react";
import AllBlogs from "../../components/AllBlogs";
import CreateBlogForm from "../../components/CreateBlogForm";

const AllBlogsPage = ({ user, token, setToken, setUser }) => {

  const [newDataExists, setNewDataExists] = useState(false);

  return (
    <div className="">
      <div className="flex flex-row items-center justify-between">
        <div className="p-2 m-2 rounded text-indigo-800 text-xl font-bold">Microblogging App</div>
        <button
          onClick={() => {
            setToken("");
            setUser("");
            localStorage.clear();
          }}
          className="bg-red-400 p-2 m-2 rounded"
        >
          Log out
        </button>
      </div>
      <div className="bg-indigo-200 min-h-screen max-h-auto flex flex-col justify-start items-center">
        <div className="flex flex-col items-center w-full">
          <CreateBlogForm user={user} token={token} setNewDataExists={setNewDataExists} />
          <AllBlogs newDataExists={newDataExists} />
        </div>
      </div>
    </div>
  );
};

export default AllBlogsPage;
