import { useStore } from "../store/chatStore.js";
import { participants } from "../constants/participants.js";
import { useComponentStore } from "../store/showComponentStore.js";
function UserDropdown({ chatId, onUserSelect }) {
  const { userList, setUserList, addUserToChatById } = useStore();
  const { setIsAddModalOpen, setIsEditModalOpen } = useComponentStore();

  const handleSelect = (username, profileImg) => {
    addUserToChatById(chatId, username);
    onUserSelect(username, profileImg); // 프로필 이미지도 전달
  };

  const handleRandomUser = () => {
    const randomIndex = Math.floor(Math.random() * participants.length);
    const randomParticipant = participants[randomIndex];
    setUserList(randomParticipant.username, randomParticipant.profilePicture); // 프로필 이미지 포함
  };

  return (
    <div className="bg-white border-[3px] z-[10] rounded-[10px] ">
      <li className="list-none py-[5px] px-[5px] rounded-[10px] hover:bg-gray-100 ">
        <button
          onClick={() => {
            setIsAddModalOpen(true);
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

      <li className="list-none py-[5px] px-[5px] rounded-[10px] hover:bg-gray-100">
        <button
          onClick={() => {
            handleRandomUser();
          }}
          className="flex items-center"
        >
          <img
            alt="참여자 랜덤 생성"
            src="./assets/ic-add.svg"
            className="mr-[5px] w-[10px] h-[10px]"
          />
          랜덤 생성
        </button>
      </li>

      {userList.map((user) => (
        <li
          key={user.userId}
          onClick={() => handleSelect(user.username, user.profileImg)} // 프로필 이미지 전달
          className="list-none py-[5px] px-[5px] rounded-[10px] hover:bg-gray-100 flex items-center"
        >
          <img
            src={user.profileImg}
            alt={`${user.username} 프로필`}
            className="w-[20px] h-[20px] rounded-full mr-[10px]"
          />
          {user.username}
          <button
            onClick={() => {
              setIsEditModalOpen(true);
            }}
          >
            <img
              src="./assets/ic-edit.png"
              alt="수정 아이콘"
              className="w-[10px] h-[10px] ml-3 "
            />
          </button>
        </li>
      ))}
    </div>
  );
}

export default UserDropdown;
