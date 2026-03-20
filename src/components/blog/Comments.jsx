//Comments component
function Comments() {
  return (
    <div>
      <h3>Comments</h3>
      <textarea placeholder="Add a Comment"></textarea>
      <button
        type="submit"
        className="bg-amber-400 px-6 py-2 rounded-2xl text-white hover:bg-amber-600 transition-shadow"
      >
        Submit
      </button>
      <h4>Existing Comments</h4>
      <ul>
        <li>Comment 1</li>
        <li>Comment 2</li>
        <li>Comment 3</li>
      </ul>
    </div>
  );
}

export default Comments;
