import { useEffect, useState } from "react";
import {
  AboutMe,
  Hero,
  Navbar,
  Experience,
  Works,
  Contact,
  Footer,
  Loader,
} from "./components";
import LazyImg from "./components/LazyImg";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.addEventListener("load", () => {
      setTimeout(() => setIsLoading(false), 2000);
    });

    return () => {
      window.removeEventListener("load", () => {
        setTimeout(() => setIsLoading(false), 2000);
      });
    };
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
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
