import React from "react";
import NavPills from "../components/NavPills";
import Accordion from "../components/Accordion";
import AccordionV2 from "../components/AccordionV2";
import CardV1 from "../components/CardV1";
import CardV2 from "../components/CardV2";

export default function Components() {
  const UIComponents = [
    {
      title: "Nav Pills/ Tabs",
      components: <NavPills />,
    },
    {
      title: "Accordion v.1",
      components: <Accordion />,
    },
    {
      title: "Accordion v.2",
      components: <AccordionV2 />,
    },
    {
      title: "Card v.1",
      components: <CardV1 />,
    },
    {
      title: "Card v.2",
      components: <CardV2 />,
    },
  ];
  return (
    <div className="container pt-4 pb-4 components">
      <div className="row">
        {UIComponents.map((item) => (
          <div className="col-md-4 pb-4">
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
