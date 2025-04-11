import React from 'react';
import travelImg from './assets/travelImg.jpg';

const Signup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signed up!');
  };

  return (
    <div id="sign" className="flex min-h-screen bg-gradient-to-br m-10 from-yellow-100 via-orange-50 to-yellow-200">
      {/* Left side with image and text */}
      <div className="w-1/2 hidden md:flex flex-col items-center justify-center bg-orange-100 p-10 rounded-r-3xl shadow-lg">
        <img
          src={travelImg} // Beach/travel image
          alt="Travel"
          className="rounded-2xl mb-6 w-72 h-72 object-cover shadow-lg"
        />
        <h2 className="text-3xl font-bold text-orange-500">Adventure Awaits!</h2>
        <p className="text-gray-600 text-center mt-4 px-8">
          Explore the world with us. Create your account and start your journey today.
        </p>
      </div>

      {/* Right side with signup form */}
      <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-10">
        <div className="bg-white p-8 rounded-2xl shadow-xl w-96 max-w-full">
          <h2 className="text-3xl font-bold text-orange-500 mb-2 text-center">Create Account</h2>
          <p className="text-gray-600 mb-6 text-center text-sm">Start your journey today</p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />

            <button
              type="submit"
              className="mt-4 bg-orange-400 hover:bg-orange-500 text-white font-semibold py-3 rounded-xl transition duration-300"
            >
              Sign Up
            </button>
          </form>

          <p className="text-xs text-gray-500 mt-6 text-center">
            Already have an account?{' '}
            <span className="text-orange-500 cursor-pointer hover:underline">Login</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
