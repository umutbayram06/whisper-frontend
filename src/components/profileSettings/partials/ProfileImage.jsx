import React from "react";
import ProfileImageUpload from "./ProfileImageUpload";

function ProfileImage() {
  return (
    <div className="flex flex-column align-items-center mt-6 gap-3">
      <img
        src="https://placehold.co/200x200"
        width="200px"
        height="200px"
        className="border-circle no-text-selection"
      ></img>
      <ProfileImageUpload />
    </div>
  );
}

export default ProfileImage;
