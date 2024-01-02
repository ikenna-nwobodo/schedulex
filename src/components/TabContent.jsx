import React from "react";

function TabContent({ id, activeTab, children }) {
  return activeTab === id ? <>{children}</> : null;
}

export default TabContent;
