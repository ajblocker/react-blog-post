//Content component
function Content(props) {
  return (
    <main>
      <h2 className="text-3xl p-1 flex ">{props.title}</h2>
      <p className="text-lg p-1">{props.content}</p>
      <p>
        <strong>Author:</strong> {props.author}
      </p>
      <p>
        <strong>Date:</strong> {props.date}
      </p>
    </main>
  );
}

export default Content;
