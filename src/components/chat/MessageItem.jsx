import { Image } from "primereact/image";
import React from "react";

function MessageItem({ message, decodedToken }) {
  let finalMessageJSX = null;
  const isSender = message.sender._id === decodedToken.userID;

  const containerClass = `flex mt-2  justify-content-${
    isSender ? "end" : "start"
  }`;
  const messageClass = `p-3 border-round text-white text-left ${
    isSender ? "bg-green-600" : "bg-gray-200 text-black"
  }`;

  switch (message.type) {
    case "text":
      finalMessageJSX = (
        <div className={containerClass}>
          <div
            className={messageClass}
            style={{ maxWidth: "60%", position: "relative" }}
          >
            <p className="mb-1 text-black-alpha-90">
              <strong>{message.sender.username}</strong>: {message.content}
            </p>
            <small
              style={{
                position: "absolute",
                bottom: "5px",
                right: "10px",
                fontSize: "0.75rem",
                color: isSender ? "#d1e7dd" : "#6c757d",
              }}
            >
              {new Date(message.time).toLocaleTimeString()}
            </small>
          </div>
        </div>
      );
      break;
    case "image":
      finalMessageJSX = (
        <div className={containerClass}>
          <div
            className={messageClass}
            style={{ maxWidth: "60%", position: "relative" }}
          >
            <p className="mb-1">
              <strong className="text-black-alpha-90">
                {message.sender.username}
              </strong>
              :
            </p>
            <Image src={message.content} alt="Image" width="250" preview />
            <small
              style={{
                position: "absolute",
                bottom: "5px",
                right: "10px",
                fontSize: "0.75rem",
                color: isSender ? "#d1e7dd" : "#6c757d",
              }}
            >
              {new Date(message.time).toLocaleTimeString()}
            </small>
          </div>
        </div>
      );
      break;
    case "video":
      finalMessageJSX = (
        <div className={containerClass}>
          <div
            className={messageClass}
            style={{ maxWidth: "60%", position: "relative" }}
          >
            <p className="mb-1 text-black-alpha-90">
              <strong>{message.sender.username}</strong>:
            </p>
            <video width="100%" height="auto" controls>
              <source src={message.content} type="video/mp4" />
            </video>
            <small
              style={{
                position: "absolute",
                bottom: "5px",
                right: "10px",
                fontSize: "0.75rem",
                color: isSender ? "#d1e7dd" : "#6c757d",
              }}
            >
              {new Date(message.time).toLocaleTimeString()}
            </small>
          </div>
        </div>
      );
      break;
    default:
      break;
  }

  return finalMessageJSX;
}

export default MessageItem;
