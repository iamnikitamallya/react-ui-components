import React, { useState } from "react";

export default function AccordionV3() {
  const accord = [
    {
      id: "accord1",
      title: "Accordion 1",
      content: "Im accordion 1 content",
    },
    {
      id: "accord2",
      title: "Accordion 2",
      content: "Im accordion 2 content",
    },
    {
      id: "accord3",
      title: "Accordion 3",
      content: "Im accordion 3 content",
    },
  ];

  const [activeTab, setActiveTab] = useState(null);
  const handleClick = (id) => {
    setActiveTab(activeTab === id ? null : id);
  };

  return (
    <div>
      {accord.map((item) => (
        <div className="pb-2" key={item.id}>
          <div
            className={
              "card cursor px-2 " + (activeTab === item.id ? "active" : "")
            }
            onClick={() => handleClick(item.id)}
          >
            {item.title}
          </div>
          <div
            className={
              "card p-2 " + (activeTab === item.id ? "d-block" : "d-none")
            }
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
}
