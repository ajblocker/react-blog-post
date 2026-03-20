import Comments from "./Comments";
import Content from "./Content";

//Blog component
function Blog() {
  const blogPostContent = {
    title: "My First Blog Post",
    content:
      "This is the content of my very first blog post! Welcome to my Blog!! I hope you enjoy reading it!",
    author: "Amy Stacks",
    date: "2026-03-17",
  };
  return (
    <div>
      <Content
        title={blogPostContent.title}
        content={blogPostContent.content}
        author={blogPostContent.author}
        date={blogPostContent.date}
      />
      <Comments />
    </div>
  );
}

export default Blog;
