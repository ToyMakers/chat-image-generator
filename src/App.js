import "./App.css";
import ChattingContainer from "./components/ChattingContainer";
import ParticipantsContainer from "./components/ParticipantsContainer";

function App() {
  return (
    <div className="flex justify-center pt-[30px]">
      <ChattingContainer />
      <ParticipantsContainer />
    </div>
  );
}

export default App;
