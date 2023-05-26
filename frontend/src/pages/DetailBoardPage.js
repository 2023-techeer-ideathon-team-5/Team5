import React, { useState } from "react";
import MapComponent from "../components/map";

function DetailBoardPage() {
  const [title, setTitle] = useState("서브웨이 배달 해주세요");
  const [content, setContent] = useState(
    "BMT 30cm 1개로 최대한 빠르게 부탁드립니다 ^^"
  );
  const [fieldOne, setFieldOne] = useState("정왕 49 서브웨이");
  const [fieldTwo, setFieldTwo] = useState("13:30분까지");
  const [fieldThree, setFieldThree] = useState("2000원");
  const [showMap, setShowMap] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, fieldOne, fieldTwo, fieldThree, content });
  };

  const handlePlaceSelect = (placeName) => {
    setFieldOne(placeName);
    setShowMap(false);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-3/4 space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            게시물 조회
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
                onClick={() => setShowMap(true)}
                readOnly
                placeholder="원하는 장소의 위치를 클릭해주세요"
              />
              <input
                className="col-span-3 border rounded-md px-3 py-2 text-center"
                type="text"
                value={fieldTwo}
                onChange={(e) => setFieldTwo(e.target.value)}
                placeholder="최대 대기 시간을 설정해주세요"
              />
              <input
                className="col-span-3 border rounded-md px-3 py-2 text-right"
                type="text"
                value={fieldThree}
                onChange={(e) => setFieldThree(e.target.value)}
                placeholder="팁 가격을 작성해주세요"
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
              onClick={() => setShowModal(true)}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              승낙하기
            </button>
          </div>
          {showModal && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto"
              onClick={handleModalClose}
            >
              <div className="relative w-auto max-w-lg mx-auto my-6">
                <div className="relative flex flex-col bg-white border-0 rounded-lg shadow-lg">
                  <div className="flex items-start justify-between p-5 border-b border-solid rounded-t">
                    <h3 className="text-xl font-semibold">거래가 성립</h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={handleModalClose}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  <div className="relative p-6 flex-auto z-60">
                    <p className="text-lg">
                      아래의 링크를 눌러 오픈채팅방에 참여해주세요
                      <a
                        href="https://open.kakao.com/o/sXShwtmf"
                        className="text-blue-500 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://open.kakao.com/o/sXShwtmf
                      </a>
                    </p>
                    {/* 추가적인 내용 */}
                  </div>
                </div>
              </div>
              <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
            </div>
          )}
        </form>
      </div>
      {showMap && <MapComponent onPlaceSelect={handlePlaceSelect} />}
    </div>
  );
}

export default DetailBoardPage;
