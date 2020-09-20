import React from 'react';
import Fade from 'react-reveal/Fade';
import useI18n from 'src/hooks/use-i18n';
import { KILOMETERS_COLORED, EMERGENCY_TRIANGLE, CAR_BROKEDOWN } from 'src/components/common/svg';

function HomeSection6() {
  const i18n = useI18n();

  return (
    <section className="home-section-6">
      <div className='head-icon'>
        <img src={EMERGENCY_TRIANGLE} alt={i18n.t('alt.carBreakdown')} />
      </div>
      <div className='title'>
        <h4>{i18n.t('homeSection6.title')}</h4>
      </div>
      <div className='list'>
        <p><img src={KILOMETERS_COLORED} alt={i18n.t('alt.carBreakdown')} />{i18n.t('homeSection6.kilometers.text')} <strong>{i18n.t('homeSection6.kilometers.bold')}</strong></p>
        <div className='and'>{i18n.t('homeSection6.and')}</div>
        <p><img src={CAR_BROKEDOWN} alt={i18n.t('alt.carBreakdown')} />{i18n.t('homeSection6.years.text')} <strong>{i18n.t('homeSection6.years.bold')}</strong></p>
      </div>
    </section>
  );
};

export default HomeSection6;
