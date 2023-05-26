import React from "react";
import { Link } from "react-router-dom";

function PostPage() {
  return (
    <div className="flex flex-col h-screen">
      {/* 헤더 섹션 */}
      <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
        {/* 왼쪽 상단의 제목 */}
        <h1 className="text-2xl font-bold">Sample</h1>
        <div className="flex items-center">
          {/* 검색창 */}
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 mr-2 bg-gray-700 rounded-lg focus:outline-none"
          />
          {/* 프로필 페이지 링크 */}
          <Link
            to="/profilePage"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            ProfilePage
          </Link>
        </div>
      </header>

      {/* 메인 섹션 */}
      <main className="flex flex-col items-center justify-center flex-1 p-4">
        <div className="max-w-lg bg-white border border-gray-200 rounded-lg p-4">
          {"게시글 내용"}
        </div>
        <div className="mb-8"></div>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
          게시글 작성
        </button>
      </main>

      {/* 푸터 섹션 */}
      <footer className="flex justify-end p-4 bg-gray-200">
        {/* "게시글 작성" 버튼 */}
      </footer>
    </div>
  );
}

export default PostPage;
