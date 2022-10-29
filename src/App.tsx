import {
  AboutMe,
  Hero,
  Navbar,
  Experience,
  Works,
  Contact,
  Footer,
} from "./components";
import LazyImg from "./components/LazyImg";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        <Experience />
        <Works />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
export default App;
