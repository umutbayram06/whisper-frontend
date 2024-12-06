import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Image } from "primereact/image";
import React, { useState } from "react";
import UserDetails from "./UserDetails";

function RoomDetails({ selectedRoom }) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="card flex justify-content-center">
      <Button
        icon="pi pi-info-circle"
        rounded
        onClick={() => setVisible(true)}
        className="mr-2"
      />
      <Dialog
        header="Room Information"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
        dismissableMask
      >
        <div className="flex flex-column align-items-center">
          <Image
            src={`http://localhost:5000/uploads/${selectedRoom.calculatedRoomImage}`}
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
        </div>
        <div>
          <h3>Participants</h3>
          {selectedRoom.participants.map((participant) => (
            <UserDetails key={participant._id} user={participant} />
          ))}
        </div>
      </Dialog>
    </div>
  );
}

export default RoomDetails;
