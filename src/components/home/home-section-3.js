import React from 'react';
import Fade from 'react-reveal/Fade';
import { MONEY, CAR_RECYCLE, ECO } from 'src/components/common/svg';
import PhoneNumberMainCta from 'src/components/common/phone-number-main-cta';
import { KEYBOARD_ARROW_RIGHT_ICON } from 'src/components/material-ui/icons';
import useI18n from 'src/hooks/use-i18n';

function HomeSection3() {
  const i18n = useI18n();

  const CardCta = () => (
    <a href={i18n.t('common.companyPhoneNumberHref')}>{i18n.t('homeSection3.cardCta')} {KEYBOARD_ARROW_RIGHT_ICON}</a>
  );

  return (
    <section className="home-section-3" id={i18n.t('navigation.howItWorksId')}>
      <h2>{i18n.t('homeSection3.title')}</h2>
      <div className='cards'>
        <div className='row row-1'>
          <div className='content'>
            <div className='image'>
              <img src={CAR_RECYCLE} alt={i18n.t('alt.recycleYourCar')} />
            </div>
            <div className='card'>
              <h3>{i18n.t('homeSection3.card1.title')}</h3>
              <p>{i18n.t('homeSection3.card1.description')}</p>
              <CardCta />
            </div>
          </div>
        </div>
        <div className='row row-2'>
          <div className='content'>
            <div className='image'>
              <img src={MONEY} alt={i18n.t('alt.receiveYourPayment')} />
            </div>
            <div className='card'>
              <h3>{i18n.t('homeSection3.card2.title')}</h3>
              <p>{i18n.t('homeSection3.card2.description')}</p>
              <CardCta />
            </div>
          </div>
        </div>
        <div className='row row-3'>
          <div className='content'>
            <div className='image'>
              <img src={ECO} alt={i18n.t('alt.recycleForThePlanet')} />
            </div>
            <div className='card'>
              <h3>{i18n.t('homeSection3.card3.title')}</h3>
              <p>{i18n.t('homeSection3.card3.description')}</p>
              <CardCta />
            </div>
          </div>
        </div>
      </div>
      <PhoneNumberMainCta />
    </section>
  );
};

export default HomeSection3;