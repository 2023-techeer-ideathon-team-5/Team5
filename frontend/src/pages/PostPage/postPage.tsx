import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaSearch } from "react-icons/fa";

function PostPage() {
  return (
    <div className="flex flex-col h-screen">
      <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
        <h1 className="text-2xl font-bold">해드리오</h1>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 mr-2 bg-gray-700 rounded-lg focus:outline-none"
          />
          <span className="mr-2 text-gray-400">
            <FaSearch size={20} />
          </span>
          <Link
            to="/profilePage"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            <FaUser size={20} />
          </Link>
        </div>
      </header>

      <main className="flex flex-col items-center justify-center flex-1 p-4">
        <div className="max-w-lg bg-white border border-gray-200 rounded-lg p-4">
          {"게시글 내용"}
        </div>
        <div className="mb-8"></div>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
          게시글 작성
        </button>
      </main>

      <footer className="flex justify-end p-4 bg-gray-200"></footer>
    </div>
  );
}

export default PostPage;
