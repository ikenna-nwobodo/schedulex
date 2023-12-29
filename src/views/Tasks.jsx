import React from "react";
import Task from "../components/Task";
import NewTask from "../components/NewTask";
import Nav from "../components/Nav";

function Tasks() {
  return (
    <>
      <Nav />
      <div className="w-11/12 md:w-10/12 flex flex-col gap-10">
        <div className="flex flex-wrap-reverse gap-4 w-full justify-between items-center">
          <div className="flex flex-wrap gap-3 text-sm">
            <p className="active px-4 py-1 w-max rounded-md cursor-pointer border border-black">
              Pending
            </p>
            <p className="px-4 py-1 w-max rounded-md cursor-pointer border border-black">
              In Progress
            </p>
            <p className="px-4 py-1 w-max rounded-md cursor-pointer border border-black">
              Completed
            </p>
          </div>
          <div className="flex flex-1 justify-end">
            <NewTask position="end" />
          </div>
        </div>
        <div className="border border-[#CFCFCF} w-full p-4 rounded-xl shadow-inner min-h-[50%] grid md:grid-cols-2 place-items-center lg:grid-cols-3 gap-3.5">
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
        </div>
      </div>
    </>
  );
}

export default Tasks;
