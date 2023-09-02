import "./Card.css";

const Card = ({ count, status, title, onUpdate, onRemove }) => {
  return (
    <div className="card">
      <p className="title">
        {count}. {title}
      </p>
      <p className="status">Status: <span>{status ? 'Completed' : 'Pending'}</span></p>
      <button className="update but" onClick={onUpdate}>
        Update Task
      </button>
      <button className="remove but" onClick={onRemove}>
        Remove
      </button>
    </div>
  );
};

export default Card;
