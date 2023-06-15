import Feedbackitem from "./Feedbackitem";

function FeedbackList({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet...</p>;
  }

  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <Feedbackitem key={item.id} item={item} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

export default FeedbackList;
