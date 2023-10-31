import { useQuiz } from "../context/QuizContext.js";
import Error from "./Error.js";
import FinishScreen from "./FinishScreen.jsx";
import Footer from "./Footer.jsx";
import Header from "./Header.js";
import Loader from "./Loader.js";
import Main from "./Main.jsx";
import NextButton from "./NextButton.jsx";
import Progress from "./Progress.jsx";
import Question from "./Question.jsx";
import StartScreen from "./StartScreen.jsx";
import Timer from "./Timer.jsx";

export default function App() {
  const { status } = useQuiz();
  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
        {status === "active" && (
          <>
            <Progress />
            <Question />
            <Footer>
              <Timer />
              <NextButton />
            </Footer>
          </>
        )}
        {status === "finished" && <FinishScreen />}
      </Main>
    </div>
  );
}
