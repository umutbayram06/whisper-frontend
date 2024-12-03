import React, { useEffect, useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputSwitch } from "primereact/inputswitch";
import axios from "axios";

export default function Privacy() {
  const [visible, setVisible] = useState(false);

  const [aboutSwitch, setAboutSwitch] = useState(false);
  const [profileImageSwitch, setProfileImageSwitch] = useState(false);

  useEffect(() => {
    const getPrivacySettings = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/profile/privacySettings",
          { headers: { Authorization: localStorage.getItem("authToken") } }
        );
        const { privacySettings } = response.data;
        setAboutSwitch(privacySettings.showAboutSection);
        setProfileImageSwitch(privacySettings.showProfileImage);
      } catch (error) {
        console.log(error);
      }
    };

    getPrivacySettings();
  }, []);

  const headerElement = (
    <div className="inline-flex align-items-center justify-content-center gap-2">
      <i className="pi pi-eye-slash"></i>
      <span className="font-bold white-space-nowrap">Privacy Settings</span>
    </div>
  );

  const sendPrivacySettings = async (showAboutSection, showProfileImage) => {
    try {
      await axios.put(
        "http://localhost:5000/profile/privacySettings",
        { showAboutSection, showProfileImage },
        { headers: { Authorization: localStorage.getItem("authToken") } }
      );
    } catch (error) {
      console.log(error);
    }
  };

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
              sendPrivacySettings(e.value, profileImageSwitch);
            }}
          />
        </div>

        <div className="flex align-items-center justify-content-between">
          <p>Show your profile image to other people</p>
          <InputSwitch
            checked={profileImageSwitch}
            onChange={(e) => {
              setProfileImageSwitch(e.value);
              sendPrivacySettings(aboutSwitch, e.value);
            }}
          />
        </div>
      </Dialog>
    </div>
  );
}
