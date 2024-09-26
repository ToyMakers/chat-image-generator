import "./App.css";
import ChattingContainer from "./components/ChattingContainer";
import ParticipantsContainer from "./components/ParticipantsContainer";
import ImageProperty from "./components/ImageProperty";
function App() {
  return (
    <div className="flex justify-center pt-[30px]">
      <ChattingContainer />
      <ParticipantsContainer />
      <ImageProperty />
    </div>
  );
}

export default App;
