import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import MainPage from "./pages/MainPage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import PostPage from "./pages/PostPage/postPage";
import ProfilePage from "./pages/ProfilePage/profilePage";
import ChangePasswordPage from "pages/ChangePassword/changePassword";

import DetailBoardPage from "./pages/DetailBoardPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="signup" element={<SignUpPage />} />
        <Route path="/" element={<SignInPage />} />
        <Route path="/post" element={<PostPage />} />
        <Route path="/ProfilePage" element={<ProfilePage />} />
        <Route path="/board/:boardId" element={<DetailBoardPage />} />
        <Route
          path="/profilePage/changePassword"
          element={<ChangePasswordPage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
