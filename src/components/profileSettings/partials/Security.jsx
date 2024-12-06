import React, { useRef, useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { TabView, TabPanel } from "primereact/tabview";
import ChangePasswordForm from "./security/ChangePasswordForm";
import { Toast } from "primereact/toast";
import ChangeUsernameForm from "./security/ChangeEmailForm";

export default function Security() {
  const [visible, setVisible] = useState(false);
  const toast = useRef(null);

  const headerElement = (
    <div className="inline-flex align-items-center justify-content-center gap-2">
      <i className="pi pi-shield"></i>
      <span className="font-bold white-space-nowrap">Security Settings</span>
    </div>
  );

  return (
    <div className="card flex justify-content-center mt-2">
      <Toast ref={toast} />
      <Button
        className="w-full justify-content-center"
        onClick={() => {
          setVisible(true);
        }}
        tooltip="Change your password or email"
      >
        <i className="pi pi-shield mr-2"></i>
        Security
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
        <div className="card">
          <TabView>
            <TabPanel header="Change Password">
              <ChangePasswordForm setVisible={setVisible} toast={toast} />
            </TabPanel>
            <TabPanel header="Change Username">
              <ChangeUsernameForm setVisible={setVisible} toast={toast} />
            </TabPanel>
          </TabView>
        </div>
      </Dialog>
    </div>
  );
}
