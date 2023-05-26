import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignUpPage() {
  const schools = ["한국공학대학교", "성결대학교", "이화여자대학교"];
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [schoolInfo, setSchoolInfo] = useState("");
  const [kakaoURL, setKakaoURL] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({ username, userId, password, schoolInfo, kakaoURL });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            회원가입
          </h2>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="name"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="user-id" className="sr-only">
                아이디
              </label>
              <input
                id="user-id"
                name="user-id"
                type="text"
                autoComplete="user-id"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                비밀번호
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <select
                id="school-info"
                name="school-info"
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={schoolInfo}
                onChange={(e) => setSchoolInfo(e.target.value)}
              >
                <option value="">학교를 선택해 주세요</option>
                {schools.map((school, index) => (
                  <option key={index} value={school}>
                    {school}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="kakao-url" className="sr-only">
                카카오톡 오픈채팅 url
              </label>
              <input
                id="kakao-url"
                name="kakao-url"
                type="url"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Kakao Talk URL"
                value={kakaoURL}
                onChange={(e) => setKakaoURL(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              회원가입
            </button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <p>
            계정이 있으신가요?{" "}
            <Link
              to="/signin"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              로그인하기
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
