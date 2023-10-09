import React, { useState } from 'react';
import PriceBlock from './PriceBlock';
import styles from './PricingBlock.module.scss';
const PricingBlock = (props) => {
  const [selectBlock, setSelectBlock] = useState(1);

  const { data } = props;
  const setSelected = (id) => {
    setSelectBlock(id);
  };
  return (
    <section className={styles.container}>
      {data.map((elem) => (
        <PriceBlock
          key={elem.id}
          info={elem}
          isSelect={selectBlock === elem.id}
          setSelected={setSelected}
        />
      ))}
    </section>
  );
};

export default PricingBlock;
