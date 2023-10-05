import React from 'react';
import CONSTANTS from '../../../../constants';
import styles from './StepItem.module.scss';

const StepItem = (props) => {
  const {
    item: {
      classNameWrapper,
      classItemRow,
      stepName,
      stepDescription1,
      stepDescription2,
      stepDescription3,
      src,
      alt,
    },
  } = props;

  return (
    <div className={styles[classNameWrapper]}>
      <div className={styles[classItemRow]}>
        <div>
          <h3>{stepName}</h3>
          <p>
            <i className="fas fa-check" />
            <span>{stepDescription1}</span>
          </p>
          <p>
            <i className="fas fa-check" />
            <span>{stepDescription2}</span>
          </p>
          {stepDescription3 && (
            <p>
              <i className="fas fa-check" />
              <span>{stepDescription3}</span>
            </p>
          )}
        </div>
        <img src={`${CONSTANTS.STATIC_IMAGES_PATH}${src}`} alt={alt} />
      </div>
    </div>
  );
};

export default StepItem;
