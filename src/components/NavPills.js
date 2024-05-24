import React, { useState } from "react";

export default function NavPills() {
  const tabs = [
    {
      id: "tab1",
      title: "Tab 1",
      content: "You will always regret the round of JÃ¤germeister.",
    },
    {
      id: "tab2",
      title: "Tab 2",
      content: "If you don't ask, you don't get.",
    },
    {
      id: "tab3",
      title: "Tab 3",
      content: "When faced with a choice, do both.",
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
            className={activeTab === item.id ? "active" : ""}
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
