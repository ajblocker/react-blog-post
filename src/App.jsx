import "./App.css";
import Header from "./components/blog/common/Header.jsx";
import Footer from "./components/blog/common/Footer.jsx";
import Blog from "./components/blog/Blog.jsx";

//root component
function App() {
  return (
    <>
      <Header />
      <div className="flex items-center justify-center bg-white p-6 py-4 rounded-xl shadow-md border-gray-300">
        <Blog />
        <Footer />
      </div>
    </>
  );
}

export default App;
