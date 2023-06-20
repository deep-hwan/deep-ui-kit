import React, { useState } from "react";
import { Dialog, Drawer, Snackbar, Title } from "./lib";
import LoadingSpinner from "./lib/screen/loading-spinner";
import ScrollTopTab from "./lib/screen/ScrollTopTab";
import BottomSheet from "./lib/widgets/BottomSheet";

export default function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isDialog, setIsDialog] = useState<boolean>(false);
  const [isDraw, setIsDraw] = useState<boolean>(false);

  return (
    <>
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        열기 모달
      </button>
      <button type="button" onClick={() => setIsDialog(!isDialog)}>
        다이아 로그
      </button>
      <button type="button" onClick={() => setIsDraw(!isOpen)}>
        열기 모달2
      </button>

      <Dialog
        view={isDialog}
        onCancel={() => setIsDialog(false)}
        theme="dark"
        cancelTab={true}
      >
        d alteration in some form, by injected humour, or randomised words which
        don't look even slightly believable. If you are going to use a passage
        of Lorem Ipsum, you need to be sure there isn't anything embarrassing
        hidden in the mid d alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable. If you are
        going to use a passage of Lorem Ipsuightly believable. If you are going
        to use a passage of Lorem Ipsum, you need to be sure there isn't anythin
        to be sure there isn't anyt
      </Dialog>
      <Title as="h1">asdsad</Title>
      <LoadingSpinner />
      <ScrollTopTab />

      <Snackbar
        view={isOpen}
        onCancel={() => setIsOpen(false)}
        theme="light"
        cancelTab={true}
      >
        d alteration in some form, by injected humour, or randomised words
        whichn in some form, by injected humour, or randomised words whichn in
        some form, by injected humour, or randomised words which
      </Snackbar>

      {/* <Drawer view={isDraw} onCancel={() => setIsDraw(false)} theme="dark">
        as
      </Drawer> */}

      <BottomSheet view={isDraw} onCancel={() => setIsDraw(false)} theme="dark">
        asd
      </BottomSheet>
    </>
  );
}
