import Link from "next/link";
import { FaDownload, FaArrowLeft } from "react-icons/fa"; // Import Icons

export default function Resume() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4 py-10">
      {/* Title */}
      <h1 className="text-2xl text-orange-400 sm:text-4xl font-bold mb-6 text-center">My Resume</h1>

      {/* Resume PDF Viewer */}
      <div className="w-full max-w-3xl bg-gray-800 rounded-xl shadow-lg p-3 sm:p-4">
        <iframe
          src="files/mj-resume2025.pdf"
          className="w-full h-[350px] sm:h-[500px] md:h-[600px] rounded-lg"
        ></iframe>
      </div>

      {/* Buttons Section */}
      <div className="flex flex-col justify-center sm:flex-row gap-3 sm:gap-4 mt-6 w-full max-w-sm sm:max-w-none">
        {/* Download Resume Button */}
        <a
          href="/mj-resume2025.pdf"
          download
          className="flex items-center justify-center gap-2 px-5 py-3 text-md sm:text-lg font-semibold text-white bg-orange-500 rounded-2xl shadow-lg hover:bg-orange-600 transition-transform transform hover:scale-105 w-full sm:w-auto"
        >
          <FaDownload className="w-5 h-5 sm:w-6 sm:h-6" /> Download Resume
        </a>

        {/* Go Back Button */}
        <Link href="/">
          <button className="flex items-center justify-center gap-2 px-5 py-3 text-md sm:text-lg font-semibold text-white bg-gray-700 rounded-2xl shadow-lg hover:bg-gray-800 transition-transform transform hover:scale-105 w-full sm:w-auto">
            <FaArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" /> Go Back
          </button>
        </Link>
      </div>
    </div>
  );
}
