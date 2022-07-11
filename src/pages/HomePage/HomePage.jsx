import "./HomePage.scss";
import { AnimatePresence } from "framer-motion";
import TextDiagonal from "../../components/TextDiagonal/TextDiagonal";
import TextTitle from "../../components/TextTitle/TextTitle";
import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import Transition from "../../Transition/Transition";

function HomePage() {
  const screenWidth = window.screen.availWidth;
  const screenHeight = window.screen.availHeight;
  const orientation = window.screen.orientation.type;

  return (
    <AnimatePresence exitBeforeEnter >
      <div className="home-page">
        <Header screenWidth={screenWidth} orientation={orientation} screenHeight={screenHeight} />
        <Navigation
          screenWidth={screenWidth}
          orientation={orientation}
          screenHeight={screenHeight}
        />
        <TextDiagonal />
        <main className="mainBlock">
          <TextTitle />
        </main>
      </div>
    </AnimatePresence>
  );
}

export default Transition(HomePage);
