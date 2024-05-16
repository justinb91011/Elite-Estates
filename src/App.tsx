import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Elite-Estates" element={<Home />} />
        <Route path="/Elite-Estates/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
