import React, { useState } from "react";

const ChangePasswordPage: React.FC = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // 비밀번호 변경 로직을 구현해주세요.
    if (password === confirmPassword) {
      // 비밀번호가 일치할 경우 변경 로직을 실행합니다.
      console.log("비밀번호 변경이 완료되었습니다.");
    } else {
      // 비밀번호가 일치하지 않을 경우 에러 처리를 할 수 있습니다.
      console.log("비밀번호가 일치하지 않습니다.");
    }

    // 입력된 비밀번호와 확인용 비밀번호를 초기화합니다.
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-4">
          <label
            className="block mb-2 font-bold text-gray-700"
            htmlFor="password"
          >
            비밀번호 입력
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block mb-2 font-bold text-gray-700"
            htmlFor="confirmPassword"
          >
            비밀번호 확인
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
            required
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-red-500 text-white rounded-lg"
        >
          변경하기
        </button>
      </form>
    </div>
  );
};

export default ChangePasswordPage;
