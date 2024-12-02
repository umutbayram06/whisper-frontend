import React, { useState, useRef } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Stepper } from "primereact/stepper";
import { StepperPanel } from "primereact/stepperpanel";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { Chips } from "primereact/chips";
import axios from "axios";

export default function CreateGroup({ toast, setRooms, decodedToken, socket }) {
  const [visible, setVisible] = useState(false);
  const stepperRef = useRef(null);

  const [participantUsernames, setParticipantUsernames] = useState([]);
  const [roomName, setRoomName] = useState("");

  const handleSubmit = async (e) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/rooms",
        {
          participantUsernames,
          roomType: "group",
          roomName,
        },
        {
          headers: {
            Authorization: localStorage.getItem("authToken"),
          },
        }
      );

      const newRoom = response.data.newRoom;

      setRooms((prevRooms) => [
        ...prevRooms,
        {
          ...newRoom,
          calculatedRoomName:
            newRoom.roomName ||
            newRoom.participants.find(
              (participant) => participant._id != decodedToken.userID
            ).username,
        },
      ]);

      socket.emit("join-specific-room", { roomID: newRoom._id });

      toast.current.show({
        severity: "success",
        summary: "Room Created",
        life: 3000,
      });
      setVisible(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="card flex justify-content-center w-full">
      <Button
        icon="pi pi-users"
        label="Create new group"
        className="w-full"
        onClick={() => setVisible(true)}
      />
      <Dialog
        modal
        style={{ width: "50rem" }}
        visible={visible}
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
      >
        <div className="card flex justify-content-center">
          <Stepper style={{ flexBasis: "50rem" }} linear ref={stepperRef}>
            <StepperPanel header="Set Group Name">
              <div className="flex flex-column h-12rem">
                <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">
                  <FloatLabel>
                    <InputText
                      id="groupName"
                      type="text"
                      className="p-inputtext-lg"
                      value={roomName}
                      onChange={(e) => {
                        setRoomName(e.target.value);
                      }}
                    />
                    <label htmlFor="groupName">Group Name</label>
                  </FloatLabel>
                </div>
              </div>
              <div className="flex pt-4 justify-content-end">
                <Button
                  label="Next"
                  icon="pi pi-arrow-right"
                  iconPos="right"
                  onClick={() => stepperRef.current.nextCallback()}
                />
              </div>
            </StepperPanel>
            <StepperPanel header="Add people">
              <div className="flex flex-column h-12rem">
                <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">
                  <div className="card p-fluid w-full h-full">
                    <FloatLabel className="h-full">
                      <Chips
                        onChange={(e) => setParticipantUsernames(e.value)}
                        value={participantUsernames}
                        id="usersToAddGroup"
                        className="w-full h-full flex-grow-1"
                      />
                      <label htmlFor="usersToAddGroup">
                        Usernames to add group
                      </label>
                    </FloatLabel>
                  </div>
                </div>
              </div>
              <div className="flex pt-4 justify-content-between">
                <Button
                  label="Back"
                  severity="secondary"
                  icon="pi pi-arrow-left"
                  onClick={() => stepperRef.current.prevCallback()}
                />
                <Button
                  label="Create Group"
                  severity="success"
                  onClick={handleSubmit}
                />
              </div>
            </StepperPanel>
          </Stepper>
        </div>
      </Dialog>
    </div>
  );
}
