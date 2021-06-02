import React from "react";
import CreateBlogForm from "../../components/CreateBlogForm";
import SignupForm from "../../components/SignupForm";

const AllBlogsPage = ({ user, token, setToken, setUser }) => {
  return (
    <div className="">
      <div className="flex flex-row items-center items-center justify-between">
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
      <div className="bg-indigo-200 min-h-screen max-h-auto flex flex-col justify-center items-center">
        <div className="flex flex-col md:flex-row items-center">
          <CreateBlogForm user={user} token={token} />
          <SignupForm />
        </div>
      </div>
    </div>
  );
};

export default AllBlogsPage;
