/* eslint-disable react/prop-types */
import classes from '../styles/Illustration.module.css';


export default function Illustration({imgURL, alternativeText}){
    return (
        <>
            <div className={classes.illustration}>
            <img src={imgURL} alt={alternativeText} />
          </div>
        </>
    )
}