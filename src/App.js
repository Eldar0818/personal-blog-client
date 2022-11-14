import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import BlogPage from "./pages/BlogPage";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {

  return (
    <>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/blog/:slug" element={<BlogPage/>} />
     </Routes>
     <Footer/>
    </>
  );
}

export default App;
