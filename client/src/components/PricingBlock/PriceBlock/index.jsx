import React, { useEffect, useState } from 'react';
import ReactHtmlParser from 'react-html-parser';

import styles from './PriceBlock.module.scss';

import CONSTANTS from '../../../constants';

const { COLORS_PRICE } = CONSTANTS;
const PriceBlock = (props) => {
  const {
    info: {
      id,
      title,
      subTitle,
      price: { currency, amount },
      description,
    },
    isSelect,
    setSelected,
  } = props;
  /* якщо initialState поставити хардкорно false, та зробити ширину 
  як на маленькому екрані і оновити сторінку, то стилі відображаються як для великого екрану*/
  const initialIsMobile = window.innerWidth <= 900;
  const [isMobile, setIsMobile] = useState(initialIsMobile);
  const handleCLick = () => {
    if (!isSelect) {
      return setSelected(id);
    }
    return setSelected(false);
  };
  const colorText = COLORS_PRICE[title];
  const colorStyleArticle = isMobile ? COLORS_PRICE[title] : '';
  const colorStyleDiv = isMobile ? '' : COLORS_PRICE[title];

  useEffect(() => {
    const handleResize = ({ target: { innerWidth } }) => {
      setIsMobile(innerWidth <= 900);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <article
      className={styles.block}
      style={{ borderColor: colorStyleArticle }}
    >
      <div
        className={styles.block__title}
        style={{ borderColor: colorStyleDiv }}
      >
        <div onClick={handleCLick} className={styles.titleWrapper}>
          <h2 className={styles.heading} style={{ color: colorText }}>
            {title}
          </h2>
          <p className={styles.heading__description}>{!isMobile && subTitle}</p>
          <h3 className={styles.heading__price} style={{ color: colorText }}>
            {!isMobile && currency}
            {amount}
          </h3>
        </div>
        {isMobile && (
          <button onClick={handleCLick} className={styles.btnForOpen}>
            {isSelect ? (
              <i className="fa fa-minus" style={{ color: colorText }}></i>
            ) : (
              <i className="fa fa-plus" style={{ color: colorText }}></i>
            )}
          </button>
        )}
      </div>

      {(!isMobile || isSelect) && ( //перевірка щоб для мобільних пристроїв контент відображався по кліку, а для великих екранів був одразу весь контент
        <div className={styles.contentWrapper}>
          <ul className={styles.forGreyLine}>
            {description.map((elem, i) => {
              if (typeof elem === 'string') {
                return (
                  <li key={i}>
                    <p>{ReactHtmlParser(elem)}</p>
                  </li>
                );
              }
              return (
                <li key={i}>
                  <p className={styles.forLine}>{elem.content}</p>
                  {!isMobile && <em>{elem.hint}</em>}
                  {elem.items && (
                    <ul>
                      {elem.items.map((item, i) => (
                        <li key={i}>
                          <p>
                            <i className="fas fa-check" />
                            {item.itemContent}
                          </p>
                          {!isMobile && <em>{item.itemHint}</em>}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
          <button
            className={styles.btnStart}
            style={{ backgroundColor: colorText }}
          >
            <i className="fas fa-check" />
            Start
          </button>
        </div>
      )}
    </article>
  );
};

export default PriceBlock;
