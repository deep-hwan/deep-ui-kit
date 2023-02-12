import React from "react";
import Text from "./text/Text";
import Title from "./text/Title";
import Row from "./layout/Row";
import Column from "./layout/Column";
import ItemList from "./item/ItemList";
import Item from "./item/Item";

export default function App() {
  return (
    <Column gap="10px" padding="20px" center>
      <Title>App</Title>

      <Text>sss</Text>

      <ItemList gap="20px">
        <Item>sssdasdssss</Item>
        <Item>sssdasdssss</Item>
      </ItemList>
    </Column>
  );
}
