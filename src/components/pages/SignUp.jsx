import img from "../../assets/images/signup.svg";
import classes from "../../styles/SignUp.module.css";
import Form from "../Form";
import Illustration from "../Illustration";
export default function Signup() {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration imgURL={img} alternativeText="Sign Up"></Illustration>
        <Form className={`${classes.signup} form`}></Form>
      </div>
    </>
  );
}
