import { Link } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from "../../context/AuthContext";

export default function Navbar() {
  const { user, logout } = userContext(AuthContext);
  return (
  <nav className="navbar">
    <div className="navbar-container">
      <Link to="/" className="navbar-brand">
        Shophop
      </Link>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">
          Home
        </Link>
        <Link to="/checkout" className="navbar-link">
          Cart
        </Link>
      </div>
      {!user ? (
        <div className="navbar-auth">
          <div className="navbar-auth-links">
            <Link to="/auth" className="btn btn-secondary">
              Login
            </Link>
            <Link to="/auth" className="btn btn-primary">
              Sign Up
            </Link>
          </div>
        </div>
      ) : (
        <div className="navbar-user">
          <span>Hello, {user.email}</span>
          <button className="btn btn-secondary" onClick={logout}>
            Logout
          </button>
        </div>
      )}
    </div>
  </nav>
  );
}

