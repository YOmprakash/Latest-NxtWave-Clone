import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight, FaPhone } from 'react-icons/fa6';
import Naga from '../assets/nagabhushan.avif';
import darshan from '../assets/darshan.avif';
import pavani from '../assets/pavani.png';
import dhanusha from '../assets/dhanusha.avif';
import harshavardhan from '../assets/harshavardhan.png';
import navya1 from '../assets/navya1.png';
import navya from '../assets/navya.png';
import sneha from '../assets/sneha-sathish.avif';

// Sample data for student experiences
const studentExperiences = [
  {
    id: 1,
    image: Naga,
    description: 'Tech win of chemistry student',
  },
  {
    id: 2,
    image: darshan,
    description: 'Building Demand Tech skills',
  },
  {
    id: 3,
    image: pavani,
    description: 'Tech win of IT student',
  },
  {
    id: 4,
    image: dhanusha,
    description: 'Building Practical skills when in college',
  },
  {
    id: 5,
    image: harshavardhan,
    description: 'From failing to crack IT job',
  },
  {
    id: 6,
    image: navya1,
    description: 'Todays art student, Tomorrow IT professional',
  },
  
  {
    id: 8,
    image: sneha,
    description: 'From Sales job to IT career',
  },
 
];

export default function LearnersExperience() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Set the number of cards to show and detect mobile screens
    const updateLayout = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(1);
        setIsMobile(true);
      } else {
        setCardsToShow(3);
        setIsMobile(false);
      }
    };

    // Initial setting
    updateLayout();

    // Update on window resize
    window.addEventListener('resize', updateLayout);

    // Cleanup the event listener
    return () => window.removeEventListener('resize', updateLayout);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % studentExperiences.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + studentExperiences.length) % studentExperiences.length
    );
  };

  const getVisibleCards = () => {
    const visibleCards = [];
    for (let i = 0; i < cardsToShow; i++) {
      visibleCards.push(studentExperiences[(currentIndex + i) % studentExperiences.length]);
    }
    return visibleCards;
  };

  return (
    <section className="py-16 px-8 md:px-16">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-[#183b56] text-3xl md:text-4xl font-bold mb-8 text-center">
          Hear NxtWave learners' experiences
        </h2>

        <div className="relative">
          {/* Arrows for larger screens */}
          {!isMobile && (
            <div className="flex items-center justify-center mb-8">
              <button onClick={handlePrev} className="text-[#183b56]">
                <FaArrowLeft size={24} />
              </button>
              <div className={`w-full mx-4 grid gap-4 grid-cols-${cardsToShow}`}>
                {getVisibleCards().map((experience, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg  text-left">
                    <img
                      src={experience.image}
                      alt={`student-${experience.id}`}
                      className="w-full h-48 object-contain rounded-lg mb-4"
                    />
                    <p className=" pl-2 text-[#183b56] mb-8">{experience.description}</p>
                  </div>
                ))}
              </div>
              <button onClick={handleNext} className="text-[#183b56]">
                <FaArrowRight size={24} />
              </button>
            </div>
          )}

          {/* Cards for mobile */}
          {isMobile && (
            <div className="w-full mx-4 grid gap-4 grid-cols-1">
              {getVisibleCards().map((experience, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <img
                    src={experience.image}
                    alt={`student-${experience.id}`}
                    className="w-full h-48 object-contain rounded-lg mb-4"
                  />
                  <p className="text-[#183b56] mb-4">{experience.description}</p>
                </div>
              ))}
            </div>
          )}

          {/* Arrows for mobile screens */}
          {isMobile && (
            <div className="flex items-center justify-end mt-4">
              <button onClick={handlePrev} className="text-[#183b56] mr-8">
                <FaArrowLeft size={24} />
              </button>
              <button onClick={handleNext} className="text-[#183b56]">
                <FaArrowRight size={24} />
              </button>
            </div>
          )}
        </div>

        <div className="flex justify-start">
          <button
            type="button"
            className="mt-4 bg-[#183b56] text-white py-2 px-4 rounded shadow-md flex items-center justify-center"
          >
            <FaPhone className="mr-2" />
            Request a Callback
          </button>
        </div>
      </div>
    </section>
  );
}
