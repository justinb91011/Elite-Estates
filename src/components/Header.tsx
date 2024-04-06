import { Link } from 'react-router-dom';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import this

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 flex justify-between items-center w-full border-b bg-green-700 text-white"
      style={{ padding: '1rem' }}>
      <div className="flex items-center">
        <Link to="/Elite-Estates" className="logo" style={{ cursor: 'pointer' }}>
          <img src="/Elite-Estates/logo-png.jpg" alt="Logo" style={{ maxHeight: '80px' }} />
        </Link>
        <div style={{ borderLeft: '1px solid white', height: '77px', marginLeft: '20px', marginRight: '20px' }}></div>
        <Link to="/Elite-Estates" style={{ fontSize: '1rem', fontWeight: 'bold' }}>
          Elite Estates Lawn Care
        </Link>
      </div>
      <div style={{ marginRight: '1rem' }} className="flex items-center"> {/* Right aligned contact info with icons */}
        <a href="mailto:EliteestatesLawncare@gmail.com" className="flex items-center text-white hover:text-white"> {/* Make email clickable */}
          <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '0.5rem' }} />
          Email Us
        </a>
        <span style={{ margin: '0 1rem' }}>|</span> {/* Separator */}
        <a href="tel:+16313772438" className="flex items-center text-white hover:text-white"> {/* Make phone number clickable */}
          <FontAwesomeIcon icon={faPhone} style={{ marginRight: '0.5rem' }} />
          (631) 377 - 2438
        </a>
      </div>
    </header>
  );
}

export default Header;
