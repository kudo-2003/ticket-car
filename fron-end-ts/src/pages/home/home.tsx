import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/navbar/Navbar";
import Footer from "../../Components/common/footer/Footer";
import "./home_css/home.css";

const Home: React.FC<{ setCurrentPage: (page: string) => void }> = ({ setCurrentPage }) => {
  const navigate = useNavigate();

  const images = {
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

  const bestDeals = [
    { route: "New York to Los Angeles", price: "$129" },
    { route: "Paris to Rome", price: "$89" },
    { route: "London to Barcelona", price: "$105" },
  ];

  const features = [
    { title: "Best Prices", description: "Luôn có giá tốt nhất cho mọi tuyến đường." },
    { title: "24/7 Support", description: "Hỗ trợ bạn mọi lúc, mọi nơi." },
    { title: "Secure Booking", description: "Thanh toán an toàn và bảo mật." },
    { title: "Trusted by Thousands", description: "Hơn 10.000+ người tin dùng." },
    { title: "Flexible Options", description: "Dễ dàng đổi hoặc huỷ vé." },
  ];

  const experiences = [
    {
      title: "Ha Long Bay Cruise",
      img: require("../../images/home/halongbay.jpg"),
      desc: "Trải nghiệm du thuyền vịnh Hạ Long kỳ vĩ.",
    },
    {
      title: "Sa Pa Trekking",
      img: require("../../images/home/sapa.jpg"),
      desc: "Khám phá núi rừng Sa Pa tuyệt đẹp.",
    },
  ];

  const blogs = [
    { title: "5 Mẹo cho người bay lần đầu", date: "Tháng 4, 2025" },
    { title: "10 điều nhất định phải làm khi đến Paris", date: "Tháng 3, 2025" },
  ];

  const partners = ["VnExpress", "VTV", "Dân Trí", "Tuổi Trẻ", "FBNC"];

  const handleCardClick = () => navigate("/busTicket");

  return (
    <div className="home-page">
      <Navbar />

      {/* Header */}
      <header className="header">
  <h1>Tìm & Đặt Vé Xe Khách Uy Tín</h1>
  <div className="search-bar">
    <input type="text" placeholder="Điểm khởi hành" />
    <input type="text" placeholder="Điểm đến" />
    <input type="date" />
    <button onClick={handleCardClick}>Tìm chuyến</button>
  </div>
</header>


      {/* Popular Destinations */}
      <section className="popular-destinations">
        <h2>Điểm Đến Phổ Biến</h2>
        <div className="destinations">
          {Object.entries(images).map(([city, img], idx) => (
            <div key={idx} className="destination-card">
              <img src={img} alt={city} />
              <p>{city}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Best Deals */}
      <section className="best-deals">
        <h2>Ưu Đãi Tốt Nhất</h2>
        <div className="deals">
          {bestDeals.map((deal, idx) => (
            <div key={idx} className="deal-card">
              <p>{deal.route}</p>
              <h3>{deal.price}</h3>
              <button onClick={handleCardClick}>Xem chi tiết</button>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <h2>Vì Sao Chọn Chúng Tôi?</h2>
        <div className="features">
          {features.map((f, idx) => (
            <div key={idx} className="feature-card">
              <h3>{f.title}</h3>
              <p>{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>Khách Hàng Nói Gì</h2>
        <div className="testimonial-list">
          {testimonials.map((t, idx) => (
            <div key={idx} className="testimonial-card">
              <img src={t.img} alt={t.name} className="testimonial-avatar" />
              <h4>{t.name}</h4>
              <small>{t.title}</small>
              <p>"{t.text}"</p>
            </div>
          ))}
        </div>
      </section>
 
      <Footer year={2025} companyName="Ticket Car" />
    </div>
  );
};

export default Home;
