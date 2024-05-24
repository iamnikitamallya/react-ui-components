import React from "react";
import NavPills from "../components/NavPills";
import Accordion from "../components/Accordion";

export default function Components() {
  const UIComponents = [
    {
      title: "Nav Pills/ Tabs",
      components: <NavPills />,
    },
    {
      title: "Accordion",
      components: <Accordion />,
    },
  ];
  return (
    <div className="container pt-4 pb-4">
      <div className="row">
        {UIComponents.map((item) => (
          <div className="col-md-4 pb-2">
            <div className="card card-primary p-3">
              <h3>{item.title}</h3>
              {item.components}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
