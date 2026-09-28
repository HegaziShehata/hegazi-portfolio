import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Training from "./components/Training";
import Services from "./components/Services";
import Projects from "./components/Projects";
import CareerGoals from "./components/CareerGoals";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import ScrollReveal from "./components/ScrollReveal";
import ParticleField from "./components/ParticleField";

export default function App() {
  return (
    <>
      <ParticleField />
      <ScrollReveal />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Training />
        <Services />
        <Projects />
        <CareerGoals />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
