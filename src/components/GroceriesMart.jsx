import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function GroceriesMart() {
  const [groceries, setGroceries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/groceriesData.json")  
      .then(res => res.json())
      .then(data => {
        setGroceries(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center py-10 text-gray-600">Loading groceries...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Heading + Arrows */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Shop groceries on Instamart</h2>

        <div className="flex gap-3">
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300 transition">
            <FaArrowLeft className="text-gray-700" />
          </div>
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300 transition">
            <FaArrowRight className="text-gray-700" />
          </div>
        </div>
      </div>

      {/* Groceries Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {groceries.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-medium text-gray-1000 line-clamp-2 text-center ">{item.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{item.unit || ''}</p>
              <div className="flex items-center justify-between mt-3">
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}