import React from "react";
import Task from "./Task";
import tasklist from "../tasklist";

function InProgress() {
  return tasklist.map((task) => {
    console.log(task);
    if (task.status === "In-Progress") {
      return <Task title={task.title} time={task.time} status={task.status} />;
    }
  });
}

export default InProgress;
