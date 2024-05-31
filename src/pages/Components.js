import React from "react";
import NavPills from "../components/NavPills";
import Accordion from "../components/Accordion";
import AccordionV2 from "../components/AccordionV2";
import card from "../assets/img/card.jpg";
import { FaCodepen } from "react-icons/fa";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

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
      title: "Card v.1.1",
      components: (
        <Card>
          <Button title="I'm Primary" variant="primary" size="sm" />
        </Card>
      ),
    },
    {
      title: "Card v.1.2",
      components: (
        <Card textAlign="center">
          <Button title="I'm Secondary" variant="secondary" size="lg" />
        </Card>
      ),
    },
    {
      title: "Card v.1.3",
      components: (
        <Card textAlign="right">
          <Button title="I'm Success" variant="success" size="sm" />
        </Card>
      ),
    },
    {
      title: "Card v.2.1",
      components: (
        <Card display="flex" imgUrl={card}>
          <Button title="I'm Danger" variant="danger" size="sm" />
        </Card>
      ),
    },
    {
      title: "Card v.2.2",
      components: (
        <Card display="flex" imgUrl={card} objectFit="cover">
          <Button title="I'm Warning" variant="warning" size="lg" />
        </Card>
      ),
    },
    {
      title: "Card v.2.3",
      components: (
        <Card display="flex" imgUrl={card} align="center">
          <Button title="I'm Light" variant="light" size="lg" />
        </Card>
      ),
    },
    {
      title: "Card v.3.1",
      components: (
        <Card imgUrl={card}>
          <Button title="I'm Dark" variant="dark" size="sm" />
        </Card>
      ),
    },
    {
      title: "Card v.3.2",
      components: (
        <Card imgUrl={card} textAlign="center">
          <Button title="I'm Info" variant="info" size="lg" />
        </Card>
      ),
    },
    {
      title: "Card v.3.3",
      components: (
        <Card imgUrl={card} textAlign="right">
          <Button title="I'm the Link" variant="link" size="sm" />
        </Card>
      ),
    },
    {
      title: "Card v.4.1",
      components: (
        <Card icon={<FaCodepen />}>
          <Button title="Outline Primary" variant="outline-primary" size="sm" />
        </Card>
      ),
    },
    {
      title: "Card v.4.2",
      components: (
        <Card icon={<FaCodepen />} textAlign="center">
          <Button
            title="I can show up if you add Button Component"
            variant="primary"
            size="sm"
          />
        </Card>
      ),
    },
    {
      title: "Card v.4.3",
      components: (
        <Card icon={<FaCodepen />} textAlign="right">
          <Button
            title="Outline Secondary"
            variant="outline-secondary"
            size="lg"
          />
        </Card>
      ),
    },
    {
      title: "Card v.5.1",
      components: (
        <Card icon={<FaCodepen />} display="flex">
          <Button title="Outline Danger" variant="outline-danger" size="lg" />
        </Card>
      ),
    },
    {
      title: "Card v.5.2",
      components: (
        <Card icon={<FaCodepen />} display="flex" align="center">
          <Button title="Outline Info" variant="outline-info" size="sm" />
        </Card>
      ),
    },
  ];
  return (
    <div className="container pt-4 pb-4 components">
      <div className="row">
        {UIComponents.map((item) => (
          <div className="col-md-4 pb-4">
            <div className="p-2">
              <h6 className="text-gray">{item.title}</h6>
              {item.components}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
