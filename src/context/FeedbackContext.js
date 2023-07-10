import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
      {
        id: 1,
        rating: 10,
        text: "I love this App and it's great!",
      },
      {
        id: 2,
        rating: 9,
        text: "Absolutely adore this app, it's amazing!",
      },
      {
        id: 3,
        rating: 10,
        text: "Best app I've ever used, hands down!",
      },
      {
        id: 4,
        rating: 8,
        text: "This application is fantastic! Highly recommend.",
      },
      {
        id: 5,
        rating: 10,
        text: "Impressed with the functionality of this app, it's brilliant!",
      },
    ]);

    const [feedbackEdit, setFeedbackEdit] = useState({
      item: {},
      edit: false,
    });

    const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
    };

    const deleteFeedback = (id) => {
      if (window.confirm("Are you sure you want to delete this feedback?")) {
        setFeedback(feedback.filter((feedback) => feedback.id !== id));
      }
    };

    const updateFeedback = (id, updItem) => {
      setFeedback(feedback.map((item) => item.id === id ? {...item, ...updItem} : item))
    };

    const editFeedback = (item) => {
      setFeedbackEdit({
        item,
        edit: true,
      });
    };


    return (
      <FeedbackContext.Provider
        value={{
          feedback,
          feedbackEdit,
          deleteFeedback,
          addFeedback,
          editFeedback,
          updateFeedback,
        }}
      >
        {children}
      </FeedbackContext.Provider>
    );
}

export default FeedbackContext;