import { useNavigate } from "react-router-dom"; // Import useNavigate
import Footer from "./Footer";
import Header from "./Header";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Home = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLearnMore = () => {
    navigate("/Elite-Estates/about"); // Navigate to the about page
  };

  return (
    <div className="w-full bg-white"> {/* Changed background to white */}
      <Header />
      <main className="pt-24">
        {/* Background image section */}
        <div
          className="relative w-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/Elite-Estates/house-photo.jpg')",
            height: "calc(100vh - 64px)",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
              Transform Your Outdoor Spaces with Elite Estates Lawn Care
            </h1>
            <p className="mt-4 text-white text-center max-w-xl mx-auto">
              Personalized, high-quality lawn care and landscaping services for
              East Hampton and surrounding areas.
            </p>
            <button
              onClick={handleLearnMore} // Add onClick event
              className="mt-6 px-6 py-3 bg-green-600 text-white text-lg font-semibold rounded-full hover:bg-green-700"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Our Services section */}
        <div className="w-full mt-32 flex justify-start px-4"> {/* Increased margin-top for spacing */}
          <h2 className="text-3xl font-bold text-black">Our Services</h2>
        </div>
        <div className="flex flex-col md:flex-row mt-16 w-full px-4 space-y-6 md:space-y-0 md:space-x-6"> {/* Increased margin-top for spacing */}
          <div className="md:w-1/2 flex flex-col justify-around">
            <div className="group hover:bg-gray-300 rounded-lg transition-all duration-200 mb-4 cursor-pointer">
              <div className="flex items-start p-4 bg-white rounded-lg group-hover:bg-gray-300"> {/* Added group-hover to the inner div */}
                <div className="mr-4">
                  <FontAwesomeIcon icon={faBarsStaggered} className="text-3xl text-black" /> {/* Updated to use FontAwesomeIcon */}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black">Garden Care</h3>
                  <p className="text-gray-700">
                    Expert lawn treatments and mowing, vibrant flower beds, timely
                    planting, leaf removal, seasonal cleanup, and tree pruning.
                  </p>
                </div>
              </div>
            </div>
            <div className="group hover:bg-gray-300 rounded-lg transition-all duration-200 mb-4 cursor-pointer">
              <div className="flex items-start p-4 bg-white rounded-lg group-hover:bg-gray-300"> {/* Added group-hover to the inner div */}
                <div className="mr-4">
                  <FontAwesomeIcon icon={faBarsStaggered} className="text-3xl text-black" /> {/* Updated to use FontAwesomeIcon */}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black">
                    Tree and Stump Removal
                  </h3>
                  <p className="text-gray-700">
                    Safe tree removal, stump extraction, professional trimming,
                    grinding, and pruning.
                  </p>
                </div>
              </div>
            </div>
            <div className="group hover:bg-gray-300 rounded-lg transition-all duration-200 mb-4 cursor-pointer">
              <div className="flex items-start p-4 bg-white rounded-lg group-hover:bg-gray-300"> {/* Added group-hover to the inner div */}
                <div className="mr-4">
                  <FontAwesomeIcon icon={faBarsStaggered} className="text-3xl text-black" /> {/* Updated to use FontAwesomeIcon */}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black">
                    Grass Care and Management
                  </h3>
                  <p className="text-gray-700">
                    Precision mowing, custom fertilization, high-quality seeds,
                    sod laying, edge trimming, and thatch removal.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex items-center justify-center">
            <img
              src="/Elite-Estates/office-photo.jpg" // Use your image here
              alt="Office"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* New Section */}
        <div className="w-full bg-black py-16"> {/* Added background color to this section */}
          <div className="px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-black text-white p-6 rounded-lg">
                <h3 className="text-xl font-bold">Why Choose Our Garden Care Services</h3>
                <p className="text-gray-300">Discover the benefits of our expert garden care solutions and how we can enhance your outdoor spaces.</p>
              </div>
              <div className="bg-black text-white p-6 rounded-lg">
                <h3 className="text-xl font-bold">Safe and Efficient Tree Removal</h3>
                <p className="text-gray-300">Learn about our professional tree and stump removal services and why they are essential for maintaining a safe and beautiful landscape.</p>
              </div>
              <div className="bg-black text-white p-6 rounded-lg">
                <h3 className="text-xl font-bold">Lawn Care and Maintenance Tips</h3>
                <p className="text-gray-300">Expert tips for maintaining a healthy lawn.</p>
              </div>
              <div className="bg-black text-white p-6 rounded-lg">
                <h3 className="text-xl font-bold">Seasonal Flower Bed Preparation</h3>
                <p className="text-gray-300">How to prepare your flower beds for the season.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32"> {/* Increased margin-top for spacing below the section */}
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Home;
