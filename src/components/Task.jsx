import React, { useState } from "react";

function Task() {
  const [showmodal, setmodal] = useState(false);
  const modal = () => {
    setmodal(!showmodal);
  };
  return (
    <>
      {showmodal && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
          <div
            onClick={modal}
            className="bg-black bg-opacity-50 h-full w-full absolute cursor-default"
          ></div>
          <div className="bg-white w-[70%] lg:w-[30%] flex flex-col gap-8 p-4 rounded-lg shadow-md z-30">
            <div>
              <span className="text-xs font-normal text-neutral-500">
                Created at 11:23pm
              </span>
              <div className="flex items-center justify-between">
                <p className="text-xl font-semibold">Make money😪</p>
                <span className="text-xs text-yellow-500 font-medium bg-yellow-500 bg-opacity-15 py-1 px-2 rounded-xl">
                  Pending
                </span>
              </div>
            </div>
            <div className="flex md:flex-row flex-col gap-4">
              <p className="text-sm bg-teal-800 hover:bg-opacity-85 text-white text-center md:w-max px-4 py-2 cursor-pointer rounded-md">
                Mark as complete
              </p>
              <p className="text-sm bg-cyan-800 hover:bg-opacity-85 text-white text-center md:w-max px-4 py-2 cursor-pointer rounded-md">
                Start
              </p>
              <p className="text-sm bg-red-800 hover:bg-opacity-85 text-white text-center md:w-max px-4 py-2 cursor-pointer rounded-md">
                Delete
              </p>
            </div>
          </div>
        </div>
      )}

      <div
        onClick={modal}
        className="bg-white w-full h-[70px] flex items-center justify-between p-4 rounded-lg cursor-pointer shadow-xl hover:shadow-md"
      >
        <p className="text-xl font-semibold">Make money😪</p>
        <span className="text-xs text-yellow-500 font-medium bg-yellow-500 bg-opacity-15 py-1 px-2 rounded-xl">
          Pending
        </span>
      </div>
    </>
  );
}

export default Task;
