import "./App.css";
import ChattingContainer from "./components/ChattingContainer";
import ParticipantsContainer from "./components/ParticipantsContainer";
import BackgroundProperty from "./components/style-container/BackgroundColorProperty.jsx";
import { useComponentStore } from "./store/showComponentStore.js";
import UserProperty from "./components/style-container/UserProperty.jsx";
import ProfileProperty from "./components/style-container/ProfileProperty.jsx";
import ChatProperty from "./components/style-container/ChatProperty.jsx";
import TimeProperty from "./components/style-container/TimeProperty.jsx";
function App() {
  const { container, setContainer } = useComponentStore();

  const choosePage = () => {
    switch (container) {
      case "main":
        return <ParticipantsContainer />;
      case "background":
        return <BackgroundProperty />;
      case "user":
        return <UserProperty />;
      case "profile":
        return <ProfileProperty />;
      case "chat":
        return <ChatProperty />;
      case "time":
        return <TimeProperty />;
      default:
        return <ParticipantsContainer />;
    }
  };

  const handleShowParticipantsContainer = () => {
    setContainer("main");
  };
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
        <>{choosePage()}</>
      </div>
    </div>
  );
}

export default App;
