import { MutableRefObject, RefObject, useEffect, useState } from "react";
import i18n from "../i18n";
import burgerMenu from "../svgs/burger-menu.svg";
import "../styles/components/Navbar.scss";

interface NavbarProps {
  selectedLanguage: string;
  setSelectedLanguage: (newLanguage: string) => void;
  HeaderSection: RefObject<HTMLElement>;
  FablabSection: RefObject<HTMLElement>;
  ProgramSection: RefObject<HTMLElement>;
  FooterSection: RefObject<HTMLElement>;
}

const Navbar = ({
  selectedLanguage,
  setSelectedLanguage,
  HeaderSection,
  FablabSection,
  ProgramSection,
  FooterSection,
}: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const sections = [
      HeaderSection,
      FablabSection,
      ProgramSection,
      FooterSection,
    ];
    
    const observer = new IntersectionObserver((entries) => {
      const section = entries[0];
      const links = document.querySelectorAll(".navlink");
      if (!section.isIntersecting) return;
      if (section.target.id === "home") {
        links.forEach((link) => {
          if (link.id === "#home") link.classList.add("active");
          else link.classList.remove("active");
        });
      } else if (section.target.id === "about-us" || section.target.id === "workshop") {
        links.forEach((link) => {
          if (link.id === "#about-us") link.classList.add("active");
          else link.classList.remove("active");
        });
      } else if (section.target.id === "program") {
        links.forEach((link) => {
          if (link.id === "#program") link.classList.add("active");
          else link.classList.remove("active");
        });
      } else if (section.target.id === "join") {
        links.forEach((link) => {
          if (link.id === "#join") link.classList.add("active");
          else link.classList.remove("active");
        });
      }
    });
    
    sections.forEach((section) => {
        const current = section.current;
        if (!current) return;
        observer.observe(section.current);
    })  

  }, []);
  const Workshops = i18n.getDataByLanguage(i18n.language)?.translation
    .Navbar as Object;
  if (!Workshops) return <>Missing links in localization file</>;
  const WorkshopsPair = Object.entries(Workshops);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`Navbar ${menuOpen ? "open" : ""}`}>
      <div className={`Navbar-Container ${menuOpen ? "open" : ""}`}>
        <div className="images">
          <a href="/">
            <img className="logo1" height="25" />
          </a>
          <a href="/">Coding Summit X</a>
          <button className="menu" onClick={handleClick}>
            <img src={burgerMenu} height="30" />
          </button>
        </div>

        <div className={`links ${menuOpen ? "open" : ""}`}>
          {WorkshopsPair.map(([key, value]) => {
            return (
              <a
                className={`navlink ${menuOpen ? "open" : ""}`}
                id={value.link.split("/")[1]}
                onClick={(e) => {
                  const link = value.link.split("#")[1];
                  let anchor = document.getElementById(link);
                  e.preventDefault();
                  anchor &&
                    anchor.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                }}
              >
                {value.name}
              </a>
            );
          })}
          <div
            className={`${menuOpen ? "open" : ""}`}
            onClick={async () => {
              const newLanguage = selectedLanguage === "en" ? "tr" : "en";
              await i18n.changeLanguage(newLanguage);
              setSelectedLanguage(newLanguage);
            }}
          >
            <img
              width="40"
              className={`${selectedLanguage === "en" ? "tr" : "en"}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;