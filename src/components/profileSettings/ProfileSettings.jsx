import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

import { useState } from "react";
import ProfileImage from "./partials/ProfileImage";
import About from "./partials/About";
import Privacy from "./partials/Privacy";
import Security from "./partials/Security";

function ProfileSettings({ username, userImageURL, setUserImageURL }) {
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
        dismissableMask
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
        <h2 className="text-center p-0 m-0">{username}</h2>
        <ProfileImage
          userImageURL={userImageURL}
          setUserImageURL={setUserImageURL}
        />
        <About />
        <Privacy />
        <Security />
      </Dialog>
    </div>
  );
}

export default ProfileSettings;
