import { useStore } from "../store/chatStore.js";

function UserDropdwon() {
  const { chatList } = useStore();
  return (
    <div className="bg-gray-100 border-[3px] z-[999] rounded-[10px]">
      <li className=" py-[5px] px-[5px] rounded-[10px] hover:bg-white">
        <button className="flex items-center">
          <img
            alt="참여자 추가"
            src="./assets/ic-add.svg"
            className="mr-[5px] w-[10px] h-[10px]"
          />
          참여자 추가
        </button>
      </li>
      {chatList &&
        chatList.map((chat) => {
          return (
            <li
              key={chat.chatId}
              className=" py-[5px] px-[5px] rounded-[10px] hover:bg-white"
            >
              {chat.user}
            </li>
          );
        })}
    </div>
  );
}
export default UserDropdwon;
