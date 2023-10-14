import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Blog = () => {
  const { blogData } = useContext(AuthContext);

  return (
    <div className="space-y-8">
      <div className="bg-[#94c120] py-2">
        <div className="bg-[#f8ffe7]">
        <h1 className="text-center text-4xl py-3 font-bold text-gray-700">Blog</h1>
        </div>
      </div>

      <div className="container mx-auto md:px-8">
      {blogData.map((blog, index) => (
        <div
          key={index}
          className="bg-[#fcfff5] border border-gray-300 p-8 rounded-lg mb-4"
        >
          <h2 className="text-2xl  font-[poppins] text-[#94c120] pb-2 font-bold">
            {blog.Question}
          </h2>
          <p className="font-semibold text-lg text-gray-500">{blog.Answer}</p>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Blog;
