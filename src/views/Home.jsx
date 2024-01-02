import React from "react";
import NewTask from "../components/NewTask";
import Task from "../components/Task";
import Nav from "../components/Nav";
import tasklist from "../tasklist";

function Home() {
  // useEffect(() => {
  //   const data = fetch(
  //     "https://schedulex-53f9f-default-rtdb.firebaseio.com/add.json",
  //     {
  //       method: "GET",
  //     }
  //   );
  //   console.log(data);
  // }, []);
  return (
    <>
      <Nav />
      <div className="w-11/12 md:w-10/12 flex flex-col gap-10 items-center h-4/5">
        <div className="w-full md:w-10/12">
          <NewTask position="center" />
        </div>
        <div className="w-full flex flex-col gap-4  items-end">
          {/* <div className="text-gray-300 font-medium text-sm cursor-default border-2 border-[#CFCFCF} w-full p-4 rounded-xl min-h-[50%] flex justify-center items-center flex-wrap gap-3">
          Nothing to see here yet
        </div> */}
          <div className="border border-[#CFCFCF} w-full p-4 rounded-xl shadow-inner min-h-[50%] grid md:grid-cols-2 place-items-center lg:grid-cols-3 gap-5">
            {tasklist.slice(-5).map((task) => {
              return (
                <Task
                  title={task.title}
                  time={task.time}
                  status={task.status}
                />
              );
            })}
          </div>
          <a
            href="tasks"
            className="bg-black shadow-lg text-white px-6 py-3 text-center rounded-md cursor-pointer w-max"
          >
            All Tasks
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
