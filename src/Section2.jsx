import React, { useState } from 'react';

const Section2 = () => {
  const [selectedMode, setSelectedMode] = useState(null);

  const handleModeClick = (mode) => {
    setSelectedMode(mode);
  };

  return (
    <div id="bookings"className="bg-white p-6 rounded-lg shadow-lg max-w-8xl mx-auto mt-8">
      {/* Centered Tagline */}
      <div className="text-center mb-4">
        <h2 className="text-4xl font-bold">Your Next Adventure Awaits You!</h2>
        <span className="text-red-600 font-bold text-2xl">Earn Rewards up to 50%</span>
      </div>

      {/* Trip Type Buttons */}
      <div className="flex items-center space-x-4 mb-4">
        <button className="px-4 py-2 rounded-full border border-orange-500 text-black font-semibold">
          One Way
        </button>
        <button className="px-4 py-2 rounded-full bg-orange-400 text-white font-semibold">
          Round Trip
        </button>
      </div>

      {/* Location Inputs */}
      <div className="flex flex-wrap gap-4 mb-4">
        <input
          type="text"
          placeholder="Your Current Location"
          className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-purple-600"
        />
        <input
          type="text"
          placeholder="Choose Destination"
          className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-purple-600"
        />
      </div>

      {/* Date Inputs */}
      <div className="flex flex-wrap gap-4 mb-4">
        <input
          type="date"
          placeholder="Departure Date"
          className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-purple-600"
        />
        <input
          type="date"
          placeholder="Return Date"
          className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-purple-600"
        />
      </div>

      {/* Modes of Transport with Active State */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-gray-600">Modes of Transport:</span>
        <div className="flex space-x-3">
          {['Road', 'Air', 'Rail'].map((mode) => (
            <button
              key={mode}
              className={`px-3 py-1 text-sm rounded-full border ${
                selectedMode === mode
                  ? 'bg-orange-400 text-white'
                  : 'border-gray-300 text-gray-700'
              }`}
              onClick={() => handleModeClick(mode)}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>

      {/* Budget Category */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-gray-600">Budget Category:</span>
        <div className="flex space-x-3">
          <button className="px-3 py-1 text-sm rounded-full border border-gray-300">Economy</button>
          <button className="px-3 py-1 text-sm rounded-full border border-gray-300">Standard</button>
          <button className="px-3 py-1 text-sm rounded-full border border-gray-300">Luxury</button>
        </div>
      </div>

      {/* Special Offers */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-gray-600">Special Offers:</span>
        <div className="flex space-x-3">
          <button className="px-3 py-1 text-sm rounded-full border border-gray-300">Student</button>
          <button className="px-3 py-1 text-sm rounded-full border border-gray-300">Senior Citizen</button>
          <button className="px-3 py-1 text-sm rounded-full border border-gray-300">Armed Forces</button>
        </div>
      </div>

      {/* Travellers, Class Selection, and Search Button */}
      <div className="flex items-center justify-between mb-4">
        <input
          type="number"
          min="1"
          placeholder="1 Traveller"
          className="px-4 py-3 w-32 rounded-lg border border-gray-300 focus:outline-none focus:border-purple-600"
        />
        <select className="px-4 py-3 w-40 rounded-lg border border-gray-300 focus:outline-none focus:border-purple-600">
          <option>Economy</option>
          <option>Business</option>
          <option>First Class</option>
        </select>
        <button className="px-6 py-3 rounded-lg bg-orange-500 text-white font-semibold">
          Search
        </button>
      </div>

      {/* Rewards Checkbox */}
      <div className="flex items-center space-x-2">
        <input type="checkbox" id="rewards" className="w-4 h-4 text-purple-600 rounded" />
        <label htmlFor="rewards" className="text-sm text-gray-700">
          Add rewards and save up to 50%
        </label>
      </div>
    </div>
  );
};

export default Section2;
