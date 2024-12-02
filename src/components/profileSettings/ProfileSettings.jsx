import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

import { useState } from "react";
import ProfileImage from "./partials/ProfileImage";
import About from "./partials/About";
import Privacy from "./partials/Privacy";
import Security from "./partials/Security";

function ProfileSettings() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="card flex justify-content-center w-full">
      <Button
        className="w-full"
        label="Profile Settings"
        onClick={() => setVisible(true)}
        icon="pi pi-user"
      />
      <Dialog
        header="Profile Settings"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
        closeOnEscape={true}
        className="flex"
        contentClassName="flex flex-column justify-content-center"
      >
        <ProfileImage />
        <About />
        <Privacy />
        <Security />
      </Dialog>
    </div>
  );
}

export default ProfileSettings;
