/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import classes from "../styles/Form.module.css";
import Button from "./Button";
import CheckBox from "./CheckBox";
import TextInput from "./TextInput";
/* eslint-disable no-unused-vars */
export default function Form({ children, className, ...rest }) {
  const [username, setUsername] = useState("");
  const [useremail, setUserEmail] = useState("");
  const [userpassowrd, setUserPassowrd] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState();

  const { signup, currentUser } = useAuth();
//   console.log(currentUser)

  // console.log(useNavigate())
  const navigate = useNavigate();

  async function handleSignup(e) {
    e.preventDefault();

    if (userpassowrd !== confirmPassword) {
      return setError("The Password Did Not Match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(useremail, userpassowrd, username);
      navigate("/");
    } catch (e) {
      console.log(e);
      setLoading(false);
      setError("Falied to create user");
    }
  }

  return (
    <>
      <form
        className={`${className} ${classes.form}`}
        action="#"
        {...rest}
        onSubmit={handleSignup}
      >
        <TextInput
          required
          type="text"
          placeholder="Enter name"
          icon="person"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></TextInput>
        <TextInput
          required
          type="text"
          placeholder="Enter email"
          icon="alternate_email"
          value={useremail}
          onChange={(e) => setUserEmail(e.target.value)}
        ></TextInput>
        <TextInput
          required
          type="password"
          placeholder="Enter password"
          icon="lock"
          value={userpassowrd}
          onChange={(e) => setUserPassowrd(e.target.value)}
        ></TextInput>
        <TextInput
          required
          type="password"
          placeholder="Confirm password"
          icon="lock_clock"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        ></TextInput>

        <CheckBox
          required
          text="I agree to the Terms &amp; Conditions"
          value={agree}
          onChange={(e) => setAgree(e.target.value)}
        ></CheckBox>

        <Button type="submit" disabled={loading}>
          <span>SignUp</span>
        </Button>
        {error && <p className="error">{error}</p>}

        <div className="info">
          Already have an account? <a href="login.html">Login</a> instead.
        </div>
      </form>
    </>
  );
}
