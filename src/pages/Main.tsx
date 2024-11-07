import Header from "../components/Header";
import Workshops from "../components/Workshops";
import Fablab from "../components/Fablab";
import "../styles/pages/Main.scss";
import Programs from "../components/Programs";
import WorkshopSchedule from "../components/WorkshopSchedule";
import Footer from "../components/Footer";
import { MutableRefObject, RefObject, useEffect, useRef } from "react";
import Gathertown from "../components/Gathertown";
interface MainPageProps {
  HeaderSection: RefObject<HTMLElement>;
  FablabSection: RefObject<HTMLElement>;
  ProgramSection: RefObject<HTMLElement>;
  FooterSection: RefObject<HTMLElement>;
}
const MainPage = ({
  HeaderSection,
  FablabSection,
  ProgramSection,
  FooterSection,
}: MainPageProps) => {
  useEffect(() => {
    let url = window.location.href.split("/");
    let target = url[url.length - 1].toLowerCase();
    let element = document.getElementById(target);
    element && element.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <>
      <section ref={HeaderSection} className="Header-Section" id="home">
        <Header />
      </section>
      <section ref={FablabSection} className="Fablab-Section" id="about-us">
        <Fablab />
      </section>
      <section
        ref={FablabSection}
        className="Gathertown-Section"
        id="gathertown"
      >
        <Gathertown />
      </section>
      <section ref={FablabSection} className="Workshop-Section" id="workshop">
        <Workshops />
      </section>
      <section ref={ProgramSection} className="Program-Section" id="program">
        <Programs />
      </section>
      <section className="Workshop-Schedule-Section">
        <WorkshopSchedule />
      </section>
      <section ref={FooterSection} className="Footer-Section" id="join">
        <Footer />
      </section>
    </>
  );
};

export default MainPage;
