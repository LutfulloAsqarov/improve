import React from "react";
import footerLogo from "../../../assets/icons/footerLogo.png";
import footerIcon1 from "../../../assets/icons/footerIcon1.svg";
import footerIcon2 from "../../../assets/icons/footerIcon2.svg";
import shop from "../../../assets/icons/shop.svg";
import web from "../../../assets/icons/web.svg";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__top__left">
            <div className="footer__logo">
              <img width={160} src={footerLogo} alt="" />
            </div>
            <p className="footer__desc">
              Biz sizning biznesingizni oldinga siljitish uchun tajriba va
              yordam beramiz.
            </p>
            <form className="footer__forms">
              <input type="text" placeholder="Email kiriting" />
              <button className="footer__btn">Boshlash</button>
            </form>
            <div className="footer__icons">
              <img src={footerIcon2} alt="" />
              <img src={footerIcon1} alt="" />
            </div>
          </div>
          <div className="footer__right">
            <h3 className="footer__title">Keling, ajoyib narsani boshlaylik</h3>
            <p className="footer__desc">
              Bizning IT-mutaxassislar jamoasi siz bilan uchrashishni va
              biznesingizga moslashtirilgan qimmatli tushunchalarni taqdim
              etishni intiqlik bilan kutmoqda.
            </p>
            <div className="footer__btn">Hoziroq uchrashuv belgilang</div>
            <div className="footer__statistics">
              <div className="footer__statistic">
                <h4 className="footer__subtitle">
                  <span>2</span>daqiqa
                </h4>
                <h4 className="footer__info">Javob berish vaqti</h4>
              </div>
              <div className="footer__statistic">
                <h4 className="footer__subtitle">
                  <span>99%</span>
                </h4>
                <h4 className="footer__info">Mijozlarning qoniqishi</h4>
              </div>
              <div className="footer__statistic">
                <h4 className="footer__subtitle">
                  <span>22+</span> yil
                </h4>
                <h4 className="footer__info">Dala tajribasi</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__line"></div>
        <div className="footer__middle">
          <div className="footer__middle__left">
            <ul className="footer__list">
              <li className="footer__item footer__item__title">Xizmatlar</li>
              <li className="footer__item">IT support</li>
              <li className="footer__item">Web Design</li>
              <li className="footer__item">Development</li>
              <li className="footer__item">Cloud Things</li>
              <li className="footer__item">E-Commerce</li>
              <li className="footer__item">CRM Solutions</li>
            </ul>
            <ul className="footer__list">
              <li className="footer__item footer__item__title">Kompaniya</li>
              <li className="footer__item">Blog</li>
              <li className="footer__item">About Us</li>
              <li className="footer__item">Partners</li>
              <li className="footer__item">Careers</li>
              <li className="footer__item">Events</li>
              <li className="footer__item">Team</li>
            </ul>
            <ul className="footer__list">
              <li className="footer__item footer__item__title">Mahsulotlar</li>
              <li className="footer__item">Case Studio</li>
              <li className="footer__item">Our Pricing</li>
              <li className="footer__item">Partners</li>
              <li className="footer__item">Careers</li>
              <li className="footer__item">Events</li>
              <li className="footer__item">Team</li>
            </ul>
            <ul className="footer__list">
              <li className="footer__item footer__item__title">Mahsulotlar</li>
              <li className="footer__item">Case Studio</li>
              <li className="footer__item">Our Pricing</li>
              <li className="footer__item">Partners</li>
              <li className="footer__item">Careers</li>
              <li className="footer__item">Events</li>
              <li className="footer__item">Team</li>
            </ul>
          </div>
          <div className="footer__middle__right">
            <div className="footer__infos">
              <h3>Telefon raqam</h3>
              <ul>
                <li>
                  <a href="tel:+998 937220724">+998 937220724</a>
                </li>
                <li>
                  <a href="tel:+998 995992220">+998 995992220</a>
                </li>
              </ul>
            </div>
            <div className="footer__infos">
              <h3>Pochta manzili</h3>
              <ul>
                <li>
                  <a href="email:faxriyor2410@gmail.com">
                    faxriyor2410@gmail.com
                  </a>
                </li>
                <li>
                  <a href="email:shodiyorxonabdivoyitov@gmail.com">
                    shodiyorxonabdivoyitov@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__line footer__line-bottom"></div>
        <div className="footer__bottom">
          <div className="footer__bottom__icons">
            <FacebookOutlinedIcon />
            <TwitterIcon />
            <TelegramIcon />
            <InstagramIcon />
          </div>
          <p className="footer__bottom__desc">
            improve tomonidan himoyalangan, 2025
          </p>
        </div>
      </div>
      <div className="footer__back"></div>
    </div>
  );
};

export default Footer;
