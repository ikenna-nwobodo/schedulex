import React, { useEffect, useState } from "react";
import NewTask from "../components/NewTask";
import Task from "../components/Task";
import Nav from "../components/Nav";
// import tasklist from "../tasklist";
// import app from "../firebase";

function Home() {
  const [tasks, setTasks] = useState({});
  useEffect(() => {
    // app.on("value", (snapshots) => {
    //   if (snapshots.val() !== null) {
    //     setTasks(...snapshots);
    //   } else {
    //     setTasks({});
    //   }
    // });
    // return () => {
    //   setTasks({});
    // };
    fetchData();
  });
  const fetchData = async () => {
    await fetch(
      "https://schedulex-53f9f-default-rtdb.firebaseio.com/tasks.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setTasks({ ...data });
      });
    // if (data) {
    //   console.log(data.json());
    //   setTasks(data);
    // } else {
    //   console.log("no go");
    // }
  };
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
            {Object.keys(tasks).length === 0 ? (
              <p className="font-medium tex-md text-opacity-70 text-neutral-500">Nothing to see here yet</p>
            ) : (
              Object.keys(tasks).map((id) => {
                return (
                  <Task
                    id={id}
                    title={tasks[id].title}
                    time={tasks[id].date}
                    status={tasks[id].status}
                  />
                );
              })
            )}
            {/* {Object.keys(tasks).map((id) => {
              return (
                <Task
                  id={id}
                  title={tasks[id].title}
                  time={tasks[id].date}
                  status={tasks[id].status}
                />
              );
            })} */}
            {/* {tasklist.slice(-5).map((task) => {
              return (
                <Task
                  title={task.title}
                  time={task.time}
                  status={task.status}
                />
              );
            })} */}
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
