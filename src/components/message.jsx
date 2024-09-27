/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { useStore } from "../store/chatStore.js";

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

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log({ initialUser, initialContent, initialTime });
    updateChatById(chatId, user, content, time);
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
          onClick={handleUpdate}
          className="w-[50px] text-gray-100 hover:text-black-100"
        >
          생성
        </button>
      </td>
    </tr>
  );
}
