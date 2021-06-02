import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import BlogItem from "../BlogItem";

const AllBlogs = ({ token, user, newDataExists }) => {
  const [blogs, setBlogs] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchAllBlogs = async () => {
    try {
      const response = await axios({
        method: "get",
        url: "https://oiiu-backend.herokuapp.com/oiiu/get/allblogposts",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(response.data);
      setBlogs(response.data);
      setLoading(false);
      setErrorMessage("");
      setLoading(false);
    } catch (e) {
      console.log({ e });
      setLoading(false);
      setErrorMessage(e.response.data.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (newDataExists) fetchAllBlogs();
  }, [newDataExists]);

  useEffect(() => {
    if (loading) fetchAllBlogs();
  }, [loading]);

  return (
    <div className="bg-white p-4 m-4 flex flex-col w-full md:w-6/12">
      <div className="text-3xl text-gray-500 mb-4 font-semibold">
        Blog Feeds....
      </div>
      {
        errorMessage &&
        <div className="text-red-400 font-bold">errorMessage</div>
      }
      {loading ? (
        <div className="font-bold">Loading posts...</div>
      ) : (
        blogs.map((item, index) => {
          return (
            <BlogItem
              key={index}
              description={item.description}
              owner={item.owner}
              likes={item.likes}
            />
          );
        })
      )}
    </div>
  );
};

export default AllBlogs;
