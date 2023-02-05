import PropTypes from 'prop-types';
import css from './Statistics.module.css'

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <p className={css.p}>
        Good : <span className={css.span}>{good}</span>
      </p>
      <p className={css.p}>
        Neutral : <span className={css.span}>{neutral}</span>
      </p>
      <p className={css.p}>
        Bad : <span className={css.span}>{bad}</span>
      </p>
      <p className={css.p}>
        Total : <span className={css.span}>{total}</span>
      </p>
      <p className={css.p}>
        Positive feedback :{' '}
        <span className={css.span}>{positivePercentage}%</span>
      </p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
