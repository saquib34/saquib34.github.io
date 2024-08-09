// components/Achievements.js
import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import { FaTrophy } from 'react-icons/fa'; // Import a trophy icon for visual interest

function Achievements() {
  const fadeIn = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(20px)' },
    config: config.slow,
  });

  const items = [
    { text: "Ranked 2nd in AI Hackathon (ABINITO)", color: "bg-blue-100" },
    { text: "Ranked 2nd in EDA in CODE BATTLE", color: "bg-green-100" },
    { text: "Won IIITD Hackathon organized on Kaggle", color: "bg-yellow-100" },
    { text: "Ranked 13th worldwide in ML OLYMPIAD", color: "bg-purple-100" },
    { text: "Contributor to GDSC website of SRM Ramapuram", color: "bg-red-100" },
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">
          <FaTrophy className="inline-block text-yellow-500 text-4xl mb-2" />
          Achievements
        </h2>
        <div className="flex flex-wrap justify-center">
          {items.map((item, index) => (
            <animated.div
              key={index}
              style={fadeIn}
              className={`bg-white ${item.color} p-6 m-4 rounded-lg shadow-lg w-full max-w-sm transition-transform transform hover:scale-105`}
            >
              <p className="text-lg font-medium text-gray-800">{item.text}</p>
            </animated.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
