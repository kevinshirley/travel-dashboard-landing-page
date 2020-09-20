import React from 'react';
import Fade from 'react-reveal/Fade';
import { TELEPHONE } from 'src/components/common/svg';
import PhoneNumberMainCta from 'src/components/common/phone-number-main-cta';
import useI18n from 'src/hooks/use-i18n';

function HomeSection4() {
  const i18n = useI18n();

  return (
    <section className="home-section-4" id='contact'>
      <div className='phone-icon'>
        <img src={TELEPHONE} alt={i18n.t('alt.callUs')} />
      </div>
      <div className='steps'>
        <div className='step'>
          <h4>{i18n.t('homeSection5.step1.title')}</h4>
          <p>{i18n.t('homeSection5.step1.description')}</p>
        </div>
        <div className='step'>
          <h4>{i18n.t('homeSection5.step2.title')}</h4>
          <p>{i18n.t('homeSection5.step2.description')}</p>
        </div>
      </div>
      <PhoneNumberMainCta reverted />
    </section>
  );
};

export default HomeSection4;