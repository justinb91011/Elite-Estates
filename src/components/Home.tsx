import { useNavigate } from "react-router-dom"; // Import useNavigate
import Footer from "./Footer";
import Header from "./Header";

export const Home = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLearnMore = () => {
    navigate("/Elite-Estates/about"); // Navigate to the about page
  };

  return (
    <div className="w-full bg-gray-200">
      <Header />
      <main className="pt-24">
        {" "}
        {/* Adjusted to pt-24 for fixed header */}
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
        {/* Text content section */}
        <div className="mt-6 pl-4 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-green-700">Who are we?</h1>
          <p className="text-base text-green-700 mt-4">
            Elite Estates Lawn Care is dedicated to transforming your outdoor
            spaces into beautiful, living art. Our team of skilled professionals
            brings expertise and creativity to every project, ensuring
            personalized and high-quality service for your home or business. We
            offer our services in East Hampton, New York and its neighboring
            communities. From snow removal and grass maintenance to landscape
            design and installation, we offer it all. We're committed to giving
            our clients excellent work and top-notch customer support.
          </p>
        </div>
        {/* Centered "Services" section */}
        <div className="w-full mt-10 flex justify-center">
          <h2 className="text-3xl font-bold text-green-700">Services</h2>
        </div>
        {/* Three service sections */}
        <div className="flex flex-wrap justify-around px-4 mt-6 w-full">
          <div className="w-full md:w-1/3 px-2 text-center">
            <h3 className="text-2xl font-semibold text-green-700">
              Garden Care
            </h3>
            <ul
              className="list-inside list-disc text-green-700 text-left mx-auto text-sm"
              style={{ maxWidth: "240px" }}
            >
              <li>Expert lawn treatments and mowing for a pristine yard</li>
              <li>
                Vibrant and healthy flower beds with specialized care routines.
              </li>
              <li>Timely planting for year-round garden vibrancy and health</li>
              <li>
                Efficient removal of fallen leaves to keep your garden tidy
              </li>
              <li>Cleanup services to prepare garden for the coming season</li>
              <li>
                Shape and maintain the health of trees with professional pruning
              </li>
            </ul>
          </div>
          <div className="w-1/3 px-2 text-center">
            <h3 className="text-2xl font-semibold text-green-700">
              Tree and Stump Removal
            </h3>
            <ul
              className="list-inside list-disc text-green-700 text-left mx-auto text-sm"
              style={{ maxWidth: "240px" }}
            >
              <li>Safe and efficient removal of trees</li>
              <li>
                Complete stump extraction for a clear and usable yard space
              </li>
              <li>
                Professional trimming to improve tree health and appearance
              </li>
              <li>Quick and thorough grinding to minimize ground disruption</li>
              <li>Expert pruning to encourage growth</li>
            </ul>
          </div>
          <div className="w-1/3 px-2 text-center">
            <h3 className="text-2xl font-semibold text-green-700">
              Grass Care and Management
            </h3>
            <ul
              className="list-inside list-disc text-green-700 text-left mx-auto text-sm"
              style={{ maxWidth: "240px" }}
            >
              <li>Regular mowing with precision for the perfect grass</li>
              <li>Custom fertilization for robust and lush grass</li>
              <li>High-quality seeds for a dense and vibrant lawn</li>
              <li>Professional sod laying for an instant beautiful lawn</li>
              <li>Edge trimming for a neat and tidy lawn</li>
              <li>Thatch removal to promote lawn health and growth</li>
            </ul>
          </div>
        </div>
      </main>
      <div className="mt-8">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
