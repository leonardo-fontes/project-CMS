import { Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Privacy from "./components/pages/Privacy";
import Terms from "./components/pages/Terms";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import BlogPage from "./components/pages/BlogPage";

export const router = [
    <Route path="/" element={<Home />} />,
    <Route path="/about" element={<></>} />,
    <Route path="/privacy-policies" element={<Privacy />} />,
    <Route path="/terms" element={<Terms />} />,
    <Route path="/login" element={<Login />} />,
    <Route path="/register" element={<Register />} />,
    <Route path="/blog-example" element={<BlogPage />} />,
];
