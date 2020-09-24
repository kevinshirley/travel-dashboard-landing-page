import React, { useContext } from 'react';
import { AUTO_TURBO_LOGO, SOFTELO_ORIGINAL_LOGO } from 'src/components/common/svg';
import { TRIP_IMAGINE_WHITE_LOGO } from 'src/components/common/images';
import MobileMenu from 'src/components/common/mobile-menu';
import LanguageSelection from 'src/components/common/language-selection';
import Button from 'src/components/material-ui/text-button';
import useI18n from 'src/hooks/use-i18n';
import { ModalContext } from 'src/store/context/modal-context-provider';

function Navbar() {
  const i18n = useI18n();
  const [isModalOpen, setIsModalOpen] = useContext(ModalContext);

  const MainNavbarContent = () => (
    <div className='inner'>
      <div className='logo'>
        <img src={TRIP_IMAGINE_WHITE_LOGO} alt={i18n.t('alt.autoTurboLogo')} />
      </div>
      <div className='menu-links'>
        <Button className='navbar-menu-link' onClick={() => setIsModalOpen(true)}>
          {i18n.t('navigation.link1')}
        </Button>
        <LanguageSelection />
      </div>
      <div className='mobile-menu-button'>
        <MobileMenu />
      </div>
    </div>
  );

  return (
    <div className='navbar'>
      <MainNavbarContent />
    </div>
  );
};

export default Navbar;
