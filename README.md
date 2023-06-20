# <div align="center">

<div align="center" style="width: 100px;" >
<img src="https://github.com/deep-hwan/deep-ui-kit/blob/main/public/img/deep-img.png?raw=true" style="width: 100px;" alt="Title Image">
</div>
<h1 align="center">deep-ui-kit</h1>

<p align="center">
Design Ui-Kit provides design layout and animation modals
</p>
</div>

## Install

    npm install deep-ui-kit
    # or
    yarn add deep-ui-kit

---

## Simple Usage

### Layout

A widget layout is available for each layout type.

- Section : section Teg in html
- Row : Horizontal alignment layout
- Column : Vertical alignment layout
- Box : It's a flexible box

```jsx
function App() {
  return (
    <Section>
      // The default sort is center and can be sorted by start or end. The gap
      between each widget is adjustable with a gap.
      <Row gap="20px" start>
        <Box>box</Box>
        <Box maxWidth="200px">box</Box> // Box는
        <Box>box</Box>
      </Row>
    </Section>
  );
}
```
