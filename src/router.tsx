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
import User from "./pages/Plataform/Me";
import Plataform from "./pages/Plataform";
import { AuthProvider } from "./contexts/Auth/AuthProvider";
import Navbar from "./components/layout/Navbar";
import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer";
import Empresa from "./pages/Plataform/Empresa";
import ProductPage from "./pages/Plataform/ProductPage";
import Search from "./pages/Plataform/Search";
import ProfessionalCircle from "./pages/Plataform/ProfessionalCircle";
import RegisterProCircle from "./pages/Plataform/RegisterProCircle";
import api from "./service/api";
import RecoverPassword from "./pages/RecoverPassword";
import Construindo from "./pages/Plataform/Construindo";

const plataform = [
    <Route path="user/me" element={<User />} />,
    <Route
        path="user/:userId"
        loader={async ({ params }) => await api.getUser(params.userId)}
        element={<User />}
    />,
    <Route path="empresa" element={<Empresa />} />,
    <Route path="products" element={<ProductPage />} />,
    <Route path="search" element={<Search />} />,
    <Route path="professional_circle" element={<ProfessionalCircle />} />,
    <Route path="pro_circle" element={<RegisterProCircle />} />,
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
            <Route index path="/register" element={<Register />} />,
            <Route path="/recover-password" element={<ForgotPassword />} />,
            <Route path="/reset-password" element={<RecoverPassword />} />,
            <Route path="/plataform" element={<Plataform />}>
                {...plataform}
            </Route>
            <Route path="/blog-example" element={<BlogPage />} />
            <Route path="/404-page" element={<Construindo />} />
            <Route path="*" element={<Construindo />} />
        </Route>,
    ),
);
