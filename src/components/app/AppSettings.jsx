import React, { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import ThemeSwitcher from "./ThemeSwitcher";

export default function AppSettings({ currentTheme, setCurrentTheme, themes }) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="card flex justify-content-center">
      <Button icon="pi pi-cog" rounded onClick={() => setVisible(true)} />
      <Dialog
        dismissableMask
        header="App Settings"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
      >
        <ThemeSwitcher
          currentTheme={currentTheme}
          setCurrentTheme={setCurrentTheme}
          themes={themes}
        />
      </Dialog>
    </div>
  );
}
