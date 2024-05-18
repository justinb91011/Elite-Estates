import { Link } from "react-router-dom";
import { faPhone, faEnvelope, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Header = () => {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center w-full border-b bg-black text-white"
      style={{ padding: "1rem" }}
    >
      <div className="flex items-center">
        <Link
          to="/Elite-Estates"
          className="logo"
          style={{ cursor: "pointer" }}
        >
          <img
            src="/Elite-Estates/logo-png.jpg"
            alt="Logo"
            style={{ maxHeight: "80px" }}
          />
        </Link>
        <div
          style={{
            borderLeft: "1px solid white",
            height: "77px",
            marginLeft: "20px",
            marginRight: "20px",
          }}
        ></div>
        <Link
          to="/Elite-Estates"
          style={{ fontSize: "1rem", fontWeight: "bold" }}
        >
          Elite Estates Lawn Care
        </Link>
      </div>
      <div style={{ marginRight: "1rem" }} className="flex items-center">
        <Link
          to="/Elite-Estates"
          className="flex items-center"
          style={{
            fontSize: "1rem",
            marginRight: "20px",
            color: "white",
          }}
        >
          <FontAwesomeIcon
            icon={faHouse}
            style={{ marginRight: "0.5rem" }}
          />
          Home
        </Link>
        <a
          href="mailto:EliteestatesLawncare@gmail.com"
          className="flex items-center text-white hover:text-white"
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            style={{ marginRight: "0.5rem" }}
          />
          Email Us
        </a>
        <span style={{ margin: "0 1rem" }}>|</span>
        <a
          href="tel:+16313772438"
          className="flex items-center text-white hover:text-white"
        >
          <FontAwesomeIcon icon={faPhone} style={{ marginRight: "0.5rem" }} />
          (631) 377 - 2438
        </a>
      </div>
    </header>
  );
};

export default Header;
