import React, { useState } from "react";
import MapComponent from "../components/map";

function CreatePostPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [fieldOne, setFieldOne] = useState("");
  const [fieldTwo, setFieldTwo] = useState("");
  const [fieldThree, setFieldThree] = useState("");
  const [showMap, setShowMap] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, fieldOne, fieldTwo, fieldThree, content });
  };

  const handlePlaceSelect = (placeName) => {
    setFieldOne(placeName);
    setShowMap(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-3/4 space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            게시물 작성
          </h2>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="title" className="sr-only">
                Title
              </label>
              <input
                id="title"
                name="title"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-12 ">
              <input
                className="col-span-6 border rounded-md px-3 py-2"
                type="text"
                value={fieldOne}
                onClick={() => setShowMap(true)} // input 클릭 시 지도가 표시됩니다.
                readOnly // 사용자는 이 입력란에 직접 작성하지 못합니다.
              />
              <input
                className="col-span-3 border rounded-md px-3 py-2 text-center"
                type="text"
                value={fieldTwo}
                onChange={(e) => setFieldTwo(e.target.value)}
                placeholder="15:00"
              />
              <input
                className="col-span-3 border rounded-md px-3 py-2 text-right"
                type="text"
                value={fieldThree}
                onChange={(e) => setFieldThree(e.target.value)}
                placeholder="원"
              />
            </div>
            <div className="mt-8">
              <label htmlFor="content" className="sr-only">
                Content
              </label>
              <textarea
                id="content"
                name="content"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm h-60"
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              게시물 작성
            </button>
          </div>
        </form>
      </div>
      {showMap && <MapComponent onPlaceSelect={handlePlaceSelect} />}
    </div>
  );
}

export default CreatePostPage;
