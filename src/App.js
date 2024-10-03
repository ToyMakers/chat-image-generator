import "./App.css";
import ChattingContainer from "./components/ChattingContainer";
import ParticipantsContainer from "./components/ParticipantsContainer";
import BackgroundProperty from "./components/style-container/BackgroundColorProperty.jsx";
import { useComponentStore } from "./store/showComponentStore.js";
import UserProperty from "./components/style-container/UserProperty.jsx";
import ProfileProperty from "./components/style-container/ProfileProperty.jsx";
import ChatProperty from "./components/style-container/ChatProperty.jsx";
import TimeProperty from "./components/style-container/TimeProperty.jsx";
import html2canvas from "html2canvas";
import { useEffect, useRef } from "react";
import { useClipboard } from "./utils/useClipboard.jsx";

function App() {
  const { container, setContainer } = useComponentStore();
  const chattingContainerRef = useRef(null);
  const downloadButtonRef = useRef(null);

  // useClipboard 훅을 사용하여 clipboardHandler 가져오기
  const { clipboardHandler } = useClipboard(chattingContainerRef);

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

  useEffect(() => {
    const downloadButton = downloadButtonRef.current;

    const handleDownload = () => {
      html2canvas(chattingContainerRef.current).then((canvas) => {
        saveImg(canvas.toDataURL("image/jpg"), "chatting_image.jpg");
        clipboardHandler(); // 클립보드에 이미지 복사
        alert("이미지 저장 완료! 클립보드에 복사되었습니다.");
      });
    };

    if (downloadButton) {
      downloadButton.addEventListener("click", handleDownload);
    }

    return () => {
      if (downloadButton) {
        downloadButton.removeEventListener("click", handleDownload);
      }
    };
  }, [clipboardHandler]); // clipboardHandler를 의존성 배열에 추가

  const saveImg = (uri, filename) => {
    let link = document.createElement("a");
    document.body.appendChild(link);
    link.href = uri;
    link.download = filename;
    link.click();
    document.body.removeChild(link);
  };

  const handleShowParticipantsContainer = () => {
    setContainer("main");
  };

  return (
    <div className="w-[1000px] flex flex-col pt-[30px] pl-[50px]">
      <div className="flex justify-between items-center mb-[20px]">
        <p className="font-bold">채팅 이미지 생성기</p>
        <div className="flex gap-[10px]">
          <button
            onClick={handleShowParticipantsContainer}
            className="font-semibold text-[15px] bg-gray-200 rounded-[10px] px-[15px] py-[10px] hover:bg-gray-300"
          >
            MAIN
          </button>
          <button
            ref={downloadButtonRef}
            className="font-semibold text-[15px] text-white bg-red-200 rounded-[10px] px-[15px] py-[10px]"
          >
            이미지로 저장하기
          </button>
        </div>
      </div>
      <div className="flex">
        <div className="flex">
          <div ref={chattingContainerRef}>
            <ChattingContainer />
          </div>
          <>{choosePage()}</>
        </div>
      </div>
    </div>
  );
}

export default App;
