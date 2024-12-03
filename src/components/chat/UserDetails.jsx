import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Image } from "primereact/image";
import React, { useState } from "react";

function UserDetails({ user }) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="card flex justify-content-center">
      <Button
        outlined
        onClick={() => setVisible(true)}
        className="flex align-items-center justify-content-center w-full mt-2"
      >
        <Image
          src={`http://localhost:5000/uploads/${user.profileImage}`}
          alt="Image"
          width="30px"
          height="auto"
          imageClassName="border-circle"
          pt={{
            button: {
              className: "border-circle",
            },
          }}
          className="mr-2"
        />
        {user.username}
      </Button>
      <Dialog
        dismissableMask
        header={`${user.username}'s Profile`}
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
      >
        <div className="flex flex-column align-items-center">
          <Image
            src={`http://localhost:5000/uploads/${user.profileImage}`}
            alt="Image"
            width="200px"
            height="auto"
            imageClassName="border-circle"
            pt={{
              button: {
                className: "border-circle",
              },
            }}
            preview
            className="mr-2"
          />
          {user.about && (
            <>
              <h2>About</h2>
              <p>{user.about}</p>
            </>
          )}
        </div>
      </Dialog>
    </div>
  );
}

export default UserDetails;
