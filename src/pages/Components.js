import React from "react";
import NavPills from "../components/NavPills";
import Accordion from "../components/Accordion";
import AccordionV2 from "../components/AccordionV2";
import card from "../assets/img/card.jpg";
import CardThreeV1 from "../components/CardThreeV1";
import CardThreeV2 from "../components/CardThreeV2";
import CardThreeV3 from "../components/CardThreeV3";
import CardFourV1 from "../components/CardFourV1";
import CardFourV2 from "../components/CardFourV2";
import CardFourV3 from "../components/CardFourV3";
import CardFiveV1 from "../components/CardFiveV1";
import CardFiveV2 from "../components/CardFiveV2";
import Card from "../components/ui/Card";

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
      components: <Card />,
    },
    {
      title: "Card v.1.2",
      components: <Card textAlign="center" />,
    },
    {
      title: "Card v.1.3",
      components: <Card textAlign="right" />,
    },
    {
      title: "Card v.2.1",
      components: <Card display="flex" imgUrl={card} />,
    },
    {
      title: "Card v.2.2",
      components: <Card display="flex" imgUrl={card} objectFit="cover" />,
    },
    {
      title: "Card v.2.3",
      components: <Card display="flex" imgUrl={card} align="center" />,
    },
    {
      title: "Card v.3.1",
      components: <Card imgUrl={card} />,
    },
    {
      title: "Card v.3.2",
      components: <Card imgUrl={card} textAlign="center" />,
    },
    {
      title: "Card v.3.3",
      components: <Card imgUrl={card} textAlign='right' />,
    },
    {
      title: "Card v.4.1",
      components: <CardFourV1 />,
    },
    {
      title: "Card v.4.2",
      components: <CardFourV2 />,
    },
    {
      title: "Card v.4.3",
      components: <CardFourV3 />,
    },
    {
      title: "Card v.5.1",
      components: <CardFiveV1 />,
    },
    {
      title: "Card v.5.2",
      components: <CardFiveV2 />,
    },
  ];
  return (
    <div className="container pt-4 pb-4 components">
      <div className="row">
        {UIComponents.map((item) => (
          <div className="col-md-4 pb-4">
            <div className="p-2">
              <h3>{item.title}</h3>
              {item.components}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
