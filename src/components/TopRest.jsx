import { useState, useEffect } from 'react';

function App() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch("/restaurantData.json")        
      .then(res => res.json())
      .then(data => setRestaurants(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Discover best restaurants on Dineout</h1>
      
      <div className="flex overflow-x-auto gap-6 pb-4 no-scrollbar">
        {restaurants.map((res) => (
          <div key={res.id} className="w-80 flex-shrink-0 bg-white rounded-xl shadow-md overflow-hidden">
            <img src={res.image} alt={res.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-lg truncate">{res.title}</h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="bg-green-600 text-white px-2 py-1 rounded text-sm flex items-center">
                  ⭐ {res.rating}
                </span>
                <span className="text-sm text-gray-600">{res.totalRatings}</span>
              </div>
              <p className="text-gray-600 text-sm mt-1">{res.cuisine}</p>
              <p className="text-gray-500 text-sm">{res.location} • {res.distance}</p>
              
              <div className="mt-3 flex items-center justify-between">
                <p className="font-semibold">₹{res.costForTwo} for two</p>
                <p className="text-sm text-gray-500">{res.deliveryTime}</p>
              </div>

              {res.offer && (
                <div className={`mt-3 px-3 py-2 rounded-md text-sm font-medium ${
                  res.offer.includes("Flat") || res.offer.includes("₹") 
                    ? "bg-green-100 text-green-800" 
                    : "bg-cyan-50 text-cyan-800"
                }`}>
                  {res.offer} {res.extraOffers && <span className="ml-1">{res.extraOffers}</span>}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;