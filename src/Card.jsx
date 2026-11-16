
function Card({ title, children }) {
  return (
    <div className="content-card">
      <h3>{title}</h3>
      {children}
    </div>
  );
}

export default Card;
