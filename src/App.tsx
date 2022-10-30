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

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoading = () => {
    setTimeout(() => setIsLoading(false), 2000);
  };

  useEffect(() => {
    window.addEventListener("load", handleLoading);

    return () => {
      window.removeEventListener("load", handleLoading);
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
