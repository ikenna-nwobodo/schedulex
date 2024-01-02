import React from "react";
import Task from "./Task";
import tasklist from "../tasklist";

function Completed() {
  return tasklist.map((task) => {
    console.log(task);
    if (task.status === "Completed") {
      return <Task title={task.title} time={task.time} status={task.status} />;
    }
  });
}

export default Completed;
