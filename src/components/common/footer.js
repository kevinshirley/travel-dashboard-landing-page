import React from 'react';
import { TRIP_IMAGINE_WHITE_LOGO } from 'src/components/common/images';
import PhoneNumberMainCta from 'src/components/common/phone-number-main-cta';
import useI18n from 'src/hooks/use-i18n';
import LanguageSelection from 'src/components/common/language-selection';

function Footer() {
  const i18n = useI18n();
  const today = new Date(), year = today.getFullYear();

  return (
    <div className='footer'>
      <div className='logo'>
        <img src={TRIP_IMAGINE_WHITE_LOGO} alt={i18n.t('alt.autoTurboLogo')} />
      </div>
      <div className='menu-links'>
        <div className='link'>
          <a href={i18n.t('navigation.howItWorksIdHash')}>{i18n.t('footer.link1')}</a>
        </div>
        <div className='link'>
          <a href={i18n.t('navigation.sellMyCarIdHash')}>{i18n.t('footer.link2')}</a>
        </div>
        <div className='link'>
          <a href={i18n.t('navigation.contactIdHash')}>{i18n.t('footer.link3')}</a>
        </div>
      </div>
      <LanguageSelection />
      <div className='schedule'>
        <span className='label'>{i18n.t('footer.mondayToFriday')}</span>
        <span>{i18n.t('footer.mondayToFridayHours')}</span>
        <span className='label'>{i18n.t('footer.saturdayToSunday')}</span>
        <span>{i18n.t('footer.saturdayToSundayHours')}</span>
      </div>
      <div className='contact'>
        <PhoneNumberMainCta />
      </div>
      <div className='copyright'>
        <small>{i18n.t('footer.copyright', { year })}</small>
      </div>
    </div>
  );
};

export default Footer;
