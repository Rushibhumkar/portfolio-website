import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import KinmarvelSupport from "@/components/KinmarvelSupport";
import Projects from "@/components/Projects";
import ResumeDownload from "@/components/ResumeDownload";
import Skills from "@/components/Skills";
// import QuantiixLogo from "./svgComp/Quantiix";
export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* <QuantiixLogo /> */}
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <ResumeDownload />
        <KinmarvelSupport />
        <Footer />
      </main>
    </>
  );
}
