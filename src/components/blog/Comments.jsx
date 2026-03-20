//Comments component
function Comments() {
  return (
    //setting shadows, hover effects, and font sizes
    <div>
      <h2 className="text-2xl py-4">Comments</h2>
      <textarea
        className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none"
        rows="4"
        placeholder="Add a Comment"
      ></textarea>
      <button
        type="submit"
        className="bg-amber-400 px-6 py-2 rounded-2xl text-white hover:bg-amber-600 transition-shadow"
      >
        Submit
      </button>
      <h3 className="text-xl py-4">Existing Comments: </h3>
      <ul>
        <li>Comment 1</li>
        <li>Comment 2</li>
        <li>Comment 3</li>
      </ul>
    </div>
  );
}

export default Comments;
