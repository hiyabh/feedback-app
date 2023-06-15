import { useState } from "react";
import Card from "./shared/Card";
import Button from "./Button";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(0);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setMessage("Text must be less than 10 characters");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }

    setText(e.target.value);
  };
  
  const handleRatingChange = (e) => setRating(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(text);
    console.log(rating);
  };

  return (
    <div>
      <Card>
        <form>
          <h2>How would you rate your service with us?</h2>
          <div className="input-group">
            <input
              onChange={handleTextChange}
              type="text"
              placeholder="Write a review"
            />
            <Button
              type="submit"
              isDisabled={btnDisabled}
              onClick={handleSubmit}
            >
              Send
            </Button>
          </div>
          {message && <div className="message">{message}</div>}
        </form>
      </Card>
    </div>
  );
}

export default FeedbackForm;
