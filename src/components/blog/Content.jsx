//Content component
function Content(props) {
  return (
    //adjust size of frame for content
    <main className="max-w-md mx-auto p-4">
      <h2 className="text-4xl p-3">{props.title}</h2>
      <p className="text-lg p-2">{props.content}</p>
      <p className="p-2">
        <strong>Author:</strong> {props.author}
      </p>
      <p className="p-2">
        <strong>Date:</strong> {props.date}
      </p>
    </main>
  );
}

export default Content;
