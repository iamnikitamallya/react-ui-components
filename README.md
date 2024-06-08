# @nikitamallya/react-ui-components

This package is designed for beginners and intermediate developers, providing an easy and quick way to create custom UIs using readily available React components.

## Installation

To install the package, use the following command:

```
npm i @nikitamallya/react-ui-components
```

## Dependencies

Ensure you have the following dependencies installed:

@babel/cli @babel/core @babel/preset-env @babel/preset-react babel-loader css-loader sass-loader style-loader webpack webpack-cli bootstrap prop-types react react-router-dom react-icons sass

To install the dependencies, use the following command:

```
npm i @babel/cli @babel/core @babel/preset-env @babel/preset-react babel-loader css-loader sass-loader style-loader webpack webpack-cli bootstrap prop-types react react-router-dom react-icons sass
```

_Note: All dependencies are added as devDependencies to prevent version conflicts in live projects when users install this package._

## Available Components

- `<Text />`
- `<Button />`
- `<Card />`

## Usage

### Text Component

```jsx
<Text
  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer arcu elit, sodales vel commodo eu, dignissim id augue."
  color="dark"
  variant="h1"
  weight="normal"
  align="center"
/>
```

### Card Component

```
<Card
  display="flex"
  imgUrl={card}
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
```

### Button Component

```
<Button
  title="Outline Danger"
  variant="outline-danger"
  size="lg"
  rtIcon={<FaArrowRight />}
/>
```

_Note: This package is currently in Beta. I am actively working on enhancing the existing components and will provide detailed documentation once all necessary features are added. Thank you for your patience and support._
