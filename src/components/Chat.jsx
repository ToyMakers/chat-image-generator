import { useChatBackgroundStore } from "../store/chatBackgroundStore.js";
import { useStore } from "../store/chatStore.js";
import { useComponentStore } from "../store/showComponentStore.js";

function Chat() {
  const {
    chatList,
    //유저 이름 속성
    senderFontWeight,
    senderFontSize,
    senderTextColor,
    //시간 속성
    timeTextSize,
    timeTextColor,
    //채팅(말풍선) 속성
    chatTextColor,
    chatBorderRadius,
    chatFontWeight,
    chatFontSize,
    chatPadding,
    chatWidth,
    //프로필 사진
    profileWidth,
    profileHeight,
    profileBackgroundColor,
    profileBorderThickness,
    profileBorderColor,
    profileBorderStyle,
    profileBorderRadius,
  } = useStore();
  const { container, setContainer } = useComponentStore();
  const { backgroundMargin } = useChatBackgroundStore();

  const handleStyleProfile = (e) => {
    e.stopPropagation();
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
          className="flex "
          style={{ marginTop: `${backgroundMargin}px` }}
          key={chat.chatId}
        >
          <div className="mr-[10px] mb-[5px] h-min p-0 hover:border-[2px] hover:border-red-200 box-border">
            <img
              alt="프로필 사진"
              onClick={handleStyleProfile}
              src="./assets/profile.png"
              style={{
                width: `${profileWidth || 30}px`,
                height: `${profileHeight || 30}px`,
                backgroundColor: profileBackgroundColor,
                borderWidth: `${profileBorderThickness}px`,
                borderColor: profileBorderColor,
                borderStyle: profileBorderStyle,
                borderRadius: `${profileBorderRadius}px`,
              }}
            />
          </div>
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
                style={{
                  color: chatTextColor,
                  borderRadius: `${chatBorderRadius}px`,
                  fontWeight: `${chatFontWeight}`,
                  fontSize: `${chatFontSize}px`,
                  padding: `${chatPadding}px`,
                  width: `${chatWidth}px`,
                }}
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
