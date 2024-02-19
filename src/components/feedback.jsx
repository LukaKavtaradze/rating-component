import thanks from "../assets/illustration-thank-you.svg";
import "../App.css";

const Feedback = (props) => {
  return (
    <div className="responce" style={{ display: props.resDisplay }}>
      <img src={thanks} alt="" />
      <div className="selected">
        <span>You Selected {props.rateValue} out of 5</span>
      </div>
      <h2>Thank you!</h2>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
};

export default Feedback;
