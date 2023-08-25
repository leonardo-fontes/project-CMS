import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";

import Navbar from "./components/layout/Navbar";
import BlogPage from "./components/pages/BlogPage";
import Privacy from "./components/pages/Privacy";
import Terms from "./components/pages/Terms";
import Input from "./components/inputs/Input";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";

function App() {
  const primaryBg =
    "bg-[var(--primary-color)] bg-gradient-to-b from-[var(--primary-color)] to-[var(--gradient-color)] text-white";
  const secondaryBg = "bg-white text-[#1a1b1f]";

  return (
    <>
      {/* <Container classname={primaryBg} children={<Home />} /> */}
      {/* <Container classname={`min-h-[12vh] items-center ${primaryBg}`} children={<Navbar />} /> */}
      {/* <Container classname={`${secondaryBg}`} children={<BlogPage />} /> */}
      {/* <Container classname={secondaryBg} children={<Privacy/>} /> */}
      {/* <Container classname={secondaryBg} children={<Terms/>} /> */}
      <Container classname={secondaryBg} children={<Login/>}/>
      {/* <Container classname={secondaryBg} children={<Register/>}/> */}
      
      <Footer />
    </>
  );
}

export default App;
