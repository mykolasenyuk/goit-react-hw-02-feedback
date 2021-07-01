import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOption.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const btns = Object.keys(options);
  // console.log(Object.keys(options));
  return (
    <div className={s.btns}>
      {btns.map((btn, index) => (
        <button
          className={s.btn}
          key={index}
          type="button"
          onClick={() => onLeaveFeedback(btn)}
        >
          {btn}
        </button>
      ))}
    </div>
  );
};
export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
