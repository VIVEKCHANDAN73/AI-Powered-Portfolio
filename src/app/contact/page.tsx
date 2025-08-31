import { FaEnvelope, FaLinkedin, FaGithub, FaPhone, FaKaggle } from 'react-icons/fa';

export default function Contacts() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-6 grid gap-4 text-center">
        <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
        
        <a
          href="mailto:vivekchandan73@gmail.com"
          className="flex items-center justify-center gap-2 text-gray-700 hover:text-blue-600 transition"
        >
          <FaEnvelope /> vivekchandan73@gmail.com
        </a>

        <a
          href="https://www.linkedin.com/in/vivekchandan"
          target="_blank"
          className="flex items-center justify-center gap-2 text-gray-700 hover:text-blue-600 transition"
        >
          <FaLinkedin /> LinkedIn
        </a>

        <a
          href="https://github.com/yourusername"
          target="_blank"
          className="flex items-center justify-center gap-2 text-gray-700 hover:text-green-900 transition"
        >
          <FaGithub /> GitHub
        </a>

        <a
          href="https://www.kaggle.com/yourusername"
          target="_blank"
          className="flex items-center justify-center gap-2 text-gray-700 hover:text-purple-600 transition"
        >
          <FaKaggle /> Kaggle
        </a>

        <div className="flex items-center justify-center gap-2 text-gray-700">
          <FaPhone /> +91-7978609188
        </div>
      </div>
    </div>
  );
}
