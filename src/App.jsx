import "./App.css";
import Header from "./components/blog/common/Header.jsx";
import Footer from "./components/blog/common/Footer.jsx";
import Blog from "./components/blog/Blog.jsx";

//root component
function App() {
  return (
    <>
      <Header />
      <div className="flex justify-center bg-white p-6 py-16 h-120">
        <Blog />
      </div>
      <Footer />
    </>
  );
}

export default App;
