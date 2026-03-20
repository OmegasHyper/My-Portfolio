import { motion } from "framer-motion";
import { useState } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "min-h-screen bg-gray-900 text-gray-100" : "min-h-screen bg-gray-50 text-indigo-900"}>
      {/* Header */}
      <header className="p-6 shadow bg-white dark:bg-gray-800 sticky top-0 z-50 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">Mohamed Abdelrazek</h1>
          <p className="text-sm text-indigo-700 dark:text-gray-300">Frontend Developer | React Enthusiast | Future Full-Stack Engineer</p>
        </div>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>

      {/* Hero Section */}
      <motion.section 
        className="p-10 text-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <a href="https://www.linkedin.com/in/mohamed-abdelrazek-a3b342298/" target="_blank" rel="noopener noreferrer">
          <motion.img
            src="/imgs/1753371616105.jpg"
            alt="Mohamed Abdelrazek"
            className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg hover:shadow-xl transition"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
        </a>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-4"
        >
          Hi, I’m Mohamed 👋
        </motion.h2>
        <p className="text-lg max-w-xl mx-auto">
          I’m a Biomedical Engineering student at Cairo University passionate about
          web development. I specialize in React and I’m on my journey to becoming
          a full-stack developer.
        </p>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        className="p-10"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h3 className={`text-3xl font-bold text-center mb-8 ${darkMode ? "text-indigo-400" : "text-indigo-600"}`}>Projects</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div whileHover={{ scale: 1.03, boxShadow: "0px 8px 24px rgba(0,0,0,0.15)" }} className={`rounded-2xl shadow-md p-6 transition flex flex-col h-full ${darkMode ? "bg-gray-700" : "bg-gray-800"}`}>
            <h3 className={`font-semibold text-xl mb-2 ${darkMode ?  "text-indigo-400" : "text-indigo-500"}`}>React Portfolio</h3>
            <p className="text-indigo-700 dark:text-gray-300 mb-4">A modern portfolio built with React, Tailwind, and Framer Motion.</p>
            <div className="mt mt-auto">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-indigo-100 text-indigo-600 text-sm rounded-lg">React</span>
                <span className="px-2 py-1 bg-purple-100 text-purple-600 text-sm rounded-lg">Tailwind</span>
                <span className="px-2 py-1 bg-pink-100 text-pink-600 text-sm rounded-lg">Framer Motion</span>
              </div>
              <a href="https://mohamed-abdelrazek-portfolio.netlify.app/" className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">View Project</a>
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03, boxShadow: "0px 8px 24px rgba(0,0,0,0.15)" }} className={`rounded-2xl shadow-md p-6 transition flex flex-col h-full ${darkMode ? "bg-gray-700" : "bg-gray-800"}`}>
            <h3 className={`font-semibold text-xl mb-2 ${darkMode ?  "text-indigo-400" : "text-indigo-500"}`}>Tower Defense game</h3>
            <p className="text-indigo-700 dark:text-gray-300 mb-4">A game created with PyGame library implementing core algorithms and Data structure in Python.</p>
            <div className="mt mt-auto">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-sm rounded-lg">Python</span>
                <span className="px-2 py-1 bg-gray-200 text-gray-700 text-sm rounded-lg">Algorithms</span>
                <span className="px-2 py-1 bg-green-100 text-green-700 text-sm rounded-lg">Data Structure</span>
              </div>
              <a href="https://github.com/OmegasHyper/Castle_Defense" className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">View Project</a>
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03, boxShadow: "0px 8px 24px rgba(0,0,0,0.15)" }} className={`rounded-2xl shadow-md p-6 transition flex flex-col h-full ${darkMode ? "bg-gray-700" : "bg-gray-800"}`}>
            <h3 className={`font-semibold text-xl mb-2 ${darkMode ?  "text-indigo-400" : "text-indigo-500"}`}>DeepXDE Research</h3>
            <p className="text-indigo-700 dark:text-gray-300 mb-4">Solving biomedical ODEs (Diabetes Glucose Tolerance Test) using DeepXDE in Python.</p>
            <div className="mt mt-auto">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-sm rounded-lg">Python</span>
                <span className="px-2 py-1 bg-red-100 text-red-600 text-sm rounded-lg">DeepXDE</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded-lg">Numerical Methods</span>
              </div>
              <a href="https://github.com/Jiro75/Diabetes-Mellitus-Prediction-Using-DL.git" className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">View Project</a>
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03, boxShadow: "0px 8px 24px rgba(0,0,0,0.15)" }} className={`rounded-2xl shadow-md p-6 transition flex flex-col h-full ${darkMode ? "bg-gray-700" : "bg-gray-800"}`}>
            <h3 className={`font-semibold text-xl mb-2 ${darkMode ?  "text-indigo-400" : "text-indigo-500"}`}>News website</h3>
            <p className="text-indigo-700 dark:text-gray-300 mb-4">A multipage website that shows both general and sports news, with a focus on premier league.</p>
            <div className="mt mt-auto">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-orange-100 text-orange-700 text-sm rounded-lg">HTML</span>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-sm rounded-lg">JavaScript</span>
                <span className="px-2 py-1 bg-purple-100 text-purple-700 text-sm rounded-lg">CSS</span>
              </div>
              <a href="https://github.com/OmegasHyper/News-Task-Depi-Team4.git" className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">View Project</a>
            </div>
            </motion.div>

          <motion.div whileHover={{ scale: 1.03, boxShadow: "0px 8px 24px rgba(0,0,0,0.15)" }} className={`rounded-2xl shadow-md p-6 transition flex flex-col h-full ${darkMode ? "bg-gray-700" : "bg-gray-800"}`}>
            <h3 className={`font-semibold text-xl mb-2 ${darkMode ?  "text-indigo-400" : "text-indigo-500"}`}>Signal Viewer</h3>
            <p className="text-indigo-700 dark:text-gray-300 mb-4">An interactive web-based signal viewer for visualizing and analyzing time-domain data with zooming and real-time updates. Designed for quick exploration of signal patterns and behavior through a simple, intuitive interface.</p>
            <div className="mt mt-auto">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-green-100 text-green-700 text-sm rounded-lg">NextJS</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-sm rounded-lg">FastAPI</span>
                <span className="px-2 py-1 bg-purple-100 text-purple-700 text-sm rounded-lg">Tailwind</span>
              </div>
              <a href="https://github.com/OmegasHyper/DSP-Signal-Viewer.git" className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">View Project</a>
            </div>
            </motion.div>

          <motion.div whileHover={{ scale: 1.03, boxShadow: "0px 8px 24px rgba(0,0,0,0.15)" }} className={`rounded-2xl shadow-md p-6 transition flex flex-col h-full ${darkMode ? "bg-gray-700" : "bg-gray-800"}`}>
            <h3 className={`font-semibold text-xl mb-2 ${darkMode ?  "text-indigo-400" : "text-indigo-500"}`}>Signal Equalizer</h3>
            <p className="text-indigo-700 dark:text-gray-300 mb-4">An interactive web-based signal equalizer that allows users to adjust frequency bands and shape signals in real time. Designed for intuitive control and precise audio or data signal tuning through a clean, user-friendly interface.</p>
            <div className="mt-auto">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-green-100 text-green-700 text-sm rounded-lg">NextJS</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-sm rounded-lg">FastAPI</span>
                <span className="px-2 py-1 bg-purple-100 text-purple-700 text-sm rounded-lg">Tailwind</span>
              </div>
              <a href="https://github.com/OmegasHyper/DSP-Signal-Equalizer.git" className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">View Project</a>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        className="p-10"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h3 className={`text-3xl font-bold text-center mb-6 ${darkMode? "text-indigo-400" : "text-indigo-600"} `}>Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <motion.div whileHover={{ scale: 1.03, boxShadow: "0px 8px 24px rgba(0,0,0,0.15)" }} className={`rounded-2xl shadow-md p-6 hover:shadow-lg transition ${darkMode ? "bg-gray-700" : "bg-gray-800"}`}>
              <p className="font-semibold text-indigo-800 dark:text-white">React</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03, boxShadow: "0px 8px 24px rgba(0,0,0,0.15)" }} className={`rounded-2xl shadow-md p-6 hover:shadow-lg transition ${darkMode ? "bg-gray-700" : "bg-gray-800"}`}>
            <p className="font-semibold text-indigo-800 dark:text-white">Java</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03, boxShadow: "0px 8px 24px rgba(0,0,0,0.15)" }} className={`rounded-2xl shadow-md p-6 hover:shadow-lg transition ${darkMode ? "bg-gray-700" : "bg-gray-800"}`}>
            <p className="font-semibold text-indigo-800 dark:text-white">Python</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03, boxShadow: "0px 8px 24px rgba(0,0,0,0.15)" }} className={`rounded-2xl shadow-md p-6 hover:shadow-lg transition ${darkMode ? "bg-gray-700" : "bg-gray-800"}`}>
            <p className="font-semibold text-indigo-800 dark:text-white">Tailwind CSS</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03, boxShadow: "0px 8px 24px rgba(0,0,0,0.15)" }} className={`rounded-2xl shadow-md p-6 hover:shadow-lg transition ${darkMode ? "bg-gray-700" : "bg-gray-800"}`}>
            <p className="font-semibold text-indigo-800 dark:text-white">Framer Motion</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03, boxShadow: "0px 8px 24px rgba(0,0,0,0.15)" }} className={`rounded-2xl shadow-md p-6 hover:shadow-lg transition ${darkMode ? "bg-gray-700" : "bg-gray-800"}`}>
            <p className="font-semibold text-indigo-800 dark:text-white">HTML & CSS</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03, boxShadow: "0px 8px 24px rgba(0,0,0,0.15)" }} className={`rounded-2xl shadow-md p-6 hover:shadow-lg transition ${darkMode ? "bg-gray-700" : "bg-gray-800"}`}>
            <p className="font-semibold text-indigo-800 dark:text-white">JavaScript (ES6+)</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03, boxShadow: "0px 8px 24px rgba(0,0,0,0.15)" }} className={`rounded-2xl shadow-md p-6 hover:shadow-lg transition ${darkMode ? "bg-gray-700" : "bg-gray-800"}`}>
            <p className="font-semibold text-indigo-800 dark:text-white">Git & GitHub</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact */}
      <motion.section 
        className="p-10 text-center bg-gray-100 dark:bg-gray-900"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h3 className="text-2xl font-bold mb-4 text-indigo-400">Let’s Connect</h3>
        <p className="mb-6 text-indigo-800 dark:text-gray-300">I’m open to collaborations and internship opportunities.</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a href="mailto:mohamed.abdelrazek.rezk@gmail.com" className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">Email</a>
          <a href="https://github.com/OmegasHyper" target="_blank" className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition">GitHub</a>
          <a href="https://www.linkedin.com/in/mohamed-abdelrazek-a3b342298/" target="_blank" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">LinkedIn</a>
          <a href="/Mohamed-Abdelrazek-CV.pdf" download className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">Download CV</a>
        </div>
      </motion.section>
    </div>
  );
}
