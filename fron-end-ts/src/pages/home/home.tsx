import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/navbar/Navbar";
import Footer from "../../Components/common/footer/Footer";

import "./home_css/home.css";

const Home: React.FC<{ setCurrentPage: (page: string) => void }> = ({ setCurrentPage }) => {
  const navigate = useNavigate();
  const destinations = [
    {
      route: "Đà Nẵng - Đà Lạt",
      image: require("../../images/home/danang-dalat.jpg"),
      price: "430.000 – 700.000 VND",
    },
    {
      route: "TP. Hồ Chí Minh - Nha Trang",
      image: require("../../images/home/hcm-nhatrang.jpg"),
      price: "180.000 – 500.000 VND",
    },
    {
      route: "Hà Nội - Hải Phòng",
      image: require("../../images/home/hanoi-haiphong.jpg"),
      price: "100.000 – 150.000 VND",
    },
    {
      route: "TP. Hồ Chí Minh - Cần Thơ",
      image: require("../../images/home/hcm-cantho.jpg"),
      price: "130.000 – 180.000 VND",
    },
    {
      route: "Đà Nẵng - Nha Trang",
      image: require("../../images/home/danang-nhatrang.jpg"),
      price: "300.000 – 500.000 VND",
    },
    {
      route: "Hà Nội - Đà Nẵng",
      image: require("../../images/home/hanoi-danang.jpg"),
      price: "350.000 – 600.000 VND",
    },
    {
      route: "TP. Hồ Chí Minh - Đà Lạt",
      image: require("../../images/home/hcm-dalat.jpg"),
      price: "200.000 – 350.000 VND",
    },
    {
      route: "Hà Nội - Ninh Bình",
      image: require("../../images/home/hanoi-ninhbinh.jpg"),
      price: "80.000 – 120.000 VND",
    },
    {
      route: "TP. Hồ Chí Minh - Phan Thiết",
      image: require("../../images/home/hcm-phanthiet.jpg"),
      price: "150.000 – 250.000 VND",
    },
    {
      route: "Hà Nội - Sapa",
      image: require("../../images/home/hanoi-sapa.jpg"),
      price: "250.000 – 400.000 VND",
    },
  ];
  

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
    {
      name: "Bửu Vi Vu",
      title: "Travel TikToker",
      text: "Tôi thường chọn đặt vé tại ticket car mỗi khi có lịch trình đi tỉnh.",
      img: require("../../images/home/customer2.jpg"),
    },
    {
      name: "Bửu Vi Vu",
      title: "Travel TikToker",
      text: "Tôi thường chọn đặt vé tại ticket car mỗi khi có lịch trình đi tỉnh.",
      img: require("../../images/home/customer2.jpg"),
    },
  ];

  const promotions = [
    {
      title: "Sale Lễ, Giảm mê",
      description: "12h - 14h Thứ 3 - Flash Sale đến 50%",
      image: require("../../images/home/sale50.jpg"),
    },
    {
      title: "XEHAIPHONG - Giảm 50%",
      description: "Giảm 50% khi đặt xe limousine Hải Phòng cho khách hàng lần đầu tiên đặt dịch vụ tại Ticket Car",
      image: require("../../images/home/hp50.jpg"),
    },
    {
      title: "CHAOHAIPHONG - Giảm 25%",
      description: "Giảm 25% khi đặt xe đi Hải Phòng cho khách hàng lần đầu tiên đặt dịch vụ tại Ticket Car",
      image: require("../../images/home/hp25.jpg"),
    },
    {
      title: "CHAOHAIPHONG - Giảm 25%",
      description: "Giảm 25% khi đặt xe đi Hải Phòng cho khách hàng lần đầu tiên đặt dịch vụ tại Ticket Car",
      image: require("../../images/home/hp25.jpg"),
    },
    {
      title: "CHAOHAIPHONG - Giảm 25%",
      description: "Giảm 25% khi đặt xe đi Hải Phòng cho khách hàng lần đầu tiên đặt dịch vụ tại Ticket Car",
      image: require("../../images/home/hp25.jpg"),
    },
  ];
  

  const features = [
    { title: "Best Prices", description: "Luôn có giá tốt nhất cho mọi tuyến đường." },
    { title: "24/7 Support", description: "Hỗ trợ bạn mọi lúc, mọi nơi." },
    { title: "Secure Booking", description: "Thanh toán an toàn và bảo mật." },
    { title: "Trusted by Thousands", description: "Hơn 10.000+ người tin dùng." },
    { title: "Flexible Options", description: "Dễ dàng đổi hoặc huỷ vé." },
  ];

  const handleCardClick = () => navigate("/busTicket");

  const scrollSlider = (direction: number) => {
    const slider = document.querySelector('.promotion-slider') as HTMLElement;
    if (slider) {
      const scrollAmount = slider.offsetWidth / 2; // Cuộn nửa chiều rộng slider
      slider.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
    }
  };

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
  <h2>Tuyến đường phổ biến</h2>
  <div className="destinations">
    {destinations.map((item, idx) => (
      <div key={idx} className="destination-card">
        <img src={item.image} alt={item.route} />
        <p>{item.route}</p>
        <span className="destination-price">{item.price}</span>
      </div>
    ))}
  </div>
