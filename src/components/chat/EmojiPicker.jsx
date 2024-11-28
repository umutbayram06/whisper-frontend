import { Button } from "primereact/button";
import { OverlayPanel } from "primereact/overlaypanel";
import { useRef } from "react";

import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

function EmojiPicker() {
  const emojiPanel = useRef(null);

  return (
    <div className="card flex justify-content-center">
      <Button
        icon="pi pi-face-smile"
        rounded
        text
        aria-label="Filter"
        onClick={(e) => emojiPanel.current.toggle(e)}
      />
      <OverlayPanel unstyled ref={emojiPanel} className="custom-emoji-panel">
        <Picker
          data={data}
          theme="auto"
          skinTonePosition="none"
          previewPosition="none"
        />
      </OverlayPanel>
    </div>
  );
}

export default EmojiPicker;
