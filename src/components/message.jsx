/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { useStore } from "../store/chatStore.js";

export default function Message() {
  const [user, setUser] = useState();
  const [content, setContent] = useState("");
  const [time, setTime] = useState("");
  const { chatId, chatList, setChatList } = useStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedChatList = chatList.map(
      (chat) =>
        chat.chatId === chatId
          ? { ...chat, user, content, time } // chatId가 일치하면 업데이트
          : chat // 일치하지 않으면 그대로 유지
    );
    setChatList(updatedChatList);
    console.log(chatList);
  };

  return (
    <tr>
      <td>
        <input
          value={user}
          onChange={(e) => setUser(e.target.value)}
          type="text"
          placeholder="말 한 사람"
          className="w-[150px] mr-[15px]  rounded-[10px] px-[10px] py-[5px] border-[2px] border-gray-300"
        />
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
          onClick={handleSubmit}
          className="w-[50px] text-gray-100 hover:text-black-100"
        >
          생성
        </button>
      </td>
    </tr>
  );
}
