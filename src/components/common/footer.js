import React, { useContext } from 'react';
import { TRIP_IMAGINE_WHITE_LOGO } from 'src/components/common/images';
import useI18n from 'src/hooks/use-i18n';
import LanguageSelection from 'src/components/common/language-selection';
import ViewDemoCta from 'src/components/common/view-demo-cta';
import { ModalContext } from 'src/store/context/modal-context-provider';

function Footer() {
  const i18n = useI18n();
  const today = new Date(), year = today.getFullYear();
  const [isModalOpen, setIsModalOpen] = useContext(ModalContext);

  return (
    <div className='footer'>
      <div className='logo'>
        <img src={TRIP_IMAGINE_WHITE_LOGO} alt={i18n.t('alt.autoTurboLogo')} />
      </div>
      <div className='menu-links'>
        <div className='link' onClick={() => setIsModalOpen(true)}>
          {i18n.t('footer.link1')}
        </div>
      </div>
      <LanguageSelection />
      <div className='contact'>
        <ViewDemoCta setIsModalOpen={setIsModalOpen} />
      </div>
      <div className='copyright'>
        <small>{i18n.t('footer.copyright', { year })}</small>
      </div>
    </div>
  );
};

export default Footer;
