import React from 'react';
import styles from './Block.module.scss';
import cx from 'classnames';
const Block = (props) => {
  const {
    item: { title, content },
    isSelected,
  } = props;
  const classNames = cx(styles.block, { [styles.block__selected]: isSelected });
  return (
    <div className={classNames}>
      <strong>{title}</strong>
      <p>{content}</p>
    </div>
  );
};

Block.defaultProps = {
  item: {
    title: 'yes',
    content: 'Lorem ipsum',
  },
  isSelected: false,
};

export default Block;
