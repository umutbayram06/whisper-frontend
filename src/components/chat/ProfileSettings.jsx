import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import React, { useState } from "react";

function ProfileSettings() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button
        icon="pi pi-cog"
        className="w-full flex justify-content-center"
        onClick={() => setVisible(true)}
      >
        <span className="ml-2">Profile Settings</span>
      </Button>
      <Dialog
        header="Profile Settings"
        style={{ width: "50vw" }}
        visible={visible}
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
      >
        {" "}
        <p className="m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Dialog>
    </>
  );
}

export default ProfileSettings;
