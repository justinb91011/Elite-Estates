import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const About = () => {
  const images = [
    "/house-1.jpg",
    "/house-2.jpg",
    "/house-3.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-200">
      <Header />
      <main className="flex-grow pt-24">
        <div className="mt-10 px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-black text-left">Who are we?</h1>
          <p className="text-base text-black mt-4 text-left">
            Elite Estates Lawn Care is dedicated to transforming your outdoor
            spaces into beautiful, living art. Our team of skilled professionals
            brings expertise and creativity to every project, ensuring
            personalized and high-quality service for your home or business. We
            offer our services in East Hampton, New York and its neighboring
            communities. From snow removal and grass maintenance to landscape
            design and installation, we offer it all. We're committed to giving
            our clients excellent work and top-notch customer support.
          </p>
          <div className="relative mt-8 mb-20">
            <img
              src={images[currentIndex]}
              alt="House"
              className="w-full h-96 object-cover rounded-lg"
            />
            <button
              onClick={goToPrevious}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button
              onClick={goToNext}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
