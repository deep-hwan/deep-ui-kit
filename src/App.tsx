import React, { useState } from "react";
import { Dialog, Drawer, Snackbar, Title } from "./lib";
import LoadingSpinner from "./lib/screen/loading-spinner";
import ScrollTopTab from "./lib/screen/ScrollTopTab";
import BottomSheet from "./lib/widgets/BottomSheet";

export default function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isDialog, setIsDialog] = useState<boolean>(false);
  const [isDraw, setIsDraw] = useState<boolean>(false);
  const [isSheet, setIsSheet] = useState<boolean>(false);

  return (
    <>
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
