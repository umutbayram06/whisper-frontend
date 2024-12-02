import React, { useEffect, useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputSwitch } from "primereact/inputswitch";

export default function Privacy() {
  const [visible, setVisible] = useState(false);

  const [aboutSwitch, setAboutSwitch] = useState(false);
  const [profileImageSwitch, setProfileImageSwitch] = useState(false);

  const headerElement = (
    <div className="inline-flex align-items-center justify-content-center gap-2">
      <i className="pi pi-eye-slash"></i>
      <span className="font-bold white-space-nowrap">Privacy Settings</span>
    </div>
  );

  return (
    <div className="card flex justify-content-center mt-2">
      <Button
        className="w-full justify-content-center"
        onClick={() => {
          setVisible(true);
        }}
        tooltip="Change your visibility settings"
      >
        <i className="pi pi-eye-slash mr-2"></i>
        Privacy
      </Button>

      <Dialog
        visible={visible}
        modal
        header={headerElement}
        style={{ width: "50rem" }}
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
      >
        <div className="flex align-items-center justify-content-between">
          <p>Show about section to other people</p>
          <InputSwitch
            checked={aboutSwitch}
            onChange={(e) => {
              setAboutSwitch(e.value);
            }}
          />
        </div>

        <div className="flex align-items-center justify-content-between">
          <p>Show your profile image to other people</p>
          <InputSwitch
            checked={profileImageSwitch}
            onChange={(e) => {
              setProfileImageSwitch(e.value);
            }}
          />
        </div>
      </Dialog>
    </div>
  );
}
