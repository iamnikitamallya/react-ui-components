import React, { useState } from "react";

export default function Accordion() {
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
  const [activeTab, setActiveTab] = useState("accord1");
  const handleClick = (id) => {
    setActiveTab(id);
  };
  return (
    <>
      <div>
        {accord.map((item) => (
          <>
            <div className="pb-2">
              <div
                className={
                  activeTab === item.id
                    ? "card active cursor px-2"
                    : "card cursor px-2"
                }
                key={item.id}
                onClick={() => handleClick(item.id)}
              >
                {item.title}
              </div>
              <div
                className={activeTab === item.id ? "d-block" : "d-none"}
                key={item.id}
              >
                <div className="card p-2">{item.content}</div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}