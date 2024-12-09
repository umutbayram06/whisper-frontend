import { Image } from "primereact/image";
import React from "react";

function MessageItem({ message, decodedToken }) {
  let finalMessageJSX = null;
  switch (message.type) {
    case "text":
      finalMessageJSX = (
        <div
          className={`flex mt-2 justify-content-${
            message.sender._id == decodedToken.userID ? "end" : "start"
          } mt-2`}
        >
          <p className="text-xl">
            {message.sender.username}: {message.content}
          </p>
        </div>
      );
      break;
    case "image":
      finalMessageJSX = (
        <div
          className={`flex justify-content-${
            message.sender._id == decodedToken.userID ? "end" : "start"
          } mt-2`}
        >
          <p className="text-xl">{message.sender.username}: </p>
          <Image src={message.content} alt="Image" width="250" preview />
        </div>
      );
      break;
    case "video":
      finalMessageJSX = (
        <div
          className={`flex justify-content-${
            message.sender._id == decodedToken.userID ? "end" : "start"
          } mt-2`}
        >
          <p className="text-xl">{message.sender.username}: </p>
          <video width="350" height="auto" controls>
            <source src={message.content} type="video/mp4" />
          </video>
        </div>
      );
    default:
      break;
  }

  return finalMessageJSX;
}

export default MessageItem;
