import { BrowserRouter, Routes, Route } from "react-router-dom";

import Register from "../pages/Register";

import ProtectedRoute from "./ProtectedRoutes";

import Home from "../pages/Home";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>

                

                <Route path="/register" element={<Register />} />

                <Route
                    path="/"
                    element={
                        <ProtectedRoute>
                            <Home />
                        </ProtectedRoute>
                    }
                />

            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;