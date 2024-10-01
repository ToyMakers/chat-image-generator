/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { useStore } from "../store/chatStore.js";
import UserDropdwon from "./UserDropdown.jsx";

export default function Message({
  chatId,
  initialUser,
  initialContent,
  initialTime,
}) {
  const [user, setUser] = useState(initialUser || "");
  const [content, setContent] = useState(initialContent);
  const [time, setTime] = useState(initialTime);
  const { chatList, updateChatById } = useStore();
  const [isShowDropdwn, setIsShowDropdown] = useState(false);

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log({ initialUser, initialContent, initialTime });
    updateChatById(chatId, user, content, time);
    console.log(chatList);
  };

  return (
    <tr>
      <td>
        <ul
          className="w-[100px] h-[30px] flex flex-col pl-[5px] pt-[5px] mr-[15px]  rounded-[10px] bg-white text-gray-400"
          onClick={() => {
            setIsShowDropdown(!isShowDropdwn);
          }}
        >
          선택해주세요
          {isShowDropdwn && <UserDropdwon />}
        </ul>
      </td>
      <td>
        <input
          value={content}
          onChange={(e) => setContent(e.target.value)}
          type="text"
          placeholder="내용"
          className="w-[250px] mr-[15px]  rounded-[10px] px-[10px] py-[5px]"
        />
      </td>
      <td>
        <input
          value={time}
          onChange={(e) => setTime(e.target.value)}
          type="text"
          placeholder="시간"
          className="w-[150px]  rounded-[10px] px-[10px] py-[5px]"
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
    </tr>
  );
}
