import React from 'react';
import Fade from 'react-reveal/Fade';
import { MONEY, TOW_TRUCK } from 'src/components/common/svg';
import { KEYBOARD_ARROW_RIGHT_ICON, KEYBOARD_ARROW_DOWN_ICON } from 'src/components/material-ui/icons';
import useI18n from 'src/hooks/use-i18n';

function HomeSection2() {
  const i18n = useI18n();

  return (
    <section className="home-section-2" id={i18n.t('navigation.sellMyCarId')}>
      <h2>{i18n.t('homeSection2.title')}</h2>
      <div className='media'>
        <div className='tow-truck'>
          <img src={TOW_TRUCK} alt={i18n.t('alt.towTruck')} />
        </div>
        {KEYBOARD_ARROW_RIGHT_ICON}
        <div className='payment'>
          <img src={MONEY} alt={i18n.t('alt.receiveYourPayment')} />
        </div>
      </div>
      <div className='mobile-media'>
        <div className='tow-truck'>
          <img src={TOW_TRUCK} alt={i18n.t('alt.towTruck')} />
        </div>
        {KEYBOARD_ARROW_DOWN_ICON}
        <div className='payment'>
          <img src={MONEY} alt={i18n.t('alt.receiveYourPayment')} />
        </div>
      </div>
      <ul>
        <li>{KEYBOARD_ARROW_RIGHT_ICON} {i18n.t('homeSection2.listItem1')}</li>
        <li>{KEYBOARD_ARROW_RIGHT_ICON} {i18n.t('homeSection2.listItem2')}</li>
        <li>{KEYBOARD_ARROW_RIGHT_ICON} {i18n.t('homeSection2.listItem3')}</li>
      </ul>
    </section>
  );
};

export default HomeSection2;