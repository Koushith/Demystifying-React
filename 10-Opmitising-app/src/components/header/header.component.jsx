import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <img
        src="https://logosandtypes.com/wp-content/uploads/2021/01/swiggy.svg"
        alt="logo"
      />

      <nav>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/card">Cart</Link>
        </ul>
      </nav>
    </div>
  );
};
