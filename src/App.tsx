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
        <Title as="h6" fontSize="60px" color="#111" w="500"></Title>
        <Text fontSize="15px" color="#797979" w="500">
          asdsad
        </Text>

        <SizedBox height="500px" />

        <Index />
      </Section>
    </>
  );
}

function Index() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isDialog, setIsDialog] = useState<boolean>(false);
  const [isDrawer, setIsDrawer] = useState<boolean>(false);
  const [isSheet, setIsSheet] = useState<boolean>(false);

  return (
    <>
      <LoadingSpinner />
      <ScrollTopTab />
      <Section>
        <button type="button" onClick={() => setIsOpen(!isOpen)}>
          Open Snackbar
        </button>
        <button type="button" onClick={() => setIsDialog(!isDialog)}>
          Open Dialog
        </button>
        <button type="button" onClick={() => setIsDrawer(!isOpen)}>
          Open Drawer
        </button>
        <button type="button" onClick={() => setIsSheet(!isOpen)}>
          Open Sheet
        </button>
      </Section>

      <Dialog
        view={isDialog}
        onCancel={() => setIsDialog(false)}
        cancelTab={true}
      ></Dialog>

      <Snackbar view={isOpen} onCancel={() => setIsOpen(false)} theme="light">
        asdd
      </Snackbar>

      <Drawer view={isDrawer} onCancel={() => setIsDrawer(false)} theme="light">
        ..
      </Drawer>

      <BottomSheet view={isSheet} onCancel={() => setIsSheet(false)}>
        ..
      </BottomSheet>
    </>
  );
}
