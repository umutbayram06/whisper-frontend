import { Button } from "primereact/button";
import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";
import { ListBox } from "primereact/listbox";
import { Image } from "primereact/image";
import { Toast } from "primereact/toast";

import React, { useRef, useState } from "react";

import CreateGroup from "./CreateGroup";
import RoomList from "./RoomList";
import Messaging from "./Messaging";
import AddPerson from "./AddPerson";

function Chat() {
  const toast = useRef(null);
  return (
    <div className="flex flex-grow-1 align-items-stretch">
      <Toast ref={toast} />
      <div className="flex flex-column">
        <div className="w-full">
          <CreateGroup toast={toast} />
        </div>

        <AddPerson toast={toast} />
        <RoomList />
      </div>

      <Messaging />
    </div>
  );
}

export default Chat;
