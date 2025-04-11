import React from "react";
import "../../Styles/home.css";

const Home: React.FC = () => {
  const images: { [key: string]: string } = {
    "New York": require("../../images/home/newyork.jpg"),
    Paris: require("../../images/home/paris.jpg"),
    Tokyo: require("../../images/home/tokyo.jpg"),
    London: require("../../images/home/london.jpg"),
  };

  const testimonials = [
    {
      name: "Chị Tú Ngô",
      title: "YOLA Co-Founder",
      text: "ticket car là ứng dụng đầu tiên tôi nghĩ tới khi cần đi lại bằng xe khách.",
      img: require("../../images/home/customer1.jpg"),
    },
    {
      name: "Bửu Vi Vu",
      title: "Travel TikToker",
      text: "Tôi thường chọn đặt vé tại ticket car mỗi khi có lịch trình đi tỉnh.",
      img: require("../../images/home/customer2.jpg"),
    },
  ];

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
            { title: "Trusted by Thousands", description: "Used by 10000+ happy travelers." },
            { title: "Flexible Options", description: "Change or cancel with ease." },
          ].map((feature, index) => (
            <div key={index} className="feature-card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-list">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <img
                src={testimonial.img}
                alt={testimonial.name}
                className="testimonial-avatar"
              />
              <h4>{testimonial.name}</h4>
              <small>{testimonial.title}</small>
              <p>"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Experiences Section */}
      <section className="experiences">
        <h2>Featured Experiences</h2>
        <div className="experience-list">
          {[
            { title: "Ha Long Bay Cruise", img: require("../../images/home/halongbay.jpg"), desc: "Sail through limestone islands in Ha Long." },
            { title: "Sa Pa Trekking", img: require("../../images/home/sapa.jpg"), desc: "Explore the mountain trails of Sa Pa." },
          ].map((exp, index) => (
            <div key={index} className="experience-card">
              <img src={exp.img} alt={exp.title} />
              <h4>{exp.title}</h4>
              <p>{exp.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Travel Blog Section */}
      <section className="travel-blog">
        <h2>Latest Travel Tips</h2>
        <div className="blog-list">
          {[
            { title: "5 Tips for First-Time Flyers", date: "April 2025" },
            { title: "Top 10 Things to Do in Paris", date: "March 2025" },
          ].map((blog, index) => (
            <div key={index} className="blog-card">
              <h4>{blog.title}</h4>
              <small>{blog.date}</small>
              <button>Read More</button>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <h2>Stay Updated!</h2>
        <p>Subscribe to receive our latest deals and tips.</p>
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </section>

      {/* Social Media Section */}
      <section className="social-media">
        <h2>Connect With Us</h2>
        <div className="social-icons">
          <a href="https://facebook.com">Facebook</a>
          <a href="https://instagram.com">Instagram</a>
          <a href="https://tiktok.com">TikTok</a>
        </div>
      </section>

      {/* App Download Section */}
      <section className="app-download">
        <h2>Get the App</h2>
        <p>Book trips faster with our app!</p>
        <div className="download-buttons">
          <button>Download on App Store</button>
          <button>Get it on Google Play</button>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners">
        <h2>As Featured On</h2>
        <div className="partner-logos">
          {["VnExpress", "VTV", "Dân Trí", "Tuổi Trẻ", "FBNC"].map((media, index) => (
            <span key={index} className="partner-logo">{media}</span>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© Funy Choose - All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