</section>

<section className="highlight-promotions">
  <h2>Ưu đãi nổi bật</h2>
  <div className="promotion-slider-container">
    <button className="slider-btn prev-btn" onClick={() => scrollSlider(-1)}>❮</button>
    <div className="promotion-slider">
      {promotions.map((promo, idx) => (
        <div className="promotion-card" key={idx}>
          <img src={promo.image} alt={promo.title} />
          <div className="promotion-info">
            <h3>{promo.title}</h3>
            <p>{promo.description}</p>
          </div>
        </div>
      ))}
    </div>
    <button className="slider-btn next-btn" onClick={() => scrollSlider(1)}>❯</button>
  </div>
</section>


      {/* Vì Sao Chọn Chúng Tôi */}
      <section className="why-choose-us">
        <h2>Vì Sao Chọn Chúng Tôi?</h2>
        <div className="features">
          {features.map((f, idx) => (
            <div key={idx} className="feature-card">
              <i className={`feature-icon fa ${idx === 0 ? 'fa-tag' : idx === 1 ? 'fa-headset' : idx === 2 ? 'fa-lock' : idx === 3 ? 'fa-users' : 'fa-exchange-alt'}`}></i>
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

      {/* Nền tảng kết nối */}
      <section className="platform-features">
        <h2>Nền tảng kết nối người</h2>
        <div className="features-grid">
          <div className="feature-item">
            <i className="fa fa-bus"></i>
            <h3>2000+ nhà xe chất lượng cao</h3>
            <p>5000+ tuyến đường trên toàn quốc, chủ động và đa dạng lựa chọn.</p>
          </div>
          <div className="feature-item">
            <i className="fa fa-clock"></i>
            <h3>Đặt vé dễ dàng</h3>
            <p>Đặt vé chỉ với 60s. Chọn xe yêu thích cực nhanh và thuận tiện.</p>
          </div>
          <div className="feature-item">
            <i className="fa fa-check-circle"></i>
            <h3>Chắc chắn có chỗ</h3>
            <p>Hoàn ngay 150% nếu nhà xe không cung cấp dịch vụ vận chuyển, mang đến hành trình trọn vẹn.</p>
          </div>
          <div className="feature-item">
            <i className="fa fa-gift"></i>
            <h3>Nhiều ưu đãi</h3>
            <p>Hàng ngàn ưu đãi cực chất độc quyền tại Ticket Car.</p>
          </div>
        </div>
      </section>

      {/* Thêm phần Được nhắc đến trên */}
      <section className="media-mentions">
  <h2>Ticket Car đã được nhắc đến trên</h2>
  <div className="media-logos">
    <img src={require("../../images/home/vtv1.png")} alt="VTV1" />
    <img  src={require("../../images/home/vtv2.png")} alt="VTV2" />
    <img  src={require("../../images/home/baomoi.png")} alt="Báo Mới" />
    <img  src={require("../../images/home/dantri.jpg")} alt="Dân Trí" />
    <img  src={require("../../images/home/tuoitre.png")} alt="Tuổi Trẻ" />
    <img  src={require("../../images/home/fox-news-top.jpg")} alt="FOX NEWS" />
  </div>
</section>
 
      <Footer year={2025} companyName="Ticket Car" />
    </div>
  );
};

export default Home;
