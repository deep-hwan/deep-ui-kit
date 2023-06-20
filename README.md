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

## Simple UsageV

### Layout

A widget layout is available for each layout type.

- **Section** : section Teg in html
- **Row** : Horizontal alignment layout
- **Column** : Vertical alignment layout
- **Box** : It's a flexible box
- **SizedBox** : Allows you to adjust the layout space

---

**Example**

```jsx
function App() {
  return (
    <Section>
      <Row start gap="20px" padding="30px" margin="50px">
        <Box>box</Box>
        <Box maxWidth="200px">box</Box>
        <Box>box</Box>
      </Row>

      <SizedBox height="500px" />

      <Column center gap="10px" padding="30px" margin="50px">
        <Box>box</Box>
        <Box>box</Box>
        <Box>box</Box>
      </Column>
    </Section>
  );
}
```

**Params**

| Command    | layout default                         | props                            |
| ---------- | -------------------------------------- | -------------------------------- |
| `Section`  | section Teg in html                    |
| `Row`      | layout : center                        | start, end, gap, padding, margin |
| `Column`   | layout : start                         | start, end, gap, padding, margin |
| `SizedBox` | default = width : 100% , height : 100% | width, height                    |
