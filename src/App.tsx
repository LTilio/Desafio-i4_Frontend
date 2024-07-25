import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar/NavBar";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div id="root">
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
