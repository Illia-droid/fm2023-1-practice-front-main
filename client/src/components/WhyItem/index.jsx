import React from 'react';
import CONSTANTS from '../../constants';
import styles from './WhyItem.module.scss';

const WhyItem = ({ src, alt, title, content }) => {
  return (
    <div className={styles.card}>
      <img src={`${CONSTANTS.STATIC_IMAGES_PATH}${src}`} alt={alt} />
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default WhyItem;
