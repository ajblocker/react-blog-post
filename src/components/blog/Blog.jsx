import Comments from "./Comments";
import Content from "./Content";

//Blog component
function Blog() {
  //blog post object
  const blogPostContent = {
    title: "My First Blog Post",
    content:
      "This is the content of my very first blog post! Welcome to my Blog!! I hope you enjoy reading it!",
    author: "Amy Stacks",
    date: "2026-03-17",
  };
  return (
    //layout items beneath each other
    <>
      <div className="flex flex-col bg-white p-85 py-3 h-180 rounded-lg shadow-lg border-gray-600">
        <Content
          title={blogPostContent.title}
          content={blogPostContent.content}
          author={blogPostContent.author}
          date={blogPostContent.date}
        />
        <div>
          <Comments />
        </div>
      </div>
    </>
  );
}

export default Blog;
