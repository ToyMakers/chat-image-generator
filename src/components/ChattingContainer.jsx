import { useStyleStore } from "../store/styleStore";
import { useComponentStore } from "../store/showComponentStore";
import Chat from "./Chat";

function ChattingContainer() {
  const { backgroundColor, backgroundPadding } = useStyleStore();
  const { container, setContainer } = useComponentStore();
  const handleStyleBackgroundColor = (e) => {
    e.stopPropagation(); // prevent other events from triggering
    if (container !== "background") {
      setContainer("background");
    }
  };
  return (
    <div
      id="capture"
      onClick={handleStyleBackgroundColor}
      style={{
        backgroundColor: backgroundColor,
        padding: `${backgroundPadding}px`,
      }}
      className="z-0 w-[300px] h-[500px] pt-[50px] overflow-y-scroll overflow-x-hidden hover:border-[2px] hover:border-red-200"
    >
      <Chat />
    </div>
  );
}

export default ChattingContainer;
