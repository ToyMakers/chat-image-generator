import { useEffect } from "react";
import { useChatBackgroundStore } from "../store/chatBackgroundStore";
import Chat from "./Chat";

function ChattingContainer() {
  const { setChatBackgroundContainer, backgroundColor, backgroundPadding } =
    useChatBackgroundStore();
  const handleStyleBackgroundColor = () => {
    setChatBackgroundContainer(true);
  };
  useEffect(() => {
    console.log(backgroundColor);
  }, [backgroundColor]);
  return (
    <div
      onClick={handleStyleBackgroundColor}
      style={{
        backgroundColor: backgroundColor,
        padding: `${backgroundPadding}px`,
      }}
      className="w-[300px] h-[500px] pt-[50px] overflow-y-scroll overflow-x-hidden hover:border-[2px]  hover:border-red-200"
    >
      <Chat />
    </div>
  );
}

export default ChattingContainer;
