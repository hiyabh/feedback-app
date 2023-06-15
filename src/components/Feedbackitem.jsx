
import Card from "./shared/Card";

function Feedbackitem({ item, handleDelete }) {
  return (
    <Card>
      <div className={"num-display"}>{item.rating}</div>
      <button onClick={() => handleDelete(item.id)} className="close">
        X
      </button>
      <div className={"text-display"}>{item.text}</div>
    </Card>
  );
}

export default Feedbackitem;
