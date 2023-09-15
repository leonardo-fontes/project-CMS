import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { BrowserRouter, Routes, ScrollRestoration } from "react-router-dom";
import { router } from "./router.tsx";
import Container from "./components/layout/Container.tsx";
import Navbar from "./components/layout/Navbar.tsx";
import Footer from "./components/layout/Footer.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter basename="/">
            <Navbar />
            <Container>
                <Routes>{...router}</Routes>
            </Container>
            <Footer />
        </BrowserRouter>
    </React.StrictMode>,
);
