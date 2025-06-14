import { Link } from "react-router-dom"; // Optional if using React Router

export default function NotFound404() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white text-center px-6">
      <div className="text-6xl mb-6 text-orange-400">⚠️</div>
      <h1 className="text-6xl font-bold text-gray-900">404</h1>
      <h2 className="text-2xl mt-2 font-semibold text-gray-800">
        Page Not Found
      </h2>
      <p className="mt-4 text-gray-500 max-w-xl">
        We’re sorry, the page you have looked for does not exist in our website!
        Maybe go to our home page or try to use a search?
      </p>
      <Link
        to="/"
        className="mt-6 inline-block px-8 py-3 bg-cyan-500 text-white font-semibold rounded-full hover:bg-cyan-600 transition"
      >
        Go Back To Home
      </Link>
    </div>
  );
}
