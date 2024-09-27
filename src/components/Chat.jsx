import { useChatBackgroundStore } from "../store/chatBackgroundStore.js";
import { useStore } from "../store/chatStore.js";
import { useProfileStore } from "../store/profileStore.js";
import { useComponentStore } from "../store/showComponentStore.js";

function Chat() {
  const {
    width,
    height,
    backgroundColor,
    borderThickness,
    borderColor,
    borderStyle,
    borderRadius,
  } = useProfileStore();
  const {
    chatList,
    senderFontWeight,
    senderFontSize,
    senderTextColor,
    timeTextSize,
    timeTextColor,
  } = useStore();
  const { container, setContainer } = useComponentStore();
  const { backgroundMargin } = useChatBackgroundStore();

  const handleStyleProfile = (e) => {
    e.stopPropagation(); // prevent bubbling to parent
    if (container !== "profile") {
      setContainer("profile");
    }
  };

  const handleStyleUser = (e) => {
    e.stopPropagation();
    if (container !== "user") {
      setContainer("user");
    }
  };

  const handleStyleContent = (e) => {
    e.stopPropagation();
    if (container !== "chat") {
      setContainer("chat");
    }
  };

  const handleStyleTime = (e) => {
    e.stopPropagation();
    if (container !== "time") {
      setContainer("time");
    }
  };

  return (
    <>
      {chatList.map((chat) => (
        <div
          className="flex"
          style={{ marginTop: `${backgroundMargin}px` }}
          key={chat.chatId}
        >
          <div
            className="mr-[10px] mt-[5px] hover:border-[2px] hover:border-red-200"
            style={{
              width: `${width}px`,
              height: `${height}px`,
              backgroundColor: backgroundColor,
              borderWidth: `${borderThickness}px`,
              borderColor: borderColor,
              borderStyle: borderStyle,
              borderRadius: `${borderRadius}px`,
            }}
          ></div>
          <div>
            <div
              onClick={handleStyleUser}
              style={{
                fontSize: `${senderFontSize}px`,
                fontWeight: `${senderFontWeight}`,
                color: `${senderTextColor}`,
              }}
              className="text-[12px] font-semibold hover:border-[2px] hover:border-red-200 pr-[0px]"
            >
              {chat.user ? String(chat.user) : ""}
            </div>
            <div className="flex">
              <div
                onClick={handleStyleContent}
                className="w-max h-max px-[10px] py-[5px] text-[14px] bg-gray-200 rounded-[5px] hover:border-[2px] hover:border-red-200"
              >
                {chat.content ? String(chat.content) : ""}
              </div>
              <div
                style={{
                  fontSize: `${timeTextSize}px`,
                  color: `${timeTextColor}`,
                }}
                onClick={handleStyleTime}
                className="text-[10px] mt-[15px] ml-[5px] hover:border-[2px] hover:border-red-200"
              >
                {chat.time ? String(chat.time) : ""}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Chat;
