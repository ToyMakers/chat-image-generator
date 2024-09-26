import "./App.css";
import ChattingContainer from "./components/ChattingContainer";
import ParticipantsContainer from "./components/ParticipantsContainer";
function App() {
  return (
    <div className="w-[1000px] flex flex-col pt-[30px] pl-[50px]">
      <div className="flex justify-between items-center mb-[20px]">
        <p className="font-bold ">채팅 이미지 생성기</p>
        <div className="flex gap-[10px]">
          <button className="font-semibold text-[15px] bg-gray-200 rounded-[10px] px-[15px] py-[10px] hover:bg-gray-300">
            모양 바꾸기
          </button>
          <button className="font-semibold text-[15px] text-white bg-red-200 rounded-[10px] px-[15px] py-[10px]">
            이미지로 저장하기
          </button>
        </div>
      </div>
      <div className="flex">
        <ChattingContainer />
        <ParticipantsContainer />
      </div>
    </div>
  );
}

export default App;
