import { useState } from "react";
import { useStore } from "../store/chatStore.js";
import UserDropdown from "./UserDropdown.jsx";
import { useComponentStore } from "../store/showComponentStore.js";
import { ModalPortal } from "./ModalPortal.jsx";
import { ParticipantModal } from "./ParticipantModal.jsx";
import { ParticipantEditModal } from "./ParticipantEditModal.jsx";

export default function Message({
  chatId,
  initialUser,
  initialContent,
  initialTime,
}) {
  const [user, setUser] = useState(initialUser || "");
  const [content, setContent] = useState(initialContent);
  const [time, setTime] = useState(initialTime);
  const { chatList, deleteChatById, updateChatById } = useStore();
  const [isShowDropdown, setIsShowDropdown] = useState(false);

  //모달로 chatId 전달
  const [selectedChatId, setSelectedChatId] = useState(null);
  const {
    isAddModalOpen,
    setIsAddModalOpen,
    isEditModalOpen,
    setIsEditModalOpen,
  } = useComponentStore();

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log({ initialUser, initialContent, initialTime });
    updateChatById(chatId, user, content, time);
  };

  const handleDelete = () => {
    deleteChatById(chatId);
  };

  const handleUserSelect = (selectedUser) => {
    setUser(selectedUser);
    setIsShowDropdown(false);
  };

  const currentChat = chatList.find((chat) => chat.chatId === chatId);
  const currentUserName = currentChat ? currentChat.user : "유저 이름";

  return (
    <>
      <tr>
        <td>
          <ul
            className="w-[100px] h-[30px] flex flex-col pl-[5px] pt-[5px] mr-[15px] rounded-[10px] bg-white text-gray-400"
            onClick={() => {
              setIsShowDropdown(!isShowDropdown);
            }}
          >
            {currentUserName}
          </ul>
        </td>
        <td>
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            type="text"
            placeholder="내용"
            className="w-[250px] mr-[15px] rounded-[10px] px-[10px] py-[5px]"
          />
        </td>
        <td>
          <input
            value={time}
            onChange={(e) => setTime(e.target.value)}
            type="time"
            placeholder="시간"
            className="w-[150px] rounded-[10px] px-[10px] py-[5px]"
          />
        </td>
        <td>
          <button
            type="button"
            onClick={handleUpdate}
            className="w-[50px] text-gray-100 hover:text-black-100"
          >
            생성
          </button>
        </td>
        <td>
          <button
            type="button"
            onClick={handleDelete}
            className="w-[50px] text-gray-100 hover:text-black-100"
          >
            삭제
          </button>
        </td>
      </tr>
      {isShowDropdown && (
        <UserDropdown chatId={selectedChatId} onUserSelect={handleUserSelect} />
      )}
      {isAddModalOpen && (
        <ModalPortal>
          <ParticipantModal
            chatId={chatId}
            setIsModalOpen={setIsAddModalOpen}
          />
        </ModalPortal>
      )}

      {isEditModalOpen && (
        <ModalPortal>
          <ParticipantEditModal
            chatId={chatId}
            setIsModalOpen={setIsEditModalOpen}
          />
        </ModalPortal>
      )}
    </>
  );
}
