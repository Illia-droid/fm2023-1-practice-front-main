import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import PricingBlock from '../../components/PricingBlock';

import dataPricing from './dataPrice.json';

const PricingPage = (props) => {
  return (
    <>
      <Header />
      <PricingBlock data={dataPricing.nameContent} />
      <Footer />
    </>
  );
};

export default PricingPage;
