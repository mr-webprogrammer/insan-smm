import About from "./components/About";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <Header />
      <div className="devider"></div>
      <About />
      <div className="devider"></div>
      <FAQs />
      <div className="devider"></div>
      <Services />
      <div className="devider"></div>
      <Projects />
      <div className="devider"></div>
      <Testimonials/>
      <div className="devider"></div>
      <Footer/>
    </>
  );
}

export default App;
