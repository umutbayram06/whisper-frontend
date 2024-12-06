import { Button } from "primereact/button";
import { OverlayPanel } from "primereact/overlaypanel";
import { useRef } from "react";

import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

function EmojiPicker({ setMessage }) {
  const emojiPanel = useRef(null);

  const handleEmojiSelect = (emoji) => {
    setMessage((prevMessage) => prevMessage + emoji.native);
  };

  return (
    <div className="card flex justify-content-center">
      <Button
        icon="pi pi-face-smile"
        rounded
        text
        aria-label="Filter"
        onClick={(e) => emojiPanel.current.toggle(e)}
      />
      <OverlayPanel
        ref={emojiPanel}
        className="custom-emoji-panel custom-overlay"
        unstyled
      >
        <Picker
          data={data}
          theme="auto"
          skinTonePosition="none"
          previewPosition="none"
          onEmojiSelect={handleEmojiSelect}
        />
      </OverlayPanel>
    </div>
  );
}

export default EmojiPicker;
