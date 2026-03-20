//footer component
function Footer() {
  return (
    //grabs the current year
    <footer className="bg-gray-800 text-white px-6">
      <div className="block p-4 mx-auto md:my-45">
        <p className="text-center">&copy; {new Date().getFullYear()} My Blog</p>
      </div>
    </footer>
  );
}

export default Footer;
