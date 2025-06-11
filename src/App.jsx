import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Home from "./routes/Home";
import ProfilePage from "./layouts/ProfilePage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home is directly at "/" */}
        <Route path="/" element={<Home />} />
        {/* Other Routes */}
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
