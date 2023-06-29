import Styles from "../styles/Analysis.module.css";
import Questions from "./Questions";

export default function Analysis({answers}) {
  return (
    <>
      <div className={Styles.analysis}>
        <h1>Question Analysis</h1>
        <Questions answers={answers}></Questions>
      </div>
    </>
  );
}
