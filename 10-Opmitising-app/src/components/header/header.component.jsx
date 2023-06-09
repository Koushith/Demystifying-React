import { Link } from "react-router-dom";
import { useAuth } from "../../utils/auth.context";

export const Header = () => {
  // const { user, setUser } = useAuth();
  // console.log("header-render............");
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

          {/* <span>{user.name}</span>

          <button
            onClick={() =>
              setUser({ ...user, name: "Koushith", isLoggedIn: true })
            }
          >
            {user.isLoggedIn ? "Logout" : "Login"}
          </button> */}
        </ul>
      </nav>
    </div>
  );
};
