import { useState } from "react";
import { useStore } from "../store/chatStore";

export default function ParticipantModal({ chatId, setIsModalOpen }) {
  const [username, setUsername] = useState("");
  const { setUserList } = useStore();

  const handleAddUser = (e) => {
    e.preventDefault();

    if (username.trim().length > 0) {
      setUserList(username);
      setIsModalOpen(false);
    } else {
      alert("유저 이름을 입력해주세요.");
    }
  };

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[280px] bg-white border-[2px] border-gray-100 border-opacity-50 overflow-hidden flex-col px-[20px] pt-[30px] items-center rounded-[30px] ">
      <h1 className="font-bold text-[16px]">참여자 추가하기</h1>
      <form className="flex flex-col mt-[10px] text-[14px]">
        <label className="flex flex-col">
          이름
          <input
            type="text"
            max={5} // 5글자 제한
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="5자 이내로 이름을 입력해주세요"
            className="w-[200px] py-[5px] pl-[5px] mt-[5px] border-[1px] rounded-[5px]"
          />
        </label>
        <label className="flex flex-col mt-[10px]">
          프로필 사진
          <input type="file" className="mt-[5px] " />
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
  );
}
