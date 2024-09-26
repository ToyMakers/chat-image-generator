import { useState } from "react";
import { useStore } from "../store/chatStore.js";
import Message from "./message.jsx";

function ParticipantsContainer() {
  const [user, setUser] = useState();
  const [content, setContent] = useState("");
  const [time, setTime] = useState("");
  const { chatList, setChatList } = useStore();
  const handleAddMessage = (e) => {
    e.preventDefault();
    const newChat = { user, content, time };
    setChatList([...chatList, newChat]);
  };

  return (
    <div className="w-[700px] h-[500px] bg-bg-100 ml-[20px] pt-[20px] pl-[30px]">
      <table className="text-[13px] text-left">
        <thead>
          <tr>
            <th>
              <label>말 한 사람</label>
            </th>
            <th>내용</th>
            <th>시간</th>
          </tr>
        </thead>
        <tbody>
          {chatList.map((chatId) => {
            return <Message key={chatId} />;
          })}
        </tbody>
      </table>
      <button
        type="button"
        onClick={handleAddMessage}
        className="w-[150px] mt-[50px] bg-white text-black-400 text-[13px] rounded-[5px] px-[10px] py-[5px] "
      >
        메시지 추가
      </button>
    </div>
  );
}

export default ParticipantsContainer;
