import React, { useEffect, useState } from "react";
import ProfileImageUpload from "./ProfileImageUpload";
import axios from "axios";
import { Image } from "primereact/image";

function ProfileImage({ userImageURL, setUserImageURL }) {
  return (
    <div className="flex flex-column align-items-center mt-6 gap-3">
      <Image
        src={userImageURL}
        alt="Image"
        width="200px"
        height="auto"
        preview
        imageClassName="border-circle"
        pt={{
          button: {
            className: "border-circle",
          },
        }}
      />

      <ProfileImageUpload setUserImageURL={setUserImageURL} />
    </div>
  );
}

export default ProfileImage;
