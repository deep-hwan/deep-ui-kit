import React, { useState } from "react";
import {
  Box,
  Column,
  Dialog,
  Drawer,
  Row,
  Section,
  SizedBox,
  Snackbar,
  Text,
  Title,
} from "./lib";
import LoadingSpinner from "./lib/screen/loading-spinner";
import ScrollTopTab from "./lib/screen/ScrollTopTab";
import BottomSheet from "./lib/widgets/BottomSheet";
import { css } from "@emotion/react";

export default function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isDialog, setIsDialog] = useState<boolean>(false);
  const [isDraw, setIsDraw] = useState<boolean>(false);
  const [isSheet, setIsSheet] = useState<boolean>(false);

  return (
    <>
      <Section>
        <Title as="h6" fontSize="60px" color="#111" w="500">
          asdsad
        </Title>
        <Text fontSize="15px" color="#797979" w="500">
          asdsad
        </Text>
        <Column center gap="10px" padding="40px" margin="50px">
          <Box>box</Box>
          <Box>box</Box>
          <Box>box</Box>
        </Column>

        <SizedBox height="500px" />

        <Column center gap="10px" padding="30px" margin="10px 20px">
          <Box>box</Box>
          <Box>box</Box>
          <Box>box</Box>
        </Column>
      </Section>
    </>
  );
}

function Index() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isDialog, setIsDialog] = useState<boolean>(false);
  const [isDraw, setIsDraw] = useState<boolean>(false);
  const [isSheet, setIsSheet] = useState<boolean>(false);

  return (
    <>
      <Section>
        <button type="button" onClick={() => setIsOpen(!isOpen)}>
          Open Snackbar
        </button>
        <button type="button" onClick={() => setIsDialog(!isDialog)}>
          Open Dialog
        </button>
        <button type="button" onClick={() => setIsDraw(!isOpen)}>
          Open Drawer
        </button>
        <button type="button" onClick={() => setIsSheet(!isOpen)}>
          Open Sheet
        </button>
      </Section>

      <Dialog
        view={isDialog}
        onCancel={() => setIsDialog(false)}
        theme="light"
        cancelTab={true}
      >
        ..
      </Dialog>

      <Snackbar
        view={isOpen}
        onCancel={() => setIsOpen(false)}
        theme="light"
        cancelTab={true}
      >
        Hello deeop-ui-kit this is tpye "SnackBar"
      </Snackbar>

      <Drawer view={isDraw} onCancel={() => setIsDraw(false)} theme="light">
        ..
      </Drawer>

      <BottomSheet
        view={isSheet}
        onCancel={() => setIsSheet(false)}
        theme="light"
      >
        ..
      </BottomSheet>
    </>
  );
}
