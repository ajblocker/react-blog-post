//footer component
function Footer() {
  return (
    //grabs the current year
    //setting footer to stay at the bottom of page
    <div className="flex flex-col min-h-screen">
      <footer className="text-white mt-auto px-3 py-5 bg-gray-800">
        <p className="text-center">&copy; {new Date().getFullYear()} My Blog</p>
      </footer>
    </div>
  );
}

export default Footer;
