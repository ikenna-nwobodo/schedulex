import React, { useState } from "react";

function NewTask({ position }) {
  const [addnew, setaddnew] = useState(false);
  const showadd = () => {
    setaddnew(!addnew);
  };
  return (
    <div className={`{" w-full flex justify-${position} bg-red-500"}`}>
      {addnew ? (
        <div className="flex w-full gap-4 items-end">
          <input
            className="border-b-2 text-lg placeholder:text-sm outline-none outline-0 px-2 md:px-4 bg-transparent border-black flex-1"
            placeholder="Enter task details"
          />
          <div className="flex flex-col md:flex-row gap-2">
            <p className="bg-black shadow-lg text-xs text-center text-white px-4 md:px-6 py-2 md:py-3 rounded-md cursor-pointer">
              Add
            </p>
            <p
              className="bg-white shadow-lg text-xs text-black px-4 md:px-6 py-2 md:py-3 rounded-md cursor-pointer"
              onClick={showadd}
            >
              Cancel
            </p>
          </div>
        </div>
      ) : (
        <p
          className="bg-black shadow-lg text-white px-6 py-3 text-center rounded-md cursor-pointer lg:w-1/5"
          onClick={showadd}
        >
          New Task
        </p>
      )}
    </div>
  );
}

export default NewTask;