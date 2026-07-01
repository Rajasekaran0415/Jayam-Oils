import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!form.email || !form.password) {
      setError("All fields are required");
      return;
    }

    const result = login(form.email, form.password);
    if (result.success) {
      navigate("/");
    } else {
      setError(result.error);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "calc(100vh - 160px)", background: "#f8f9fa" }}
    >
      <div className="card shadow-lg border-0 rounded-4 p-5" style={{ width: "450px" }}>
        <h2 className="text-center fw-bold mb-1" style={{ color: "#2E7D32" }}>
          Welcome Back
        </h2>
        <p className="text-center text-muted mb-4">Login to your account</p>

        {error && (
          <div className="alert alert-danger py-2 text-center">{error}</div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>
            <input
              type="email"
              name="email"
              className="form-control form-control-lg rounded-3"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="form-label fw-semibold">Password</label>
            <input
              type="password"
              name="password"
              className="form-control form-control-lg rounded-3"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-success w-100 btn-lg rounded-3 fw-semibold"
            style={{ backgroundColor: "#2E7D32" }}
          >
            Login
          </button>
        </form>

        <p className="text-center mt-4 mb-0">
          Don&apos;t have an account?{" "}
          <Link to="/signup" style={{ color: "#2E7D32" }} className="fw-semibold">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
