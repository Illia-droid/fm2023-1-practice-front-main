import React from 'react';
import styles from './Block.module.scss';
import cx from 'classnames';

const Block = (props) => {
  const {
    item: { id, title, content },
    isSelected,
    setSelect,
  } = props;
  const classNames = cx(styles.block, { [styles.block__selected]: isSelected });
  const handleSelect = () => {
    setSelect(id);
  };
  return (
    <div className={classNames} onClick={handleSelect}>
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
