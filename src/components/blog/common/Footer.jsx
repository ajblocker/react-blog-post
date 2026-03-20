//footer component
function Footer() {
  return (
    //grabs the current year
    <footer>
      <p>&copy; {new Date().getFullYear()} My Blog</p>
    </footer>
  );
}

export default Footer;
