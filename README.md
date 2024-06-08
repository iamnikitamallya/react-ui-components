# @nikitamallya/react-ui-components

This package is designed for beginners and intermediate developers, providing an easy and quick way to create custom UIs using readily available React components.

## Installation

To install the package, use the following command:

```javascript
npm i @nikitamallya/react-ui-components
```

## Dependencies

Ensure you have the following dependencies installed:

react react-router-dom react-icons bootstrap 

To install the dependencies, use the following command:

```javascript
npm i react react-router-dom react-icons bootstrap
```

_Note: All dependencies are added as devDependencies to prevent version conflicts in live projects when users install this package._

## Available Components

- `<Text />`
- `<Button />`
- `<Card />`

## Usage

Add the following import to your *index.js* to ensure the CSS works correctly, as the components rely on Bootstrap styles.

```jsx
import "bootstrap/dist/css/bootstrap.min.css";
```

### Text Component

```jsx
import React from "react";
import { Text } from "@nikitamallya/react-ui-components";
export default function App() {
  return (
    <>
      <Text
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer arcu elit, sodales vel commodo eu, dignissim id augue."
        color="dark"
        variant="h1"
        weight="normal"
        align="center"
      />
    </>
  );
}
```

### Card Component

```jsx
import React from "react";
import { Text, Card, Button } from "@nikitamallya/react-ui-components";
import demoImg from "../assets/img/demo.jpg";
export default function App() {
  return (
    <>
      <Card
        display="flex"
        imgUrl={demoImg}
        objectFit="cover"
        title="Lorem ipsum dolor sit"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer arcu elit, sodales vel commodo eu, dignissim id augue. Donec id vestibulum felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer arcu elit, sodales vel commodo eu, dignissim id augue. Donec id vestibulum felis."
      >
        <Text content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer arcu elit, sodales vel commodo eu, dignissim id augue." />
        <Button
          title="I'm Warning"
          variant="warning"
          size="lg"
          ltIcon={<FaArrowLeft />}
        />
      </Card>
    </>
  );
}
```

### Button Component

```jsx
import React from "react";
import { Button } from "@nikitamallya/react-ui-components";
import { FaArrowRight } from "react-icons/fa";
export default function App() {
  return (
    <>
      <Button
        title="Outline Danger"
        variant="outline-danger"
        size="lg"
        rtIcon={<FaArrowRight />}
      />
    </>
  );
}
```

_Note: This package is currently in Beta. I am actively working on enhancing the existing components and will provide detailed documentation once all necessary features are added. Thank you for your patience and support._
