import { useEffect, useState } from "react";
import { useStore } from "../store/chatStore";

export function ParticipantEditModal({ chatId, setIsModalOpen }) {
  const { chatList, setUserList } = useStore();
  const [username, setUsername] = useState(chatList.user);
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    const chat = chatList.find((chat) => chat.chatId === chatId);
    if (chat) {
      setUsername(chat.user || ""); // 채팅의 사용자 이름이 없을 경우 기본값 설정
      setProfileImage(chat.profileImg || null); // 채팅의 프로필 이미지가 없을 경우 기본값 설정
    }
  }, [chatId, chatList]);

  const handleAddUser = (e) => {
    e.preventDefault();

    if (username.trim().length > 0 && profileImage) {
      setUserList(username, profileImage); // 이 함수가 어떻게 동작하는지 확인해야 함
      setIsModalOpen(false);
    } else {
      alert("유저 이름과 프로필 사진을 입력해주세요.");
    }
  };

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result); // 선택된 파일의 데이터를 상태에 저장
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black-100 bg-opacity-20 backdrop-blur-sm z-10"
        onClick={() => setIsModalOpen(false)} // 오버레이 클릭 시 모달 닫기
      />
      <div className="z-40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-auto bg-white border-[2px] border-gray-100 border-opacity-50 overflow-hidden flex-col px-[20px] py-[30px] items-center rounded-[30px]">
        <h1 className="font-bold text-[16px]">참여자 수정</h1>
        <form className="flex flex-col mt-[10px] text-[14px]">
          <label className="flex flex-col">
            이름
            <input
              type="text"
              maxLength={5} // 5글자 제한
              value={username}
              placeholder={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-[200px] py-[5px] pl-[5px] mt-[5px] border-[1px] rounded-[5px]"
            />
          </label>

          <label className="flex flex-col mt-[10px]">
            프로필 사진
            <img
              src={profileImage}
              alt="Preview"
              className="mt-[10px] w-[50px] h-[50px]  border border-gray-200"
            />
            <input
              type="file"
              onChange={handleProfileImageChange} // 파일 변경 시 호출되는 함수
              className="mt-[5px]"
            />
          </label>

          <div className="flex">
            <button
              onClick={handleAddUser}
              className="w-[100px] mt-[25px] mr-[20px] rounded-[10px] px-[5px] py-[5px] bg-gray-100 text-white"
            >
              추가하기
            </button>
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="w-[100px] mt-[25px] rounded-[10px] px-[5px] py-[5px] bg-red-200 text-white"
            >
              닫기
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
