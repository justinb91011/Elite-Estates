import { Link } from 'react-router-dom'; 

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 flex justify-between items-center w-full border-b bg-gray-700 text-white"
      style={{ padding: '1rem' /* Adjusted padding */ }}>
      <div className="flex items-center">
        <Link to="/Elite-Estates" className="logo" style={{ cursor: 'pointer' }}>
          {/* Increased the maximum height of the logo */}
          <img src="/Elite-Estates/logo-png.jpg" alt="Logo" style={{ maxHeight: '80px' /* Adjusted logo size */ }} />
        </Link>
      </div>  
    </header>
  )
}

export default Header;
