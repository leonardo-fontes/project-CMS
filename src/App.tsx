import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import Connections from "./components/partials/Home/Connections";
import Video from "./components/partials/Home/Video";
import Company from "./components/partials/Home/Company"
import About from "./components/partials/Home/About";
import Voluntary from "./components/partials/Home/Voluntary";
import MeetUs from "./components/partials/Home/MeetUs";
function App() {

  const primaryBg = "bg-[var(--primary-color)] bg-gradient-to-b from-[var(--primary-color)] to-[var(--gradient-color)] text-white"
  const secondaryBg = "bg-white text-[#1a1b1f]"
  return (
    <>
      
      <Container
        classname={primaryBg}
        children={<Home />}
      />
      <Container
        classname={secondaryBg}
        children={<Video />}
      />
      <Container
        classname={primaryBg}
        children={<Connections />}
      />
        <Container
          classname={secondaryBg}
          children={<About />}
        />
      <Container
        classname={primaryBg}
        children={<Company />}
      />
       <Container
        classname={` ${primaryBg}`}
        children={<Voluntary />}
      />
      <Container
        classname={` ${secondaryBg}`}
        children={<MeetUs />}
      />

      <Footer />
    </>
  );
}

export default App;
