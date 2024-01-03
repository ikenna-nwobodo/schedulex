import React, { useState } from "react";
// import Task from "../components/Task";
import NewTask from "../components/NewTask";
import Nav from "../components/Nav";
import Pending from "../components/Pending";
import Tab from "../components/Tab";
import TabContent from "../components/TabContent";
import InProgress from "../components/InProgress";
import Completed from "../components/Completed";
// import tasklist from "../tasklist";

function Tasks() {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <>
      <Nav />
      <div className="w-11/12 md:w-10/12 flex flex-col gap-10">
        <div className="flex flex-wrap-reverse gap-4 w-full justify-between items-center">
          <ul className="flex flex-wrap gap-3 text-sm">
            <Tab
              title="Pending"
              id="tab1"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <Tab
              title="In-Progress"
              id="tab2"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <Tab
              title="Completed"
              id="tab3"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </ul>
          <div className="flex flex-1 justify-end">
            <NewTask position="end" />
          </div>
        </div>
        <div className="border border-[#CFCFCF} w-full p-4 rounded-xl shadow-inner min-h-[50%] grid md:grid-cols-2 h-max lg:grid-cols-3 gap-3.5">
          <TabContent id="tab1" activeTab={activeTab}>
            <Pending />
          </TabContent>
          <TabContent id="tab2" activeTab={activeTab}>
            <InProgress />
          </TabContent>
          <TabContent id="tab3" activeTab={activeTab}>
            <Completed />
          </TabContent>
        </div>
      </div>
    </>
  );
}

export default Tasks;
