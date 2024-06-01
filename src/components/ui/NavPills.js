import React, { useState } from "react";

export default function NavPills() {
  const tabs = [
    {
      id: "tab1",
      title: "Tab 1",
      content:
        "TAB 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer arcu elit, sodales vel commodo eu, dignissim id augue. Donec id vestibulum felis.",
    },
    {
      id: "tab2",
      title: "Tab 2",
      content:
        "TAB 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer arcu elit, sodales vel commodo eu, dignissim id augue. Donec id vestibulum felis.",
    },
    {
      id: "tab3",
      title: "Tab 3",
      content:
        "TAB 3  - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer arcu elit, sodales vel commodo eu, dignissim id augue. Donec id vestibulum felis.",
    },
  ];
    
    const [activeTab, setActiveTab] = useState('tab1')
    const handleClick = (id) => {
        setActiveTab(id)
    }
  
  return (
    <>
      <div className="tab-header">
        {tabs.map((item) => (
          <button
            key={item.id}
            onClick={() => handleClick(item.id)}
            className={activeTab === item.id ? "active" : "bg-white"}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div className="card tab-content p-2">
        {tabs.map((item) => activeTab === item.id ? (
            <div key={item.id}>{ item.content}</div>
        ) : null)}
      </div>
    </>
  );
}
