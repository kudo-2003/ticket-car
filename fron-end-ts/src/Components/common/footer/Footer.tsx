import React from "react";
import "./footer_css/Footer.css"; // Import CSS for styling

// Define props type
interface FooterProps {
  year: number;
  companyName: string;
}

const Footer: React.FC<FooterProps> = ({ year, companyName }) => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo */}
        <div className="footer-logo">
          <img src="/logo.png" alt={`${companyName} Logo`} />
        </div>

        {/* Thông tin công ty */}
        <div className="footer-info">
          <p>© {year} {companyName} - Đặt vé xe khách nhanh chóng & tiện lợi.</p>
          <p>
            <i className="fas fa-map-marker-alt"></i> Địa chỉ: 123 Đường ABC, Quận XYZ, Thành phố Hồ Chí Minh
          </p>
          <p>
            <i className="fas fa-envelope"></i> Email: support@{companyName.toLowerCase().replace(/\s+/g, "")}.com
          </p>
          <p>
            <i className="fas fa-phone"></i> Hotline: 1900 123 456
          </p>
        </div>

        {/* Liên kết mạng xã hội */}
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i> Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i> Twitter
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i> Instagram
          </a>
        </div>

        {/* Liên kết bổ sung */}
        <div className="footer-links">
          <a href="/privacy-policy">Chính sách bảo mật</a>
          <a href="/terms-of-service">Điều khoản sử dụng</a>
          <a href="/faq">Câu hỏi thường gặp</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;