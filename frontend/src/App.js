import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="signin" element={<SignInPage />} />
      </Routes>
    </Router>
  );
}

export default App;
