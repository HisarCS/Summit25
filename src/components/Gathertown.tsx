import { useTranslation } from "react-i18next";
import "../styles/components/Gathertown.scss";

const Gathertown = () => {
  const { t } = useTranslation();
  const width = window.innerWidth;
  
  return (
    <div className="gathertown">
          <div className="description">
            <h1>{t("Gathertown Title")}</h1>
            <p>{t("Gathertown Text")}</p>
            <div>
              <a href={t("Gathertown Button Link")}>
                <button>{t("Gathertown Button Text")}</button>
              </a>
            </div>
            
          </div>
          <div className="image">
            <img />
            <div className="background-wrapper"></div>
          </div>
    </div>
  );
};

export default Gathertown;
