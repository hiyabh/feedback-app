import { useState } from "react";
import Header from "./components/Header";
import FeedbacList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";

function App() {

    const [feedback, setFeedback] = useState(FeedbackData);
    const deleteFeedback = (id) => {
      if(window.confirm('Are you sure you want to delete this feedback?')) {
        setFeedback(feedback.filter((feedback) => feedback.id!== id));
      }
    };
    return (
      <>
        <Header />
        <div className="container">
          <FeedbackStats feedback={feedback} />
          <FeedbacList feedback={feedback} handleDelete={deleteFeedback} />
        </div>
      </>
    );
}

export default App;