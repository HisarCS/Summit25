import { useTranslation } from "react-i18next";
import "../styles/components/Fablab.scss";

const Fablab = () => {
  const { t } = useTranslation();
  
  return (
    <div className="fablab">
      <div className="image">
        <img />
        <div className="background-wrapper"></div>
        <div className="text">
          <h4>{t("Fablab Image Text 1")}</h4>
          <h4>{t("Fablab Image Text 2")}</h4>
        </div>
      </div>
      <div className="description">
        <h1>{t("Fablab Header")}</h1>
        <p>{t("Fablab Text")}</p>
      </div>
    </div>
  );
};

export default Fablab;