import Card from "./shared/Card";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function Feedbackitem({ item }) {
  const { deleteFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className={"num-display"}>{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        X
      </button>
      <div className={"text-display"}>{item.text}</div>
    </Card>
  );
}

export default Feedbackitem;
