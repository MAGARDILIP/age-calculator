import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProfilesDashboard from "./pages/ProfilesDashboard";
import ManageProfile from "./pages/ManageProfile";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="app-wrapper" data-theme={theme}>
      <div className="app-container">
        <Header theme={theme} onToggleTheme={toggleTheme} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profiles" element={<ProfilesDashboard />} />
          <Route path="/profiles/new" element={<ManageProfile />} />
          <Route path="/profiles/edit/:id" element={<ManageProfile />} />
        </Routes>

        <Footer />
      </div>
    </div>
  );
}

export default App;
