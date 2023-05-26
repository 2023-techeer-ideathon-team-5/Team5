import React from "react";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  const username = "홍길동"; // 사용자 아이디 예시
  const school = "한국공학대학교"; // 학교 예시

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="mb-4">
        <label
          className="block mb-2 font-bold text-gray-700"
          htmlFor="username"
        >
          이름 : {username}
        </label>
        <label className="block mb-2 font-bold text-gray-700" htmlFor="school">
          학교명 : {school}
        </label>
      </div>

      <div>
        <p className="text-sm mb-2 text-lightgray">거래 내역 페이지</p>
      </div>

      <div className="flex">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg mr-4">
          판매 내역
        </button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg mr-4">
          구매 내역
        </button>
        <Link
          to="./feedbackPage"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          후기 확인
        </Link>
      </div>
      <Link
        to="./changePassword"
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
      >
        비밀번호 변경
      </Link>
    </div>
  );
};

export default ProfilePage;
