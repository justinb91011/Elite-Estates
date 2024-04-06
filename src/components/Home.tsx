import Header from "./Header";

export const Home = () => {
  return (
    <div className="flex flex-col items-start justify-start min-h-screen pt-[112px]">
      <Header />
      <div className="w-full mt-10 pl-4"> {/* Keep text aligned to the left */}
        <h1 className="text-4xl font-bold text-green-700">Who are we?</h1>
      </div>
      <div className="mt-4 pl-4" style={{ maxWidth: '500px' }}> {/* Apply max-width to constrain the text */}
        <p className="text-base text-green-700"> {/* Changed text size from lg to base */}
          Elite Estates Lawn Care is dedicated to transforming your outdoor spaces into beautiful, living art. 
          Our team of skilled professionals brings expertise and creativity to every project, ensuring personalized
          and high-quality service for your home or business.
          We offer our services in East Hampton, New York and its neighboring communities. From snow removal and grass
          maintenance to landscape design and installation, we offer it all.
          We're committed to giving our clients excellent work and top-notch customer support.
        </p>
      </div>
      {/* Rest of your content */}
    </div>
  );
};

export default Home;
