import {
  Outlet,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import BlogPage from "./pages/BlogPage";
import Me from "./pages/Plataform/Me";
import api from "./service/api";
import Plataform from "./pages/Plataform";
import { AuthProvider } from "./contexts/Auth/AuthProvider";
import Navbar from "./components/layout/Navbar";
import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer";
import Empresa from "./pages/Plataform/Empresa";
import ProductPage from "./pages/Plataform/ProductPage";
import Search from "./pages/Plataform/Search";

const plataform = [
  <Route path="test" element={<>test</>} />,
  <Route path="me" loader={async () => await api.getUser()} element={<Me />} />,
  <Route
    path="empresa"
    loader={async () => await api.getUser()}
    element={<Empresa />}
  />,
  <Route
    path="products"
    loader={async () => await api.getUser()}
    element={<ProductPage />}
  />,
  <Route
    path="search"
    loader={async () => await api.getUser()}
    element={<Search />}
  />,
];

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <AuthProvider>
          <Navbar />
          <Container>
            <Outlet />
          </Container>
          <Footer />
        </AuthProvider>
      }
    >
      <Route index element={<Home />} />
      <Route path="/about" element={<></>} />,
      <Route path="/privacy-policies" element={<Privacy />} />,
      <Route path="/terms" element={<Terms />} />,
      <Route path="/login" element={<Login />} />,
      <Route path="/register" element={<Register />} />,
      <Route path="/forgot-password" element={<ForgotPassword />} />,
      <Route path="/plataform" element={<Plataform />}>
        {...plataform}
      </Route>
      <Route path="/blog-example" element={<BlogPage />} />
    </Route>
  )
);
