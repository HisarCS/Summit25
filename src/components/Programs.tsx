import "../styles/components/Program.scss";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";


const Programs = () => {
  const { t } = useTranslation();
  const Sessions = i18n.getDataByLanguage(i18n.language)?.translation.Programs as Object;
  if (!Sessions) return <>Missing Programs in localization file</>;
  
  return (
    <div className="Program">
      <h1 className="Program-Text">{t("Program Text")}</h1>
      <div className="Programs">
        {Object.entries(Sessions).map((Session, index) => {
          const session = Object.entries(Session[1]);
          session.pop();

          return (
            <div className="program-container">
              <p>{Session[0]}</p>
              <h2>{Session[1].Date}</h2>
              <br />
              {session.map((Workshops, index) => {
                return (
                  <>
                    <div>
                      <p>{Workshops[1] as string}</p>
                      <strong>{Workshops[0]}</strong>
                    </div>
                    <hr />
                  </>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Programs