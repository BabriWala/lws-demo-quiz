import _ from "lodash";
import { useLocation, useParams } from "react-router-dom";
import Analysis from "../Analysis";
import Summary from "../Summary";
import useAnswers from "../hooks/UseAnswers";

export default function Result() {
  const { id } = useParams();
  const location = useLocation();
  //   const { state } = location;
  const qna = location.state;

  const { loading, error, answers } = useAnswers(id);

  //   console.log(location)
  //   console.log(qna)

  function calculate() {
    let score = 0;

    answers.forEach((question, index1) => {
      let correctIndexs = [];
      let checkedIndexes = [];

      question.options.forEach((option, index2) => {
        if (option.correct) correctIndexs.push(index2);
        if (qna[index1].options[index2].checked) {
          checkedIndexes.push(index2);
          option.checked = true;
        }
      });

      if (_.isEqual(correctIndexs, checkedIndexes)) {
        score = score + 5;
      }
    });

    return score;
  }

  const userScore = calculate();
  // console.log(answers);
  // console.log(qna)

  return (
    <>
      {loading && <div>Loading.....</div>}
      {error && <div>There was an error !</div>}
      {answers && answers.length > 0 && (
        <>
          <Summary score={userScore} noq={answers.length}></Summary>
          <Analysis answers={answers}></Analysis>
        </>
      )}
    </>
  );
}
