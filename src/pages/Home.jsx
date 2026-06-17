import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MyStory from "../components/MyStory";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Leadership from "../components/Leadership";
import BeyondCoding from "../components/BeyondCoding";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
return (
<> <Navbar />

  <main>
    <Hero />

    <MyStory />

    <Experience />

    <Skills />

    <Leadership />

    <BeyondCoding />

    <Projects />

    <Contact />
  </main>

  <Footer />
</>

);
};

export default Home;
