import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import PostPage from "./pages/PostPage/postPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="signup" element={<SignUpPage />} />
        <Route path="signin" element={<SignInPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/post" element={<PostPage />} />
      </Routes>
    </Router>
  );
}

export default App;
