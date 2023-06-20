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

---

## Layout Usage

A widget layout is available for each layout type.

- **Section** : section Teg in html
- **Row** : Horizontal alignment layout
- **Column** : Vertical alignment layout
- **Box** : It's a flexible box
- **SizedBox** : Allows you to adjust the layout space

---

### Example

```jsx
<Section>
  <Row start gap="20px" padding="30px" margin="50px">
    <Box>box</Box>
    <Box maxWidth="200px">box</Box>
    <Box>box</Box>
  </Row>

  <SizedBox width="200px" height="200px" />

  <Column center gap="10px" padding="30px" margin="50px">
    <Box>box</Box>
    <Box>box</Box>
    <Box>box</Box>
  </Column>
</Section>
```

### Params

**Basic Value** width : 100% / height : 100%

| Command    | layout default               | props                            |
| ---------- | ---------------------------- | -------------------------------- |
| `Section`  |                              |
| `Row`      | center                       | start, end, gap, padding, margin |
| `Column`   | start                        | start, end, gap, padding, margin |
| `SizedBox` | width : 100% , height : 100% | width, height                    |

---

---

## Typography Usage

### Example

```jsx
  <Title as='h1' fontSize='60px' color='#111' w='500'>Title</Title>
  <Text fontSize='16px' color='#797979' w='500'>text</Text>
  <TextSpan fontSize='13px' color='#999' w='400'>
```

### Params

| Command    | layout default | props                  |
| ---------- | -------------- | ---------------------- |
| `Title`    | strong / 26px  | as, fontSize, color, w |
| `Text`     | 15px           | fontSize, color, w     |
| `TextSpan` | 13px           | fontSize, color, w     |

---

---

## LoadingSpinner Usage

Loading spinner Ui

```jsx
<LoadingSpinner />
```
