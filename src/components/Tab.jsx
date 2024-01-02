import React from "react";

function Tab({ id, title, activeTab, setActiveTab }) {
  const handleClick = () => {
    setActiveTab(id);
  };

  return (
    <li
      onClick={handleClick}
      className={`px-4 py-1 w-max rounded-md cursor-pointer border border-black ${
        activeTab === id ? "active" : ""
      }`}
    >
      {title}
    </li>
  );
}

export default Tab;
