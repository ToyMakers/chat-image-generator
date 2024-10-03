import { useStore } from "../store/chatStore.js";
import Message from "./message.jsx";

function ParticipantsContainer() {
  const { chatList, setChatList } = useStore();

  const handleAddMessage = (e) => {
    e.preventDefault();
    const newChat = {
      user: "",
      content: "",
      time: "",
    };
    setChatList(newChat);
  };

  return (
    <div className="w-[780px] h-[500px] bg-bg-100 ml-[20px] pt-[20px] pl-[30px] overflow-y-scroll overflow-x-hidden">
      <table className="text-[13px] text-left border-separate border-spacing-2">
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
          {chatList.map((chat) => {
            return (
              <Message
                chatId={chat.chatId}
                initialUser={chat.user}
                initialContent={chat.content}
                initialTime={chat.time}
              />
            );
          })}
        </tbody>
      </table>
      <button
        type="button"
        onClick={handleAddMessage}
        className="w-[150px] mt-[50px] mb-[20px] bg-white text-black-400 text-[13px] rounded-[5px] px-[10px] py-[5px] "
      >
        메시지 추가
      </button>
    </div>
  );
}

export default ParticipantsContainer;
