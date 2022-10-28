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

const url =
  "https://images.unsplash.com/photo-1666844550308-9b47df48af49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";

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
