import React, { useState } from 'react'

export default function AccordionV2() {
    const accord = [
      {
        id: "accord1",
        title: "Accordion 1",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer arcu elit, sodales vel commodo eu, dignissim id augue. Donec id vestibulum felis.",
      },
      {
        id: "accord2",
        title: "Accordion 2",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer arcu elit, sodales vel commodo eu, dignissim id augue. Donec id vestibulum felis.",
      },
      {
        id: "accord3",
        title: "Accordion 3",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer arcu elit, sodales vel commodo eu, dignissim id augue. Donec id vestibulum felis.",
      },
    ];

    const [activeTab, setActiveTab] = useState(null);
    const handleClick = (id) => {
        setActiveTab(activeTab === id ? null : id)
    }

  return (
    <div className='accordion'>
      {accord.map((item) => (
        <div className="pb-2">
          <div
            className={"card cursor px-2 " + (activeTab === item.id ? "active" : "")}
            key={item.id}
            onClick={() => handleClick(item.id)}
          >
            {item.title}
          </div>
          <div
            className={"card p-2 " + (activeTab === item.id ? "" : "d-none")}
            key={item.id}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
}
