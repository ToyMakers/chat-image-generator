import { useStore } from "../store/chatStore.js";
import { useComponentStore } from "../store/showComponentStore.js";

function UserDropdown({ chatId }) {
  const { chatList } = useStore();

  const { setIsModalOpen } = useComponentStore();

  return (
    <div className="bg-white border-[3px] z-[10] rounded-[10px]">
      <li className=" py-[5px] px-[5px] rounded-[10px] hover:bg-gray-100">
        <button
          onClick={() => {
            setIsModalOpen(true);
          }}
          className="flex items-center"
        >
          <img
            alt="참여자 추가"
            src="./assets/ic-add.svg"
            className="mr-[5px] w-[10px] h-[10px]"
          />
          참여자 추가
        </button>
      </li>

      <li className=" py-[5px] px-[5px] rounded-[10px] hover:bg-gray-100">
        <button className="flex items-center">
          <img
            alt="참여자 추가"
            src="./assets/ic-add.svg"
            className="mr-[5px] w-[10px] h-[10px]"
          />
          랜덤 생성
        </button>
      </li>
      {chatList &&
        chatList.map((chat) => {
          return (
            <li
              key={chat.chatId}
              className=" py-[5px] px-[5px] rounded-[10px] hover:bg-gray-100"
            >
              {chat.user}
            </li>
          );
        })}
    </div>
  );
}

export default UserDropdown;
