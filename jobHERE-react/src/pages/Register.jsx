import { useState } from "react";
import authService from "../services/authService";

function Register() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        role:"user"
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();  // do not refresh the page on form submission

        try {
            const response = await authService.register(formData);
            console.log("Registration Successful:", response);
        } catch (error) {
            console.error("Registration Failed:", error.response?.data);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
            />

            <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
            />

            <button type="submit">
                Register
            </button>
        </form>
    );
}

export default Register;