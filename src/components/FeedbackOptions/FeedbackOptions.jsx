import React from "react";
import PropTypes from 'prop-types'; 
import s from "./FeedbackOptions.module.css";


const FeedbackOptions = ({handleInc}) => {
    return(
    <div className={s.button}>
                <button name = "good" type="button" className={s.button} onClick={handleInc}>Good</button>
                <button name = "neutral" type="button" className={s.button} onClick={handleInc}>Neutral</button>
                <button name = "bad" type="button" className={s.button} onClick={handleInc}>Bad</button>
    </div>

    )
};

FeedbackOptions.propTypes = {
    handleInc: PropTypes.func.isRequired,
  };

export default FeedbackOptions;