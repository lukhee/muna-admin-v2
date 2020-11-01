import React from "react";
import { Button, Modal, MenuDropDown, Tab } from "../UiElements";

const testCompoenent = () => {
  return (
    <div>
      <Button> Hello </Button>
      <Modal modalTitle="Create Proverb"> Modal </Modal>
      <MenuDropDown
        status="publish"
        previewHandler={() => console.log("one")}
        publishHandler={() => console.log("two")}
      />
    </div>
  );
};

export default testCompoenent;
