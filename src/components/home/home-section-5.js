import React from 'react';
import Fade from 'react-reveal/Fade';
import useI18n from 'src/hooks/use-i18n';

function HomeSection5() {
  const i18n = useI18n();

  return (
    <section className="home-section-5">
      <div className='auto-offer'>
        <p className='price-condition'>{i18n.t('homeSection4.offer1.condition1')}</p>
        <h3>{i18n.t('homeSection4.offer1.amount')}</h3>
        <p className='price-condition'>{i18n.t('homeSection4.offer1.condition2')}</p>
        <p className='price-description'>{i18n.t('homeSection4.offer1.description')}</p>
      </div>
      <hr />
      <div className='auto-offer'>
        <p className='price-condition'>{i18n.t('homeSection4.offer2.condition1')}</p>
        <h3>{i18n.t('homeSection4.offer2.amount')}</h3>
        <p className='price-condition'>{i18n.t('homeSection4.offer2.condition2')}</p>
        <p className='price-description'>{i18n.t('homeSection4.offer2.description')}</p>
      </div>
    </section>
  );
};

export default HomeSection5;