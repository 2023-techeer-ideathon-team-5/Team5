import React from "react";
import { Link } from "react-router-dom";

const dummyData = [
  {
    id: 1,
    type: "사주세요",
    title: "첫 번째 게시글",
    name: "사용자1",
    time: "2023-05-27 10:00:00",
  },
  {
    id: 2,
    type: "사드립니다",
    title: "두 번째 게시글",
    name: "사용자2",
    time: "2023-05-27 11:00:00",
  },
  {
    id: 3,
    type: "사주세요",
    title: "세 번째 게시글",
    name: "사용자3",
    time: "2023-05-27 12:00:00",
  },
  {
    id: 4,
    type: "사드립니다",
    title: "네 번째 게시글",
    name: "사용자4",
    time: "2023-05-27 13:00:00",
  },
  {
    id: 5,
    type: "사주세요",
    title: "다섯 번째 게시글",
    name: "사용자5",
    time: "2023-05-27 14:00:00",
  },
];

function BoardList() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-3/4">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
          게시글 리스트
        </h2>
        {dummyData.map((item) => (
          <Link key={item.id} to={`/board/${item.id}`}>
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6 cursor-pointer">
              <div className="flex justify-between items-center mb-4">
                <span
                  className={`text-lg font-bold ${
                    item.type === "사주세요" ? "text-blue-500" : "text-red-500"
                  }`}
                >
                  [{item.type}]
                </span>
                <span className="text-sm text-gray-500">{item.time}</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-600">작성자: {item.name}</p>
            </div>
          </Link>
        ))}
        <main className="flex flex-col items-center justify-center flex-1 p-4">
          <div className="mb-8"></div>
          <Link to={`/board-write`}>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
              게시글 작성
            </button>
          </Link>
        </main>

        <footer className="flex justify-end p-4 bg-gray-200"></footer>
      </div>
    </div>
  );
}

export default BoardList;
