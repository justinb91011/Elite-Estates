// Footer.tsx
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          {/* Left Side - Logo and Copy Rights */}
          <div className="flex items-center">
            <Link to="/Elite-Estates" className="mr-4">
              <img
                src="/Elite-Estates/logo-png.jpg"
                alt="Elite Estates Lawn Care Logo"
                style={{ maxHeight: "60px" }}
              />
            </Link>
            <p className="text-sm">
              © 2023 Elite Estates Lawn Care. All rights reserved.
            </p>
          </div>

          {/* Center - Connect with us */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Connect with us</h3>
            <a
              href="https://www.instagram.com/elite_estates_landscaping/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>

          {/* Right Side - Spacer for Alignment */}
          <div className="w-24"></div>
        </div>

        {/* Bottom - Additional Info */}
        <div className="text-center text-xs mt-6">
          <p>Elite Estates Lawn Care © 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
