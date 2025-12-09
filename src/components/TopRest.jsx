import React, { useEffect, useState } from 'react'
import { FaArrowLeft, FaArrowRight  } from "react-icons/fa";

export default function TopRest() {
   

  return (
    
         <div className="max-w-7xl mx-auto px-4 py-10">
              {/* Heading + Arrows */}
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-gray-800">Discover best restaurants on Dineout</h2>
        
                <div className="flex gap-3">
                  <div 
                   
                    className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300 transition"
                  >
                    <FaArrowLeft className="text-gray-700" />
                  </div>
        
                  <div 
                    
                    className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300 transition"
                  >
                    <FaArrowRight className="text-gray-700" />
                  </div>
                </div>
              </div>
        </div>
    
  )
}
