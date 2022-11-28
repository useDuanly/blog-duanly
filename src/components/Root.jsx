import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "../page/HomePage";
import BlogPage from "../page/BlogPage";

import Error from "./Error";
import { Header } from "./Header";
import SinglePost from "./SinglePost";
function Root() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<SinglePost />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default Root;
