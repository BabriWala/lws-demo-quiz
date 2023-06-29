import { Fragment } from "react";
import classes from "../styles/Answers.module.css";
import CheckBox from "./CheckBox";
export default function Answers({ options = [], handleChange, input }) {
    console.log(options)
  return (
    <>
      <div className={classes.answers}>
        {options.map((option, index) => (
          <Fragment key={index}>
            {
                input? (
                    <CheckBox
                    className={classes.answer}
                    text={option.title}
                    value={index}
                    checked={option.checked}
                    onChange={(e) => handleChange(e, index)}
                ></CheckBox>
                ) : (
                    <CheckBox
                    className={`${classes.answer} ${
                        option.correct ? classes.correct :  option.checked ? classes.wrong : null
                    }`}
                    text={option.title}
                    defaultChecked={option.checked}
                    disabled
                    onChange={(e) => handleChange(e, index)}
                ></CheckBox>
                )
            }
          </Fragment>
        ))}
      </div>
    </>
  );
}
