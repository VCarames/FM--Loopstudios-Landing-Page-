import About from "../components/About";
import Creations from "../components/Creations";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Home() {
  return (
    <>
      <Header heading="Immersive experiences that deliver" />
      <main>
        <About />
        <Creations />
      </main>
      <Footer />
    </>
  );
}

export default Home;
