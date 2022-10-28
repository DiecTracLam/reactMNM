import React from "react";

const Footer = (props) => {
  return (
    <footer className="footer ">
      <div className="grid">
        <div className="grid__row">
          <div className="grid__column-2-4 ">
            <h3 className="footer__heading ">Chăm sóc khách hàng</h3>
            <ul className="footer__list">
              <li className="footer_item">
                <a href="cskh.html" className="footer_item__link">
                  Trung tâm trợ giúp
                </a>
              </li>
              <li className="footer_item">
                <a href="cskh.html" className="footer_item__link">
                  Bảo hành sản phẩm
                </a>
              </li>
              <li className="footer_item">
                <a href="cskh.html" className="footer_item__link">
                  Hướng dẫn mua hàng
                </a>
              </li>
            </ul>
          </div>
          <div className="grid__column-2-4">
            <h3 className="footer__heading">Chi nhánh cửa hàng</h3>
            <ul className="footer__list">
              <li className="footer_item">
                <a href="Chinhanh_3.html" className="footer_item__link">
                  Thủ Đức
                </a>
              </li>
              <li className="footer_item">
                <a href="Chinhanh_1.html" className="footer_item__link">
                  Bình Tân
                </a>
              </li>
              <li className="footer_item">
                <a href="Chinhanh_2.html" className="footer_item__link">
                  Vĩnh Cửu
                </a>
              </li>
            </ul>
          </div>
          <div className="grid__column-2-4">
            <h3 className="footer__heading">Tham khảo</h3>
            <ul className="footer__list">
              <li className="footer_item">
                <a href="thamkhao.html" className="footer_item__link">
                  Giới thiệu
                </a>
              </li>
              <li className="footer_item">
                <a href="thamkhao.html" className="footer_item__link">
                  Điều khoản
                </a>
              </li>
              <li className="footer_item">
                <a href="thamkhao.html" className="footer_item__link">
                  Tuyển dụng
                </a>
              </li>
            </ul>
          </div>
          <div className="grid__column-2-4">
            <h3 className="footer__heading">Theo dõi</h3>
            <ul className="footer__list">
              <li className="footer_item">
                <a href="http://facebook.com" className="footer_item__link">
                  <img src={require("../../assets/img/fb.png")} alt="" width="20" />
                  Facebook
                </a>
              </li>
              <li className="footer_item">
                <a href="https://www.instagram.com/" className="footer_item__link">
                  <img src={require("../../assets/img/174855.png")} alt="" width="20" />
                  Instagram
                </a>
              </li>
              <li className="footer_item">
                <a href="http://tiktok.com" className="footer_item__link">
                  <img
                    src={require("../../assets/img/tiktok-icon-logo-1CB398A1BD-seeklogo.com.png")}
                    alt=""
                    width="20"
                  />
                  TikTok
                </a>
              </li>
            </ul>
          </div>
          <div className="grid__column-2-4">
            <h3 className="footer__heading">Chứng nhận</h3>
            <img className="img-cup" src={require("../../assets/img/cup.png")} alt="" />
          </div>
        </div>
      </div>
      <div>
        <p className="footer__text">
          @2022-Bản quyền của nhóm sinh viên trường Đại học Sài Gòn{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
