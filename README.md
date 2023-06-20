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

## Modal : BottomSheet Usage

IOS model type sheet type bottom-chet, and then touch the outside click external click

<div align="center" style="width: 160px;">
  <img src="https://github.com/deep-hwan/deep-ui-kit/blob/main/public/img/sheet-img.png?raw=true" width="160" alt="Title Image">
</div>

### Example

```jsx
function App() {
  const [isSheet, setIsSheet] = useState < boolean > false;

  return (
    <Section>
      <button type="button" onClick={() => setIsSheet(!isOpen)}>
        Open Sheet
      </button>

      <BottomSheet
        view={isSheet}
        onCancel={() => setIsSheet(false)}
        theme="light"
      >
        ..
      </BottomSheet>
    </Section>
  );
}
```

### Params

| Command  | type       | props           |
| -------- | ---------- | --------------- |
| layout   | MediaQuery |                 |
| theme    | light      | light , dark    |
| view     |            |                 |
| onCancel |            | onClick funtion |

---

---

## Modal : Dialog Usage

<div align="center" style="width: 160px;">
  <img src="https://github.com/deep-hwan/deep-ui-kit/blob/main/public/img/sheet-img.png?raw=true" width="160" alt="Title Image">
</div>

### Example

```jsx
function App() {
  const [isSheet, setIsSheet] = useState < boolean > false;

  return (
    <Section>
      <button type="button" onClick={() => setIsDialog(!isDialog)}>
        Open Dialog
      </button>

      <Dialog
        view={isDialog}
        onCancel={() => setIsDialog(false)}
        theme="dark"
        cancelTab={true}
      >
        ..
      </Dialog>
    </Section>
  );
}
```

### Params

| Command   | type       | props           |
| --------- | ---------- | --------------- |
| layout    | MediaQuery |                 |
| theme     | light      | light , dark    |
| view      |            |                 |
| cancelTab | false      | Boolean         |
| onCancel  |            | onClick funtion |

---

---

## Modal : Drawer Usage

Drawer menu function that is exposed when you click toggle on the menu

<div align="center" style="width: 160px;">
  <img src="https://github.com/deep-hwan/deep-ui-kit/blob/main/public/img/sheet-img.png?raw=true" width="160" alt="Title Image">
</div>

### Example

```jsx
function App() {
  const [isDrawer, setIsDrawer] = useState < boolean > false;

  return (
    <Section>
      <button type="button" onClick={() => setIsDrawer(!isOpen)}>
        Open Drawer
      </button>

      <Drawer view={isDrawer} onCancel={() => setIsDrawer(false)} theme="light">
    </Section>
  );
}
```

### Params

| Command  | type       | props           |
| -------- | ---------- | --------------- |
| layout   | MediaQuery |                 |
| theme    | light      | light , dark    |
| view     |            |                 |
| onCancel |            | onClick funtion |

---

---

## Modal : Snackbar Usage

Widgets used for alert types

<div align="center" style="width: 160px;">
  <img src="https://github.com/deep-hwan/deep-ui-kit/blob/main/public/img/sheet-img.png?raw=true" width="160" alt="Title Image">
</div>

### Example

```jsx
function App() {
  const [isDrawer, setIsDrawer] = useState < boolean > false;

  return (
    <Section>
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        Open Snackbar
      </button>

      <Snackbar
        view={isOpen}
        onCancel={() => setIsOpen(false)}
        theme="light"
        cancelTab={true}
      >
        ...
      </Snackbar>
    </Section>
  );
}
```

### Params

| Command   | type       | props           |
| --------- | ---------- | --------------- |
| layout    | MediaQuery |                 |
| theme     | light      | light , dark    |
| view      |            |                 |
| cancelTab | false      | Boolean         |
| onCancel  |            | onClick funtion |

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
function App() {
  return (
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
  );
}
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
function App() {
  return (
    <Section>
      <Title as='h1' fontSize='60px' color='#111' w='500'>Title</Title>
      <Text fontSize='16px' color='#797979' w='500'>text</Text>
      <TextSpan fontSize='13px' color='#999' w='400'>
    </Section>
  );
}
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

Used when loading when calling API or adding data

### Example

```jsx
function App() {
  return (
    <>
      <LoadingSpinner />
    </>
  );
}
```

---

---

## ScrollToTab

The 'ScrollToTab' button is activated when scrolling down more than 60. When clicked, the DOM moves to the top

### Example

```jsx
function App() {
  return (
    <>
      <ScrollTopTab />
    </>
  );
}
```
