import { useTranslation } from "react-i18next";
import "../styles/components/Footer.scss";

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="footer">
      <div className="container">
        <h1>{t("Giant Join")}</h1>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfPlvCBGZnVjbzGPzV8eei-XjYZihbZdGkiy2_FViR-_EVEnA/viewform">
          <button>{t("Join Button Text")}</button>
        </a>
      </div>
      <div className="info">
        <div className="Location">
          <p>{t("Location")}</p>
          <strong>
            Göktürk Merkez, İstanbul Cd. No:3, 34077 Eyüpsultan/İstanbul,
            Türkiye
          </strong>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3003.1240632709323!2d28.889247776731327!3d41.17546117132762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab2efd52f489f%3A0xe7d088ae26b38280!2sHisar%20School!5e0!3m2!1sen!2str!4v1699703901148!5m2!1sen!2str"
              width="600"
              height="450"
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="Contact">
          <p>{t("Contact")}</p>
          <div className="info">
            <span>
              <strong>Phone: </strong>{" "}
              <a href="tel: +902123640000">+90 (212) 364 00 00</a>
            </span>
            <span>
              <strong>Email: </strong>{" "}
              <a href="mailto:hisarcs@hisarschool.k12.tr">
                hisarcs@hisarschool.k12.tr{" "}
              </a>
            </span>
          </div>
          <div className="Socials">
            <a
              className="instagram"
              href="https://www.instagram.com/hisarcs/"
            />
            <a className="twitter" href="https://twitter.com/HisarCS" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
