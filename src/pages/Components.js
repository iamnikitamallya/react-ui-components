import React from "react";
import NavPills from "../components/NavPills";
import Accordion from "../components/Accordion";
import AccordionV2 from "../components/AccordionV2";
import CardOneV1 from "../components/CardOneV1";
import CardOneV2 from "../components/CardOneV2";
import CardTwoV1 from "../components/CardTwoV1";
import CardTwoV2 from "../components/CardTwoV2";
import CardTwoV3 from "../components/CardTwoV3";
import CardThreeV1 from "../components/CardThreeV1";
import CardOneV3 from "../components/CardOneV3";

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
      components: <CardOneV1 />,
    },
    {
      title: "Card v.1.2",
      components: <CardOneV2 />,
    },
    {
      title: "Card v.1.3",
      components: <CardOneV3 />,
    },
    {
      title: "Card v.2.1",
      components: <CardTwoV1 />,
    },
    {
      title: "Card v.2.2",
      components: <CardTwoV2 />,
    },
    {
      title: "Card v.2.3",
      components: <CardTwoV3 />,
    },
    {
      title: "Card v.3",
      components: <CardThreeV1 />,
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
