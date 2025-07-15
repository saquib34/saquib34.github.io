import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaChalkboardTeacher, FaLightbulb, FaHandsHelping, FaUniversity, FaDiscord, FaGlobeAsia } from 'react-icons/fa';

const stats = [
  { label: 'Students Mentored', value: 100, icon: <FaUsers className="text-blue-500 text-3xl mr-2" /> },
  { label: 'Workshops Led', value: 12, icon: <FaChalkboardTeacher className="text-purple-500 text-3xl mr-2" /> },
  { label: 'Startups Supported', value: 5, icon: <FaLightbulb className="text-yellow-500 text-3xl mr-2" /> },
  { label: 'Communities Impacted', value: 4, icon: <FaHandsHelping className="text-green-500 text-3xl mr-2" /> },
];

const leadership = [
  {
    title: 'Head Technical Lead',
    org: 'Institute of Innovation and Entrepreneurship (IIE), SRMIST',
    period: '2024 - Present',
    logo: <FaUniversity className="text-indigo-600 text-3xl mr-2" />,
    description: 'Leading a team of 20+ students, established AI/ML innovation lab, mentored 10+ student entrepreneurs.'
  },
  {
    title: 'Technical Lead',
    org: 'Tech Vayuna, SRMIST',
    period: '2024 - Present',
    logo: <FaLightbulb className="text-yellow-500 text-3xl mr-2" />,
    description: 'Organized hackathons, led ML/web initiatives, built and trained team members.'
  },
  {
    title: 'ML Instructor',
    org: 'GDSC SRMIST',
    period: '2023 - Present',
    logo: <FaDiscord className="text-blue-400 text-3xl mr-2" />,
    description: 'Created and led ML team, delivered workshops, ran Discord series on ML.'
  },
  {
    title: 'Tech Volunteer',
    org: 'Social Warrior NGO',
    period: '2023 - Present',
    logo: <FaGlobeAsia className="text-green-600 text-3xl mr-2" />,
    description: 'Developed programming courses for 100+ underprivileged students, set up digital literacy labs.'
  },
];

function AnimatedStat({ value, icon, label }) {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;
    let incrementTime = 1000 / end;
    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);
    return () => clearInterval(timer);
  }, [value]);
  return (
    <div className="flex flex-col items-center bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center mb-2">{icon}<span className="text-4xl font-bold text-purple-600">{count}</span></div>
      <span className="text-gray-700 mt-2 text-sm font-medium">{label}</span>
    </div>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};
const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 120 }
  }
};

function LeadershipCommunity() {
  return (
    <section id="leadership" className="py-20 bg-gradient-to-br from-blue-100 to-purple-100 relative overflow-hidden">
      <motion.div
        className="absolute right-0 bottom-0 w-72 h-72 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full opacity-20 blur-2xl animate-pulse"
        style={{ zIndex: 0 }}
        animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="container mx-auto px-4 md:px-0 relative z-10">
        <motion.h2
          className="text-5xl font-extrabold mb-12 text-center text-gray-800 tracking-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Leadership & Community
        </motion.h2>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {stats.map((stat, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <AnimatedStat value={stat.value} icon={stat.icon} label={stat.label} />
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {leadership.map((role, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300 cursor-pointer group"
              variants={itemVariants}
              whileHover={{ scale: 1.07, boxShadow: '0 8px 32px rgba(168,85,247,0.15)' }}
            >
              <div className="flex items-center mb-4">{role.logo}<span className="text-xl font-bold text-purple-700 group-hover:text-blue-700 transition-colors duration-200">{role.title}</span></div>
              <div className="text-gray-600 mb-2 text-center font-semibold">{role.org}</div>
              <div className="text-gray-500 mb-2 text-center">{role.period}</div>
              <div className="text-gray-700 text-center">{role.description}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default LeadershipCommunity; 