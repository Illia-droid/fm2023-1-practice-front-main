import React, { useState } from 'react';
import Block from './Block';

import styles from './BlocksGroup.module.scss';

const BlocksGroup = (props) => {
  const { idSelectedItem, content } = props;

  const [idSelectItem, setIdSelectItem] = useState(Number(idSelectedItem));
  const setSelect = (id) => {
    setIdSelectItem(id);
  };
  const renderBlocks = content.map((block) => {
    console.log(block.id);
    return (
      <Block
        key={block.id}
        item={block}
        setSelect={setSelect}
        isSelected={block.id === idSelectItem}
      />
    );
  });

  return <div className={styles.blocksGroup}>{renderBlocks}</div>;
};

export default BlocksGroup;
