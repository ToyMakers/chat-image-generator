import React, { useState } from "react";
import { useStore } from "../store/chatStore.js";

function ParticipantsContainer() {
  // 로컬 상태로 입력 필드 관리
  const [user, setUser] = useState("");
  const [content, setContent] = useState("");
  const [time, setTime] = useState("");

  // Zustand에서 상태와 함수 가져오기
  const addChat = useStore((state) => state.addChat);

  const handleSubmit = (e) => {
    e.preventDefault();

    // 새로운 채팅 데이터를 Zustand 상태에 추가
    addChat(user, content, time);

    // 입력 필드 초기화
    setUser("");
    setContent("");
    setTime("");
  };

  return (
    <div className="w-[700px] h-[500px] bg-bg-100 ml-[20px]">
      <form onSubmit={handleSubmit} className="pt-[20px] pl-[30px]">
        <table>
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
            <tr>
              <td>
                <input
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                  type="text"
                  placeholder="말 한 사람"
                  className="w-[150px] mr-[15px] text-gray-100 rounded-[5px] px-[10px] py-[5px]"
                />
              </td>
              <td>
                <input
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  type="text"
                  placeholder="내용"
                  className="w-[250px] mr-[15px] text-gray-100 rounded-[5px] px-[10px] py-[5px]"
                />
              </td>
              <td>
                <input
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  type="text"
                  placeholder="시간"
                  className="w-[150px] text-gray-100 rounded-[5px] px-[10px] py-[5px]"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button
          type="submit"
          className="w-[150px] mt-[50px] bg-white text-black-400 rounded-[5px] px-[10px] py-[5px]"
        >
          메시지 추가
        </button>
      </form>
    </div>
  );
}

export default ParticipantsContainer;
