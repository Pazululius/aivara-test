import "./App.css";
import FirstStepQuestions from "./components/FirstStepQuestions";
import SecondStepQuestions from "./components/SecondStepQuestions";

function App() {
  return (
    <div className="bg-gray-200 rounded-2xl text-start flex">
      <FirstStepQuestions />
      <SecondStepQuestions />
    </div>
  );
}

export default App;
