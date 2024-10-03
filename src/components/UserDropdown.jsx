import { useStore } from "../store/chatStore.js";
import { useComponentStore } from "../store/showComponentStore.js";
import ParticipantModal from "./participantModal.jsx";

function UserDropdown({ chatId, onUserSelect }) {
  const { userList, addUserToChatById } = useStore();
  const { ismodalOpen, setIsModalOpen } = useComponentStore();

  const handleSelect = (username) => {
    addUserToChatById(chatId, username);
    onUserSelect(username);
  };

  return (
    <div className="bg-white border-[3px] z-[10] rounded-[10px]">
      <li className="list-none py-[5px] px-[5px] rounded-[10px] hover:bg-gray-100">
        <button
          onClick={() => {
            setIsModalOpen(true); // 클릭 시 모달 열기
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

      {/* 모달 오픈 여부에 따라 모달 렌더링 */}
      {ismodalOpen && (
        <div>
          <ParticipantModal chatId={chatId} setIsModalOpen={setIsModalOpen} />
        </div>
      )}

      <li className="list-none py-[5px] px-[5px] rounded-[10px] hover:bg-gray-100">
        <button className="flex items-center">
          <img
            alt="참여자 추가"
            src="./assets/ic-add.svg"
            className="mr-[5px] w-[10px] h-[10px]"
          />
          랜덤 생성
        </button>
      </li>

      {userList &&
        userList.map((user) => (
          <li
            key={user.userId}
            onClick={() => handleSelect(user.username)}
            className="list-none py-[5px] px-[5px] rounded-[10px] hover:bg-gray-100"
          >
            {user.username}
          </li>
        ))}
    </div>
  );
}

export default UserDropdown;
