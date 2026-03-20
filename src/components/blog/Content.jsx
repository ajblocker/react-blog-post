//Content component
function Content(props) {
  return (
    <main className="max-w-md mx-auto p-4">
      <h2 className="text-3xl p-3 flex ">{props.title}</h2>
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
