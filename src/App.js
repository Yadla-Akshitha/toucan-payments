import { Routes, Route } from "react-router-dom";
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Support from './components/Support';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-roboto text-primary">
      <Nav />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
