import React from "react";
import "../../Styles/home.css";

const Home: React.FC = () => {
  const images: { [key: string]: string } = {
    "New York": require("../../images/home/newyork.jpg"),
    Paris: require("../../images/home/paris.jpg"),
    Tokyo: require("../../images/home/tokyo.jpg"),
    London: require("../../images/home/london.jpg"),
  };

  return (
    <div className="home">
      {/* Header Section */}
      <header className="header">
        <h1>Find & Book Your Trip</h1>
        <div className="search-bar">
          <input type="text" placeholder="From" />
          <input type="text" placeholder="To" />
          <input type="date" placeholder="Depart" />
          <button>Search</button>
        </div>
      </header>

      {/* Popular Destinations Section */}
      <section className="popular-destinations">
        <h2>Popular Destinations</h2>
        <div className="destinations">
          {["New York", "Paris", "Tokyo", "London"].map((city, index) => (
            <div key={index} className="destination-card">
              <img src={images[city]} alt={city} />
              <p>{city}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Best Deals Section */}
      <section className="best-deals">
        <h2>Best Deals</h2>
        <div className="deals">
          {[
            { route: "New York to Los Angeles", price: "$129" },
            { route: "Paris to Rome", price: "$89" },
            { route: "London to Barcelona", price: "$105" },
          ].map((deal, index) => (
            <div key={index} className="deal-card">
              <p>{deal.route}</p>
              <h3>{deal.price}</h3>
              <button>View deal</button>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <h2>Why Choose Us</h2>
        <div className="features">
          {[
            { title: "Best Prices", description: "Lorem ipsum aguis amet." },
            { title: "24/7 support", description: "Lorem ipsum dolor sit." },
            { title: "Secure Booking", description: "Lorem ipsum d'olor amet." },
          ].map((feature, index) => (
            <div key={index} className="feature-card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© Funy Choose</p>
      </footer>
    </div>
  );
};

export default Home;
