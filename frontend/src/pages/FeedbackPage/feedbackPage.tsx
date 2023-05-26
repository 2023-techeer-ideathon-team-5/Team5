import React, { useState } from "react";

const ReviewPage: React.FC = () => {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleReviewChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setReview(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // 후기 제출 로직을 구현해주세요.
    console.log("후기 제출:", { name, review });

    // 입력된 이름과 후기 내용을 초기화합니다.
    setName("");
    setReview("");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-4">
          <label className="block mb-2 font-bold text-gray-700" htmlFor="name">
            이름
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block mb-2 font-bold text-gray-700"
            htmlFor="review"
          >
            후기 내용
          </label>
          <textarea
            id="review"
            value={review}
            onChange={handleReviewChange}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            rows={4}
            required
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          제출
        </button>
      </form>
    </div>
  );
};

export default ReviewPage;
