import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import React, { useEffect, useState } from "react";

function About() {
  const [toggleEdit, setToggleEdit] = useState(false);
  const [aboutInput, setAboutInput] = useState("");

  return (
    <div>
      <div className="font-bold">About</div>
      <div className="flex justify-content-between align-items-center">
        {!toggleEdit ? (
          <>
            <p className="pl-5 flex-grow-1">{aboutInput}</p>
            <Button
              icon="pi pi-pencil"
              rounded
              text
              raised
              aria-label="Filter"
              onClick={(e) => {
                setToggleEdit(true);
              }}
              size="small"
              className="ml-2"
            />
          </>
        ) : (
          <>
            <InputText
              value={aboutInput}
              onChange={(e) => setAboutInput(e.target.value)}
              className="mt-2 flex-grow-1"
            />
            <Button
              icon="pi pi-check"
              rounded
              text
              raised
              aria-label="Filter"
              size="small"
              className="ml-2"
            />
          </>
        )}
      </div>
    </div>
  );
}

export default About;
