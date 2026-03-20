//header component
function Header() {
  return (
    //create navbar and website heading
    <div className="bg-blue-600 text-white py-4">
      <h1 className="text-4xl">My Blog</h1>
      <nav>
        <ul className="flex justify-center items-center md:justify-evenly">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
