import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux/Redux";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Favorites } from "./pages/favorites/Favorites";
import { Home } from "./pages/home/Home";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <nav className="homeNavbar">
          <Link to="/">Home</Link> | <Link to="favorites">Favorites</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
