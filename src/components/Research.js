import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';
import { FaWaveSquare } from 'react-icons/fa'; // Import a wave or signal icon

function Research() {
  const [isExpanded, setIsExpanded] = useState(false);

  const cardAnimation = useSpring({
    opacity: 1,
    transform: isExpanded ? 'scale(1.03)' : 'scale(1)',
    from: { opacity: 0, transform: 'scale(0.95)' },
    config: config.wobbly,
  });

  const contentAnimation = useSpring({
    maxHeight: isExpanded ? '300px' : '0px',
    opacity: isExpanded ? 1 : 0,
    overflow: 'hidden',
    config: config.stiff,
  });

  const shadowAnimation = useSpring({
    boxShadow: isExpanded
      ? '0 20px 30px rgba(0, 0, 0, 0.25)'
      : '0 10px 15px rgba(0, 0, 0, 0.1)',
    config: config.slow,
  });

  return (
    <section id="research" className="py-20 bg-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">
          Research
        </h2>
        
        <div className="flex flex-col items-center mb-8">
          <FaWaveSquare className="text-blue-500 text-6xl mb-4" />
          <p className="text-lg text-gray-600 max-w-xl text-center">
            Exploring innovative ways to understand human emotions through advanced signal processing techniques.
          </p>
        </div>
        
        <animated.div
          style={{ ...cardAnimation, ...shadowAnimation }}
          className="bg-white p-8 rounded-lg cursor-pointer transition-transform hover:scale-105 shadow-lg"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-semibold text-gray-900">
              Detecting Human Emotions using GSR Signals
            </h3>
            <FaWaveSquare className="text-blue-500 text-3xl" />
          </div>
          <animated.div style={contentAnimation} className="transition-all duration-300 ease-in-out">
            <p className="mb-4 text-gray-700">
              Currently working on a research paper focused on detecting human emotions using Galvanic Skin Response (GSR) signals. 
              This research is being conducted under DR. Haroon at the SIRL LAB, IISER Bhopal. 
              The paper aims to be submitted to the AAAI Conference in Philadelphia, USA.
            </p>
            <p className="mb-4 text-gray-600">
              Our approach leverages advanced signal processing techniques to analyze GSR data, providing insights into emotional states with potential applications in various fields, including psychology and human-computer interaction (HCI).
            </p>
            {isExpanded && (
              <div>
                <h4 className="text-lg font-semibold mb-2 text-gray-800">Key Points:</h4>
                <ul className="list-disc list-inside mb-4 text-gray-700">
                  <li>Innovative approach to emotion detection</li>
                  <li>Collaboration with SIRL LAB at IISER Bhopal</li>
                  <li>Potential applications in psychology and HCI</li>
                </ul>
                <a 
                  href="#" 
                  className="inline-block bg-blue-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    alert("More details coming soon!");
                  }}
                >
                  Learn More
                </a>
              </div>
            )}
          </animated.div>
          <p className="text-blue-600 mt-4 text-center font-medium">
            {isExpanded ? "Click to collapse" : "Click to expand"}
          </p>
        </animated.div>
      </div>
    </section>
  );
}

export default Research;
