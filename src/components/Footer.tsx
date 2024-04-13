// Footer.tsx
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons"; // Make sure you have this import

export const Footer = () => {
  return (
    <footer
      className="w-full bg-green-700 text-white flex flex-col items-center"
      style={{ padding: "1rem" }}
    >
      <Link
        to="/Elite-Estates"
        className="logo mb-2"
        style={{ cursor: "pointer" }}
      >
        <img
          src="/Elite-Estates/logo-png.jpg"
          alt="Elite Estates Lawn Care Logo"
          style={{ maxHeight: "60px" }}
        />
      </Link>
      {/* Instagram Icon */}
      <a
        href="https://instagram.com/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        className="instagram-logo"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </footer>
  );
};

export default Footer;
