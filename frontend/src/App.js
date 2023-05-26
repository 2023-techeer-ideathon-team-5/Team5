import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import MainPage from "./pages/MainPage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import PostPage from "./pages/PostPage/postPage";
import WritePage from "./pages/WritePage";
import ProfilePage from "./pages/ProfilePage/profilePage";
import BoardListPage from "./pages/BoardListPage";
import DetailBoardPage from "./pages/DetailBoardPage";
import BoardListPage from "./pages/BoardListPage";
import ChangePasswordPage from "pages/ChangePassword/changePassword";
import FeedbackPage from "./pages/FeedbackPage/feedbackPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="signup" element={<SignUpPage />} />
        <Route path="/" element={<SignInPage />} />
        <Route path="/post" element={<PostPage />} />
        <Route path="/ProfilePage" element={<ProfilePage />} />
        <Route path="/board-wirte" element={<WritePage />} />
        <Route path="/board-list" element={<BoardListPage />} />
        <Route path="/board/:boardId" element={<DetailBoardPage />} />
        <Route
          path="/profilePage/changePassword"
          element={<ChangePasswordPage />}
        />
        <Route path="/profilePage/feedbackPage" element={<FeedbackPage />} />
      </Routes>
    </Router>
  );
}

export default App;
