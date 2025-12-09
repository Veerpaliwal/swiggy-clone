import React, { useEffect, useState, useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Foods() {
  const [foods, setFoods] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    fetch("http://localhost:5000/foods")
      .then(res => res.json())
      .then(data => setFoods(data))
      .catch(err => console.log("Error:", err));
  }, []);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -300,
      behavior: "smooth"
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 300,
      behavior: "smooth"
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Heading + Arrows */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-gray-800">What's on your mind?</h2>

        <div className="flex gap-3">
          <div 
            onClick={scrollLeft}
            className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300 transition"
          >
            <FaArrowLeft className="text-gray-700" />
          </div>

          <div 
            onClick={scrollRight}
            className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300 transition"
          >
            <FaArrowRight className="text-gray-700" />
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Section */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-10 pb-6 scrollbar-hide scroll-smooth"
      >
        {foods.map((food) => (
          <div 
            key={food.id} 
            className="flex-shrink-0 text-center min-w-[140px] md:min-w-[180px]"
          >
            <img
              src={food.image}
              alt={food.name}
              className="w-36 h-36 md:w-44 md:h-44 object-contain hover:scale-110 transition duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
