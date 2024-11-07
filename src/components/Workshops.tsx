import { useState } from "react";
import i18n from "../i18n";
import "../styles/components/Workshops.scss";
import WorkshopCard from "./WorkshopCard";
import { useTranslation } from "react-i18next";

const Workshops = () => {
  const { t } = useTranslation();
  
  const [DotIndex, setDotIndex] = useState(0) 
  
  const Workshops = i18n.getDataByLanguage(i18n.language)?.translation.Workshops as Object;
  if (!Workshops) return (<>Missing workshops in localization file</>);
  const WorkshopsPair = Object.entries(Workshops)
  
  
  return (
		<div className="Workshops">
			<h1>{t("Workshop Text")}</h1>

			<div className="Workshop-Grid">
				{WorkshopsPair.map((Field) => {
					return (
						<>
							{Object.entries(Field[1]).map((Workshop, index, WorkshopPair) => {
								return (
									<WorkshopCard
										key={index}
										workshop={Workshop}
										location={Field[0]}
									/>
								);
							})}
						</>
					);
				})}
			</div>
		</div>
	);
};

export default Workshops;
