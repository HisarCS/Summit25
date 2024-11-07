import "../styles/components/Workshop-Schedule.scss"
import i18n from "../i18n";
import { useTranslation } from "react-i18next";

const WorkshopSchedule = () => {
  const { t } = useTranslation();
  const Sessions = i18n.getDataByLanguage(i18n.language)?.translation.Sessions as Object;
  if (!Sessions) return <>Missing Sessions in localization file</>;
  
  return (
    <div className="Workshop-Schedule">
      <h1>{t("Session Text")}</h1>
      
        {Object.entries(Sessions).map((Session, index) => {
          return (
            <>
              <div className="schedule-container">
                <h1>{Session[0]}</h1>
                <div className="table-wrapper">
                  {Object.entries(Session[1]).map((Workshops, index) => {
                    return (
                      <div>
                        <h1 className="header">{Workshops[0]}</h1>
                        <div className="table">
                          {(Workshops[1] as String[]).map(
                            (Workshop: String, index) => {
                              return (
                                <div className="cell" key={index}>
                                  {Workshop}
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          );
        })}
    </div>
  );
}

export default WorkshopSchedule