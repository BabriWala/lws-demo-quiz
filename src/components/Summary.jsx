import { useMemo } from "react";
import Success from "../assets/images/success.png";
import Styles from "../styles/Summary.module.css";
import useFetch from "./hooks/useFetch";

export default function Summary({ score, noq }) {
  const getKeyword = () => useMemo(()=>{
    if ((score / (noq * 5)) * 100 < 50) {
      return "failed";
    } else if ((score / (noq * 5)) * 100 < 75) {
      return "good";
    } else if ((score / (noq * 5)) * 100 < 100) {
      return "very good";
    } else {
      return "excellent";
    }
  }),[score, noq];

  const { loading, error, result } = useFetch(
    `https://api.pexels.com/v1/search?query=${getKeyword()}&per_page=1`,
    "GET",
    {
      Authorization: "n3sogUVpo6mRSevdvKxX9UJyzr7yuyRnm4BB3KNbFbXweLzBnPen6DjM",
    }
  );
  console.log(result);
  const image = result ? result?.photos[0].src.medium : Success;
  return (
    <>
      <div className={Styles.summary}>
        <div className={Styles.point}>
          {/* <!-- progress bar will be placed here --> */}
          <p className={Styles.score}>
            Your score is <br />
            {score} out of {noq * 5}
          </p>
        </div>

        {loading && (
          <div className={Styles.badge}>Loading Your Badge...........</div>
        )}

        {error && (
          <div className={Styles.badge}>An Error Occured...........</div>
        )}

        {!loading && !error && (
          <div className={Styles.badge}>
            <img src={image} alt="Success" />
          </div>
        )}
      </div>
    </>
  );
}
