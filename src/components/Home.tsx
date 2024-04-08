import Header from "./Header";

export const Home = () => {
  

  return (
    <div className="w-full mt-10 px-4 bg-gray-200"> 
    <div className="flex flex-col items-start justify-start min-h-screen pt-[112px]">
      <Header />
      <div className="w-full mt-1 pl-4"> {/* Keep text aligned to the left */}
        <h1 className="text-4xl font-bold text-green-700">Who are we?</h1>
      </div>
      <div className="mt-4 pl-4" style={{ maxWidth: '480px' }}> {/* Apply max-width to constrain the text */}
        <p className="text-base text-green-700">
          Elite Estates Lawn Care is dedicated to transforming your outdoor spaces into beautiful, living art. 
          Our team of skilled professionals brings expertise and creativity to every project, ensuring personalized
          and high-quality service for your home or business.
          We offer our services in East Hampton, New York and its neighboring communities. From snow removal and grass
          maintenance to landscape design and installation, we offer it all.
          We're committed to giving our clients excellent work and top-notch customer support.
        </p>
      </div>
      {/* Centered "Services" section */}
      <div className="w-full mt-10 flex justify-center"> {/* Center the "Services" section */}
        <h2 className="text-3xl font-bold text-green-700">Services</h2>
      </div>
      {/* Three service sections */}
      <div className="flex flex-wrap justify-around px-4 mt-6 w-full">
        <div className="w-full md:w-1/3 px-2 text-center">
          <h3 className="text-2xl font-semibold text-green-700">Garden Care</h3>
          <ul className="list-inside list-disc text-green-700 text-left mx-auto text-sm" style={{ maxWidth: '240px' }}> {/* Centered list with max-width */}
            <li>Expert lawn treatments and mowing for a pristine yard</li>
            <li>Vibrant and healthy flower beds with specialized care routines.</li>
            <li>Timely planting for year-round garden vibrancy and health</li>
            <li>Efficient removal of fallen leaves to keep your garden tidy</li>
            <li>Cleanup services to prepare garden for the coming season</li>
            <li>Shape and maintain the health of trees with professional pruning</li>
          </ul>
        </div>
        <div className="w-1/3 px-2 text-center"> {/* Center text for consistency */}
          <h3 className="text-2xl font-semibold text-green-700">Tree and Stump Removal</h3>
          <ul className="list-inside list-disc text-green-700 text-left mx-auto text-sm" style={{ maxWidth: '240px' }}> {/* Centered list with max-width */}
            <li>Safe and efficient removal of trees</li>
            <li>Complete stump extraction for a clear and usable yard space</li>
            <li>Professional trimming to improve tree health and appearance</li>
            <li>Quick and thorough grinding to minimize ground disruption</li>
            <li>Expert pruning to encourage growth</li>
          </ul>
        </div>
        <div className="w-1/3 px-2 text-center"> {/* Center text for consistency */}
          <h3 className="text-2xl font-semibold text-green-700">Grass Care and Management</h3>
          {/* Description for Lawn Maintenance */}
        </div>
      </div>
      {/* Rest of your content */}
    </div>
    </div>
  );
};

export default Home;
