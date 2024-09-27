import { useEffect } from "react";
import { useChatBackgroundStore } from "../store/chatBackgroundStore";
import Chat from "./Chat";
import { useComponentStore } from "../store/showComponentStore";

function ChattingContainer() {
  const { backgroundColor, backgroundPadding } = useChatBackgroundStore();
  const { container, setContainer } = useComponentStore();
  const handleStyleBackgroundColor = (e) => {
    e.stopPropagation(); // prevent other events from triggering
    if (container !== "background") {
      setContainer("background");
    }
  };
  return (
    <div
      onClick={handleStyleBackgroundColor}
      style={{
        backgroundColor: backgroundColor,
        padding: `${backgroundPadding}px`,
      }}
      className="w-[300px] h-[500px] pt-[50px] overflow-y-scroll overflow-x-hidden hover:border-[2px] hover:border-red-200"
    >
      <Chat />
    </div>
  );
}

export default ChattingContainer;
