import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
function App() {

    const [feedback, setFeedback] = useState(FeedbackData);
    
    const addFeedback = (newFeedback) => {
      newFeedback.id = uuidv4();
      setFeedback([...feedback, newFeedback]);
      console.log('feedback: ', feedback);
    };
    
    const deleteFeedback = (id) => {
      if(window.confirm('Are you sure you want to delete this feedback?')) {
        setFeedback(feedback.filter((feedback) => feedback.id!== id));
      }
    };

    return (
      <>
        <Header />
        <div className="container">
        <FeedbackForm handleAdd={addFeedback}/>
          <FeedbackStats feedback={feedback} />
          <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
        </div>
      </>
    );
}

export default App;