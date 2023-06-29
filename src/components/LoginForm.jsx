/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import classes from "../styles/Form.module.css";
import Button from "./Button";
import TextInput from "./TextInput";
export default function LoginForm({ className }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState();
  const [error, setError] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      navigate("/");
    } catch (e) {
      console.log(e);
      setError("Loading Failed");
    }
  }

  return (
    <>
      <form
        className={`${className} ${classes.form}`}
        action="#"
        onSubmit={handleLogin}
      >
        <TextInput
          icon="alternate_email"
          type="text"
          placeholder="Enter email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></TextInput>

        <TextInput
          icon="lock"
          type="password"
          placeholder="Enter password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></TextInput>

        <Button type="submit" disabled={loading}>
          <span>Login</span>
        </Button>
        {error && <p className="error">{error}</p>}

        <div className="info">
          Don't have an account? <a href="signup.html">Signup</a> instead.
        </div>
      </form>
    </>
  );
}
