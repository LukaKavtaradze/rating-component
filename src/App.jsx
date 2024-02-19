import "./App.css";
import stars from "./assets/icon-star.svg";
import { useState } from "react";
import Feedback from "./components/feedback";

function App() {
  const arr = [1, 2, 3, 4, 5];
  const [rateValue, setRateValue] = useState(null);
  const [display, setDisplay] = useState("flex");
  const [feedbackDisplay, setFeedbackDisplay] = useState("none");
  const [error, setError] = useState("");
  const [activeButton, setActiveButton] = useState(null);

  function handleClick(button) {
    setRateValue(button);
    setActiveButton(button);
  }

  function checkClicked() {
    if (rateValue) {
      console.log("its Clicked :", rateValue);
      setFeedbackDisplay("flex");
      console.log(display);
      console.log(feedbackDisplay);
      setDisplay("none");
    } else {
      console.log("u must click on button");
      setError("Please select a score !");
    }
  }

  return (
    <div className="container">
      <div className="rating" style={{ display: display }}>
        <div className="oval">
          <img src={stars} alt="" />
        </div>
        <h1>How did we do ? </h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <span className="error">{error}</span>
        <div className="rate">
          {arr.map((button) => (
            <button
              key={button}
              className={`rateButton ${
                button === activeButton ? "active" : ""
              }`}
              onClick={() => handleClick(button)}
            >
              {button}
            </button>
          ))}
        </div>
        <button className="submit-button" onClick={checkClicked} type="submit">
          S U B M I T
        </button>
      </div>
      <Feedback rateValue={rateValue} resDisplay={feedbackDisplay} />
    </div>
  );
}

export default App;
