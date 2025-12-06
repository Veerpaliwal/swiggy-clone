const http = require("http");

const foods = [
  { id: 1, name: "Burger",price: 129, image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Burger.png", path:"burger" },
  { id: 2, name: "Pizza", price: 249, image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pizza.png", path:"pizza"},
  { id: 3, name: "Fries", price: 79, image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Fries.png", path: "fries" },
  { id: 4, name: "Sandwich", price: 99, image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Sandwich.png", path: "sandwich" },
  { id: 5, name: "Pasta", price: 159, image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pasta.png", path: "pasta" },
  { id: 6, name: "Noodles", price: 149, image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Noodles.png", path: "noodles" },
  { id: 7, name: "Momos", price: 89, image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Momos.png", path: "momos" },
  { id: 8, name: "Biryani", price: 199, image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Biryani.png", path: "biryani" },
  { id: 9, name: "Chicken Roll", price: 129, image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Rolls.png", path: "chicken-roll" },
  { id: 10, name: "Paneer Tikka", price: 179, image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Paneer.png", path: "paneer-tikka" },
  { id: 11, name: "Dosa", price: 119, image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Dosa.png", path: "dosa" },
  { id: 12, name: "Idli", price: 69, image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Idli.png", path: "idli" },
  { id: 13, name: "Samosa", price: 25, image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Samosa.png", path: "samosa" },
  { id: 14, name: "Vada Pav", price: 35, image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Vada.png", path: "vada-pav" },
  { id: 15, name: "Chole Bhature", price: 149, image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Chole_Bhature.png", path: "chole-bhature" },
  { id: 16, name: "Pav Bhaji", price: 129, image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pav_Bhaji.png", path: "pav-bhaji" },
  { id: 17, name: "Fried Rice", price: 139, image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Fried_Rice.png", path: "fried-rice" },
  { id: 18, name: "Spring Roll", price: 99, image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Spring_Rolls.png", path: "spring-roll" },
  { id: 19, name: "Tandoori Chicken", price: 249, image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Chicken.png", path: "tandoori-chicken" },
  { id: 20, name: "Cold Coffee", price: 89, image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Coffee.png", path: "cold-coffee" }
];

const server = http.createServer((req, res) => {

  // YE SABSE PEHLE DAALO — CORS FIX 100%
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Preflight request (OPTIONS) ko handle karo
  if (req.method === "OPTIONS") {
    res.writeHead(200);
    res.end();
    return;
  }

  if (req.url === "/foods" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(foods));
    return;
  }

  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Route not found" }));
});

server.listen(5000, () => {
  console.log("Server chal raha hai → http://localhost:5000/foods");
});