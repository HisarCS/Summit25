import { useTranslation } from "react-i18next";
import "../styles/components/Header.scss";

const Header = () => {
  const { t } = useTranslation();
  
  return (
    <div className="Header-Container">
      <div className="Header">
        <p className="super-text">{t("Super-Text")}</p>
        <h1 className="title">{t("Title")}</h1>
        <p className="description">{t("About Us")}</p>
        <div className="button-container">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSe8eUM2FBncGzakrb7gOQJQpvedOx9Q7MkMCgXNAaiyh1LjBA/viewform">
            <button className="button-one">{t("Join Button")}</button>
          </a>
          <button className="button-two" onClick={(e) => {
                  let anchor = document.getElementById("program");
                  e.preventDefault();
                  anchor &&
                    anchor.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                }}
              >{t("See Program")}</button>
        </div>
      </div>
    </div>
  );
};

export default Header;