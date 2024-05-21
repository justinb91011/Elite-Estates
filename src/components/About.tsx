import Footer from "./Footer";
import Header from "./Header";

export const About = () => {
  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-200">
      <Header />
      <main className="flex-grow pt-24">
        {" "}
        {/* Adjusted to pt-24 for fixed header */}
        <div className="mt-10 px-4 max-w-4xl mx-auto">
          {" "}
          {/* Removed text alignment changes */}
          <h1 className="text-4xl font-bold text-black text-left">
            Who are we?
          </h1>{" "}
          {/* Ensured text alignment to left */}
          <p className="text-base text-black mt-4 text-left">
            {" "}
            {/* Ensured text alignment to left */}
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
      </main>
      <Footer />
    </div>
  );
};

export default About;
