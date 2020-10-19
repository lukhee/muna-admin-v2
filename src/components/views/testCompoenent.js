import React from "react";
import { Button, Modal, MenuDropDown } from "../UiElements";
import { ProverbTable } from "../views/proverbs/widgets/";

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
      <ProverbTable />
    </div>
  );
};

export default testCompoenent;
