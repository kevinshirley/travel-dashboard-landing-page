import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { CHECK_CIRCLE_ICON } from 'src/components/material-ui/icons';
import { CAR_BREAKDOWN } from 'src/components/common/svg';
import { ITINERARY_MANAGER_MACBOOK } from 'src/components/common/images';
import PhoneNumberMainCta from 'src/components/common/phone-number-main-cta';
import ViewDemoCta from 'src/components/common/view-demo-cta';
import useI18n from 'src/hooks/use-i18n';
import { ModalContext } from 'src/context/modal-context-provider';

function HomeSection1() {
  const i18n = useI18n();
  const [isModalOpen, setIsModalOpen] = useContext(ModalContext);

  return (
    <section className="home-section-1">
      <div className="inner">
        <h1>{i18n.t('homeSection1.title')}</h1>
        <div className='details'>
          <div className='list'>
            <ul>
              <li>{CHECK_CIRCLE_ICON} {i18n.t('homeSection1.listItem1')}</li>
              <li>{CHECK_CIRCLE_ICON} {i18n.t('homeSection1.listItem2')}</li>
              <li>{CHECK_CIRCLE_ICON} {i18n.t('homeSection1.listItem3')}</li>
              <li>{CHECK_CIRCLE_ICON} {i18n.t('homeSection1.listItem4')}</li>
            </ul>
          </div>
          <div className='media'>
            <img src={ITINERARY_MANAGER_MACBOOK} alt={i18n.t('alt.carBreakdown')} />
          </div>
        </div>
        <h5>{i18n.t('homeSection1.ctaSubtitle')}</h5>
        <ViewDemoCta isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </div>
    </section>
  );
}

export default HomeSection1;
