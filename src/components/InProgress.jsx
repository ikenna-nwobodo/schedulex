import React, { useEffect, useState } from "react";
import Task from "./Task";

function InProgress() {
  const [tasks, setTasks] = useState({});
  useEffect(() => {
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
  };
  return Object.keys(tasks).length === 0 ? (
    <p className="font-medium tex-md text-opacity-70 text-neutral-500">
      Nothing to see here yet
    </p>
  ) : (
    Object.keys(tasks).map((id) => {
      if (tasks[id].status === "In-Progress") {
        return (
          <Task
            id={id}
            title={tasks[id].title}
            time={tasks[id].date}
            status={tasks[id].status}
          />
        );
      }
      return null;
    })
  );
}

export default InProgress;
