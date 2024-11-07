import './styles/pages/App.scss';
import { useState, UIEvent, useEffect, useRef, createRef } from "react";
import i18n from "./i18n";
import Navbar from "./components/Navbar";
import MainPage from './pages/Main';
import "./styles/utils/pageDebug.scss"

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 600);
  }, []); 
  
  const HeaderSection = createRef<HTMLElement>();
  const FablabSection = createRef<HTMLElement>();
  const ProgramSection = createRef<HTMLElement>();
  const FooterSection = createRef<HTMLElement>();
  
  return (
    <div className="Main-Container">
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <>
          <Navbar
            selectedLanguage={selectedLanguage}
            setSelectedLanguage={setSelectedLanguage}
            HeaderSection={HeaderSection}
            FablabSection={FablabSection}
            ProgramSection={ProgramSection}
            FooterSection={FooterSection}
          />
          <MainPage
            HeaderSection={HeaderSection}
            FablabSection={FablabSection}
            ProgramSection={ProgramSection}
            FooterSection={FooterSection} 
          />
        </>
      )}
    </div>
  );
}

export default App;
