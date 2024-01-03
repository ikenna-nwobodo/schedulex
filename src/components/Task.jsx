import React, { useState } from "react";
import { toast } from "react-toastify";

function Task({ id, title, time, status }) {
  const [showmodal, setmodal] = useState(false);
  const modal = () => {
    setmodal(!showmodal);
  };
  const complete = async (id) => {
    var updatestatus = "Completed";
    const newData = {
      id: id,
      title: title,
      date: time,
      status: updatestatus,
    };
    const update = await fetch(
      `https://schedulex-53f9f-default-rtdb.firebaseio.com/tasks/${id}.json`,
      { method: "PUT", body: JSON.stringify(newData) }
    )
      .then((res) => res.json())
      .then((data) => {
        modal();
      });
    if (!update) {
      toast.success("Task completed🥳");
    } else {
      toast.error("Problem dey o");
    }
    console.log(newData);
  };
  const iprogress = async (id) => {
    var updatestatus = "In-Progress";
    const newData = {
      id: id,
      title: title,
      date: time,
      status: updatestatus,
    };
    const update = await fetch(
      `https://schedulex-53f9f-default-rtdb.firebaseio.com/tasks/${id}.json`,
      { method: "PUT", body: JSON.stringify(newData) }
    )
      .then((res) => res.json())
      .then((data) => {
        modal();
      });
    if (!update) {
      toast.success("Task started💪🏽");
    } else {
      toast.error("Problem dey o");
    }
    console.log(newData);
  };
  const ondelete = async (id) => {
    if (window.confirm("You sure? This can't be undone.")) {
      const del = await fetch(
        `https://schedulex-53f9f-default-rtdb.firebaseio.com/tasks/${id}.json`,
        { method: "DELETE", ContentType: "application/json" }
      )
        .then((res) => res.json())
        .then((data) => console.log(data));
      if (!del) {
        toast.info("Task deleted🗑️");
      } else {
        toast.error("Problem dey o");
      }
      console.log(id);
    }
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
                Created {time}
              </span>
              <div className="flex items-center justify-between">
                <p className="text-xl font-semibold">{title}</p>
                <span
                  className={`text-xs font-medium bg-opacity-15 py-1 px-2 rounded-xl ${status}`}
                >
                  {status}
                </span>
              </div>
            </div>
            <div className="flex md:flex-row flex-col gap-4">
              {status === "Pending" && (
                <>
                  <p
                    className="text-sm bg-teal-800 hover:bg-opacity-85 text-white text-center md:w-max px-4 py-2 cursor-pointer rounded-md"
                    onClick={() => complete(id)}
                  >
                    Mark as complete
                  </p>
                  <p
                    onClick={() => iprogress(id)}
                    className="text-sm bg-cyan-800 hover:bg-opacity-85 text-white text-center md:w-max px-4 py-2 cursor-pointer rounded-md"
                  >
                    Start
                  </p>
                  <p
                    onClick={() => ondelete(id)}
                    className="text-sm bg-red-800 hover:bg-opacity-85 text-white text-center md:w-max px-4 py-2 cursor-pointer rounded-md"
                  >
                    Delete
                  </p>
                </>
              )}
              {status === "In-Progress" && (
                <>
                  <p
                    className="text-sm bg-teal-800 hover:bg-opacity-85 text-white text-center md:w-max px-4 py-2 cursor-pointer rounded-md"
                    onClick={() => complete(id)}
                  >
                    Mark as complete
                  </p>
                  <p
                    onClick={() => ondelete(id)}
                    className="text-sm bg-red-800 hover:bg-opacity-85 text-white text-center md:w-max px-4 py-2 cursor-pointer rounded-md"
                  >
                    Delete
                  </p>
                </>
              )}
              {status === "Completed" && (
                <>
                  <p
                    onClick={() => ondelete(id)}
                    className="text-sm bg-red-800 hover:bg-opacity-85 text-white text-center md:w-max px-4 py-2 cursor-pointer rounded-md"
                  >
                    Delete
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      <div
        onClick={modal}
        className="bg-white w-full h-[70px] flex items-center justify-between p-4 rounded-lg cursor-pointer shadow-xl hover:shadow-md"
      >
        <p className="text-xl font-semibold">{title}</p>
        <span
          className={`text-xs bg-red-100 font-medium bg-opacity-15 py-1 px-2 rounded-xl ${status}`}
        >
          {status}
        </span>
      </div>
    </>
  );
}

export default Task;
