import logo from "../images/logo.svg"

export default function Navigation() {
  return (
    <nav>
      <img className="logo" src={logo} alt="W"/>
      <ul className="navigation">
        <li><a href="home">Home</a></li>
        <li><a href="home">New</a></li>
        <li><a href="home">Popular</a></li>
        <li><a href="home">Trending</a></li>
        <li><a href="home">Categories</a></li>
      </ul>
    </nav>
  );
}
