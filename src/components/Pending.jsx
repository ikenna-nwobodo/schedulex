import React from "react";
import Task from "./Task";
import tasklist from "../tasklist";

function Pending() {
  return tasklist.map((task) => {
    console.log(task);
    if (task.status === "Pending") {
      return <Task title={task.title} time={task.time} status={task.status} />;
    }
    return null;
  });
}

export default Pending;
