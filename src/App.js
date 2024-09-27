import "./App.css";
import ChattingContainer from "./components/ChattingContainer";
import ParticipantsContainer from "./components/ParticipantsContainer";
import { useChatBackgroundStore } from "./store/chatBackgroundStore.js";
import BackgroundColorProperty from "./components/BackgroundColorProperty.jsx";
import { useState } from "react";
function App() {
  const [isMain, setIsMain] = useState(false);
  const { setChatBackgroundContainer } = useChatBackgroundStore();

  const handleShowParticipantsContainer = () => {
    setIsMain(!isMain);
    setChatBackgroundContainer(!isChangeBackgroundColor);
  };
  const isChangeBackgroundColor = useChatBackgroundStore(
    (state) => state.isChangeBackgroundColor
  );
  return (
    <div className="w-[1000px] flex flex-col pt-[30px] pl-[50px]">
      <div className="flex justify-between items-center mb-[20px]">
        <p className="font-bold ">채팅 이미지 생성기</p>
        <div className="flex gap-[10px]">
          <button
            onClick={handleShowParticipantsContainer}
            className="font-semibold text-[15px] bg-gray-200 rounded-[10px] px-[15px] py-[10px] hover:bg-gray-300"
          >
            MAIN
          </button>
          <button className="font-semibold text-[15px] text-white bg-red-200 rounded-[10px] px-[15px] py-[10px]">
            이미지로 저장하기
          </button>
        </div>
      </div>
      <div className="flex">
        <ChattingContainer />
        {isChangeBackgroundColor ? (
          <BackgroundColorProperty />
        ) : isMain ? ( // isMain이 true일 경우 ParticipantsContainer 표시
          <ParticipantsContainer />
        ) : (
          <ParticipantsContainer />
        )}
      </div>
    </div>
  );
}

export default App;
