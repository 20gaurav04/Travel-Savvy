import React, { useState } from "react";

<<<<<<< HEAD
import airTransport from "./assets/air.jpg";
import railTransport from "./assets/rail.jpg";
import roadTransport from "./assets/road.jpg";
=======
const Section2 = () => {
  const [selectedMode, setSelectedMode] = useState(null);
  const [selectedBudget, setSelectedBudget] = useState(null); // State for budget category
>>>>>>> 98f0a53ad2e8131bb6a781291b89fff7eefdaffb

const ModesOfTransport = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedTransport, setSelectedTransport] = useState("");
  const [showResults, setShowResults] = useState(false);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleTransportSelect = (mode) => {
    setSelectedTransport(mode);
    setShowResults(false);
  };

  const handleSearch = () => {
    if (selectedTransport && selectedCategory) {
      setShowResults(true);
    } else {
      alert("Please select both transport mode and category!");
    }
  };

  const renderResults = () => {
    if (selectedTransport === "Air") {
      return (
        <ul className="list-disc pl-5 text-left">
          <li>Flight 101 - New York to London</li>
          <li>Flight 205 - Delhi to Dubai</li>
          <li>Flight 330 - Tokyo to Sydney</li>
        </ul>
      );
    } else if (selectedTransport === "Rail") {
      return (
        <ul className="list-disc pl-5 text-left">
          <li>Express Train A - Mumbai to Goa</li>
          <li>Superfast B - Paris to Berlin</li>
          <li>Regional C - New York to Boston</li>
        </ul>
      );
    } else if (selectedTransport === "Road") {
      return (
        <ul className="list-disc pl-5 text-left">
          <li>Bus 500 - Los Angeles to San Francisco</li>
          <li>Volvo AC - Delhi to Manali</li>
          <li>Night Coach - Rome to Venice</li>
        </ul>
      );
    } else {
      return <p>No results available.</p>;
    }
  };

  const handleBudgetClick = (budget) => {
    setSelectedBudget(budget);
  };

  return (
    <div id="bookings" className="flex flex-col items-center justify-center min-h-screen bg-orange-50 p-6">
      <h1 className="text-3xl font-bold mb-8 text-orange-600">Modes of Transport</h1>

      {/* Transport Images */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div
          onClick={() => handleTransportSelect("Air")}
          className={`cursor-pointer transform hover:scale-105 transition duration-300 rounded-lg overflow-hidden shadow ${
            selectedTransport === "Air" ? "ring-4 ring-orange-500" : ""
          }`}
        >
          <img src={airTransport} alt="Air Transport" className="h-40 w-40 object-cover" />
          <p className="text-center mt-2 font-medium text-orange-700">Air</p>
        </div>

        <div
          onClick={() => handleTransportSelect("Rail")}
          className={`cursor-pointer transform hover:scale-105 transition duration-300 rounded-lg overflow-hidden shadow ${
            selectedTransport === "Rail" ? "ring-4 ring-orange-500" : ""
          }`}
        >
          <img src={railTransport} alt="Rail Transport" className="h-40 w-40 object-cover" />
          <p className="text-center mt-2 font-medium text-orange-700">Rail</p>
        </div>

<<<<<<< HEAD
        <div
          onClick={() => handleTransportSelect("Road")}
          className={`cursor-pointer transform hover:scale-105 transition duration-300 rounded-lg overflow-hidden shadow ${
            selectedTransport === "Road" ? "ring-4 ring-orange-500" : ""
          }`}
        >
          <img src={roadTransport} alt="Road Transport" className="h-40 w-40 object-cover" />
          <p className="text-center mt-2 font-medium text-orange-700">Road</p>
        </div>
      </div>

      {/* Budget / Special Category Buttons */}
      <div className="flex gap-6 mb-6">
        <button
          onClick={() => handleCategorySelect("Budget")}
          className={`px-6 py-3 rounded-lg font-semibold ${
            selectedCategory === "Budget" ? "bg-orange-500 text-white" : "bg-white border border-orange-400 text-orange-500"
          }`}
        >
          Budget Category
        </button>
=======
      {/* Date Inputs */}
      <div className="flex flex-wrap gap-4 mb-4">
        <input
          type="date"
          className="w-full sm:flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-purple-600"
        />
        <input
          type="date"
          className="w-full sm:flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-purple-600"
        />
      </div>

      {/* Modes of Transport with Active State */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-4">
        <span className="text-gray-600">Modes of Transport:</span>
        <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
          {["Road", "Air", "Rail"].map((mode) => (
            <button
              key={mode}
              className={`px-3 py-1 text-sm rounded-full border ${
                selectedMode === mode ? "bg-orange-400 text-white" : "border-gray-300 text-gray-700"
              }`}
              onClick={() => handleModeClick(mode)}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>

      {/* Budget Category with Active State */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-4">
        <span className="text-gray-600">Budget Category:</span>
        <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
          {["Economy", "Standard", "Luxury"].map((budget) => (
            <button
              key={budget}
              className={`px-3 py-1 text-sm rounded-full border ${
                selectedBudget === budget ? "bg-orange-400 text-white" : "border-gray-300 text-gray-700"
              }`}
              onClick={() => handleBudgetClick(budget)}
            >
              {budget}
            </button>
          ))}
        </div>
      </div>
>>>>>>> 98f0a53ad2e8131bb6a781291b89fff7eefdaffb

        <button
          onClick={() => handleCategorySelect("Special")}
          className={`px-6 py-3 rounded-lg font-semibold ${
            selectedCategory === "Special" ? "bg-orange-500 text-white" : "bg-white border border-orange-400 text-orange-500"
          }`}
        >
          Special Offers
        </button>
      </div>

      {/* Search Button */}
      <button
        onClick={handleSearch}
        className="mt-4 px-8 py-3 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition"
      >
        Search
      </button>

      {/* Show Selected */}
      <div className="mt-6 text-xl font-bold text-center text-orange-600">
        {selectedTransport && <div>Selected Transport: {selectedTransport}</div>}
        {selectedCategory && <div>Selected Category: {selectedCategory}</div>}
      </div>

      {/* Search Results */}
      {showResults && (
        <div className="mt-8 p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-orange-600">Available Options:</h2>
          {renderResults()}
        </div>
      )}
    </div>
  );
};

<<<<<<< HEAD
export default ModesOfTransport;
=======
export default Section2;
>>>>>>> 98f0a53ad2e8131bb6a781291b89fff7eefdaffb
